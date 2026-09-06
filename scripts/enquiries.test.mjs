import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
import vm from "node:vm";
import { createHmac } from "node:crypto";

function loadTs(path, dependencies = {}) {
  const source = ts.transpileModule(fs.readFileSync(path, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const exports = {};
  const context = { exports, require: name => dependencies[name], Request, Response, URL, Buffer, AbortSignal, process: { env: {} }, fetch: async () => Response.json({ ok: true }) };
  vm.runInNewContext(source, context);
  return { exports, context };
}
const { exports: validation } = loadTs("lib/enquiries.ts");
const input = (kind = "contact", extra = {}) => ({ kind, requestId: "12345678-1234-4234-8234-123456789012", fields: { firstName: "Website", lastName: "Test", email: "test@example.com", message: "Test enquiry", ...extra } });
test("all four enquiry types accept their required fields", () => {
  for (const [kind, extra] of [["contact", {}], ["volunteer", { category: "Community", motivation: "Test" }], ["sponsorship", { category: "Sponsor a laptop", motivation: "Test" }], ["partnership", { organization: "Test", department: "CSR", supportType: ["Sponsor (Financial)", "Media Partner"] }]]) {
    assert.equal(validation.validateEnquiry(input(kind, extra)).kind, kind);
  }
});
test("invalid fields cannot bypass required validation", () => {
  for (const change of [{ email: "bad" }, { email: "test@example.com\nBcc:bad@example.com" }, { firstName: " " }, { message: "x".repeat(5001) }, { firstName: {} }]) assert.throws(() => validation.validateEnquiry(input("contact", change)));
  assert.throws(() => validation.validateEnquiry(input("unknown")));
  assert.throws(() => validation.validateEnquiry(input("partnership")));
});
test("only permitted fields are forwarded", () => {
  const result = validation.validateEnquiry(input("contact", { recipient: "attacker@example.com", website: "spam" }));
  assert.equal(result.fields.recipient, undefined);
  assert.equal(result.spam, true);
});
const { exports: api, context } = loadTs("app/api/enquiries/route.ts", { "node:crypto": { createHmac }, "@/lib/enquiries": validation });
const request = (body = input(), headers = {}) => new Request("https://pha.example/api/enquiries", { method: "POST", headers: { "content-type": "application/json", origin: "https://pha.example", ...headers }, body: typeof body === "string" ? body : JSON.stringify(body) });
test("API rejects cross-origin, oversized and malformed requests", async () => {
  assert.equal((await api.POST(request(input(), { origin: "https://other.example" }))).status, 403);
  assert.equal((await api.POST(request("x".repeat(16001)))).status, 413);
  assert.equal((await api.POST(request("{"))).status, 400);
  assert.equal((await api.POST(request(input(), { "content-type": "text/plain" }))).status, 415);
});
test("unconfigured delivery reports failure instead of false success", async () => {
  assert.equal((await api.POST(request())).status, 503);
});
test("API signs payloads and propagates delivery errors", async () => {
  context.process.env = { PHA_ENQUIRIES_URL: "https://example.com/receiver", PHA_ENQUIRIES_SECRET: "test-secret" };
  let envelope;
  context.fetch = async (_url, options) => { envelope = JSON.parse(options.body); return Response.json({ ok: true }); };
  assert.equal((await api.POST(request())).status, 200);
  assert.equal(envelope.signature, createHmac("sha256", "test-secret").update(envelope.payload).digest("hex"));
  assert.equal(JSON.parse(envelope.payload).fields.email, "test@example.com");
  context.fetch = async () => Response.json({ ok: false, rateLimited: true });
  assert.equal((await api.POST(request())).status, 429);
  context.fetch = async () => { throw new Error("network failure"); };
  assert.equal((await api.POST(request())).status, 502);
});

