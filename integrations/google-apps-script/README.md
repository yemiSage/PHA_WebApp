# PHA website enquiries

The receiver is deployed under producthubafrica@gmail.com.

- Contact enquiries: email to producthubafrica@gmail.com.
- Volunteer, partnership and sponsorship: one row in the matching Google Sheets tab, plus an email summary to the same address.
- Replying to the notification addresses the submitter.

Project: https://script.google.com/home/projects/1Yar9Wyw7GYjS5OCpyF51BwKS5luk0x16ryy0MxWwegTgoozRljNLn50N/edit

Spreadsheet: https://docs.google.com/spreadsheets/d/1Ui2G80NGKtauvI5e8btNbg4tYW3eQDpWoJRJXhudBk8/edit

## Website deployment

The local connection is configured in the ignored .env.local file. On the website host, set PHA_ENQUIRIES_URL and PHA_ENQUIRIES_SECRET using these same values, then redeploy. Never expose the secret through a NEXT_PUBLIC variable. No Google credentials are sent to visitors.

## Updating the receiver

Copy Code.gs into the project editor, save, then use Deploy → Manage deployments → Edit → New version. Updating the existing deployment preserves its URL.

For a fresh installation, run setup once. This creates the three application tabs and a hidden delivery ledger. It stores SPREADSHEET_ID and SECRET in Project Settings → Script properties. Deploy as a web app, executing as the account owner, with access set to Anyone. Requests still require an HMAC signature from the website server; unsigned requests are rejected.

## Delivery behaviour

The server validates required fields, email, URL, body size and request origin. Apps Script verifies the signature and timestamp and limits new requests per email address. Spreadsheet values are protected against formula injection.

The hidden _Delivery tab tracks submission IDs and email status. A retry uses the same ID, preventing duplicate application rows. If email delivery fails after a row is saved, retrying sends the pending notification. A very rare interruption between email sending and updating the ledger can produce a duplicate notification; the submission ID identifies it.

Google Apps Script email and execution quotas apply. A failed delivery displays a retry message without clearing the form. Monitor Executions in the Apps Script project and Pending rows in _Delivery if mail stops arriving.

Reference: https://developers.google.com/apps-script/guides/web
