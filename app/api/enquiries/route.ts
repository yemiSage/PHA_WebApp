import { createHmac } from "node:crypto";
import { validateEnquiry } from "@/lib/enquiries";

export const runtime = "nodejs";
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host") || new URL(request.url).host;
  if (origin) {
    try {
      const source = new URL(origin);
      if (!["http:", "https:"].includes(source.protocol) || source.host !== host) {
        return Response.json({ error: "This request could not be verified." }, { status: 403 });
      }
    } catch {
      return Response.json({ error: "This request could not be verified." }, { status: 403 });
    }
  }
  if (!request.headers.get("content-type")?.includes("application/json"))
    return Response.json({ error: "JSON is required." }, { status: 415 });
  let enquiry;
  try {
    const reader = request.body?.getReader();
    if (!reader) throw new Error("Please provide your enquiry details.");
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 16000) {
        await reader.cancel();
        return Response.json(
          { error: "Your message is too large." },
          { status: 413 },
        );
      }
      chunks.push(value);
    }
    enquiry = validateEnquiry(
      JSON.parse(Buffer.concat(chunks).toString("utf8")),
    );
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof SyntaxError
            ? "Please check your form and try again."
            : error instanceof Error
              ? error.message
              : "Invalid enquiry.",
      },
      { status: 400 },
    );
  }
  if (enquiry.spam) return Response.json({ ok: true });
  const endpoint = process.env.PHA_ENQUIRIES_URL;
  const secret = process.env.PHA_ENQUIRIES_SECRET;
  if (!endpoint || !secret)
    return Response.json(
      {
        error:
          "Online submissions are temporarily unavailable. Your details have not been sent.",
      },
      { status: 503 },
    );
  try {
    const payload = JSON.stringify({
      kind: enquiry.kind,
      fields: enquiry.fields,
      requestId: enquiry.requestId,
      timestamp: Date.now(),
    });
    const signature = createHmac("sha256", secret)
      .update(payload)
      .digest("hex");
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload, signature }),
      signal: AbortSignal.timeout(25000),
      redirect: "follow",
      cache: "no-store",
    });
    const result = await response.json();
    if (!response.ok || !result.ok)
      return Response.json(
        {
          error: result.rateLimited
            ? "You have sent several enquiries recently. Please try again in an hour."
            : "We couldn’t confirm delivery. Please try again.",
        },
        { status: result.rateLimited ? 429 : 502 },
      );
    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "We couldn’t confirm delivery. Please try again in a moment." },
      { status: 502 },
    );
  }
}
