// PHA website form delivery. Run setup once, then deploy as a web app.
const RECIPIENT = "producthubafrica@gmail.com";
const HEADERS = ["Submitted at", "Submission ID", "First name", "Last name", "Email", "Phone", "Organization", "Country", "Department", "Support type", "Occupation", "LinkedIn", "Category", "Message"];
const FIELD_KEYS = ["firstName", "lastName", "email", "phone", "organization", "country", "department", "supportType", "occupation", "linkedin", "category", "message"];
const TABS = { volunteer: "Volunteer", partnership: "Partnership", sponsorship: "Sponsorship" };

function setup() {
  const props = PropertiesService.getScriptProperties();
  if (!props.getProperty("SECRET")) props.setProperty("SECRET", Utilities.getUuid() + Utilities.getUuid());
  let book;
  if (props.getProperty("SPREADSHEET_ID")) {
    book = SpreadsheetApp.openById(props.getProperty("SPREADSHEET_ID"));
  } else {
    book = SpreadsheetApp.create("Product Hub Africa — Website submissions");
    props.setProperty("SPREADSHEET_ID", book.getId());
    book.getSheets()[0].setName("Volunteer");
  }
  Object.values(TABS).forEach(name => {
    const sheet = book.getSheetByName(name) || book.insertSheet(name);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setBackground("#2e6cff").setFontColor("#ffffff").setFontWeight("bold");
      sheet.setFrozenRows(1);
      sheet.setColumnWidths(1, HEADERS.length, 160);
      sheet.setColumnWidth(14, 420);
    }
  });
  const ledger = book.getSheetByName("_Delivery") || book.insertSheet("_Delivery");
  if (ledger.getLastRow() === 0) ledger.appendRow(["ID", "Kind", "Sheet row", "Status", "Updated", "Email hash"]);
  if (!ledger.isSheetHidden()) ledger.hideSheet();
  console.log("Submissions spreadsheet: " + book.getUrl());
  console.log("Setup complete. SECRET is stored in Project Settings > Script properties.");
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return output({ ok: false });
  try {
    const props = PropertiesService.getScriptProperties();
    const envelope = JSON.parse(e.postData.contents);
    if (typeof envelope.payload !== "string" || envelope.payload.length > 16000) return output({ ok: false });
    const signature = hex(Utilities.computeHmacSha256Signature(envelope.payload, props.getProperty("SECRET")));
    if (signature !== envelope.signature) return output({ ok: false });
    const data = JSON.parse(envelope.payload);
    if (Math.abs(Date.now() - data.timestamp) > 300000 || !/^[a-f0-9-]{36}$/i.test(data.requestId)) return output({ ok: false });
    if (data.kind !== "contact" && !TABS[data.kind]) return output({ ok: false });
    const fields = data.fields;
    if (!fields || !fields.email || !fields.firstName) return output({ ok: false });
    const book = SpreadsheetApp.openById(props.getProperty("SPREADSHEET_ID"));
    const ledger = book.getSheetByName("_Delivery");
    const found = ledger.getRange("A:A").createTextFinder(data.requestId).matchEntireCell(true).findNext();
    let ledgerRow = found ? found.getRow() : 0;
    if (ledgerRow && ledger.getRange(ledgerRow, 4).getValue() === "Sent") return output({ ok: true });
    const hash = hex(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, fields.email.toLowerCase()));
    const cache = CacheService.getScriptCache();
    const rateKey = "rate-" + hash;
    const count = Number(cache.get(rateKey) || 0);
    if (!ledgerRow && count >= 5) return output({ ok: false, rateLimited: true });
    if (!ledgerRow) {
      let row = "";
      if (TABS[data.kind]) {
        const sheet = book.getSheetByName(TABS[data.kind]);
        const values = FIELD_KEYS.map(key => safeCell(key === "message" ? fields.message || fields.motivation : fields[key]));
        sheet.appendRow([new Date(), data.requestId].concat(values));
        row = sheet.getLastRow();
      }
      ledger.appendRow([data.requestId, data.kind, row, "Pending", new Date(), hash]);
      ledgerRow = ledger.getLastRow();
      cache.put(rateKey, String(count + 1), 3600);
      SpreadsheetApp.flush();
    }
    const summary = Object.keys(fields).map(key => key + ": " + fields[key]).join("\n\n");
    MailApp.sendEmail({
      to: RECIPIENT,
      replyTo: fields.email,
      subject: "[PHA Website] " + data.kind + " — " + fields.firstName.replace(/[\r\n]/g, " "),
      body: "New " + data.kind + " enquiry\nSubmission ID: " + data.requestId + "\n\n" + summary + (data.kind === "contact" ? "" : "\n\nView submissions: " + book.getUrl()),
      name: "Product Hub Africa Website"
    });
    ledger.getRange(ledgerRow, 4, 1, 2).setValues([["Sent", new Date()]]);
    return output({ ok: true });
  } catch (error) {
    console.error("Form delivery failed: " + error.name);
    return output({ ok: false });
  } finally { lock.releaseLock(); }
}

function safeCell(value) {
  const text = String(value || "").slice(0, 5000);
  return /^[=+@\-]/.test(text) ? "'" + text : text;
}
function hex(bytes) { return bytes.map(value => ("0" + ((value + 256) % 256).toString(16)).slice(-2)).join(""); }
function output(value) { return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON); }
