export const enquiryKinds = [
  "contact",
  "volunteer",
  "partnership",
  "sponsorship",
] as const;
export type EnquiryKind = (typeof enquiryKinds)[number];
const allowed = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "organization",
  "country",
  "department",
  "supportType",
  "occupation",
  "linkedin",
  "category",
  "motivation",
  "subject",
  "message",
];
export function validateEnquiry(input: unknown) {
  if (!input || typeof input !== "object")
    throw new Error("Please provide your enquiry details.");
  const data = input as Record<string, unknown>;
  if (!enquiryKinds.includes(data.kind as EnquiryKind))
    throw new Error("Please select a valid enquiry type.");
  if (
    !data.fields ||
    typeof data.fields !== "object" ||
    Array.isArray(data.fields)
  )
    throw new Error("Please provide your enquiry details.");
  if (
    typeof data.requestId !== "string" ||
    !/^[a-f0-9-]{36}$/i.test(data.requestId)
  )
    throw new Error("Please refresh the page and try again.");
  const raw = data.fields as Record<string, unknown>;
  const fields: Record<string, string> = {};
  for (const key of allowed) {
    const value = raw[key];
    if (value === undefined) continue;
    if (
      typeof value !== "string" &&
      !(
        key === "supportType" &&
        Array.isArray(value) &&
        value.length <= 6 &&
        value.every((item) => typeof item === "string")
      )
    )
      throw new Error("Invalid form field.");
    const text = Array.isArray(value) ? value.join(", ") : (value as string);
    if (text.length > (key === "motivation" || key === "message" ? 5000 : 300))
      throw new Error("One of your answers is too long. Please shorten it.");
    fields[key] = text.trim();
  }
  const kind = data.kind as EnquiryKind;
  const required =
    kind === "contact"
      ? ["firstName", "lastName", "email", "message"]
      : kind === "partnership"
        ? [
            "firstName",
            "organization",
            "email",
            "department",
            "supportType",
            "message",
          ]
        : ["firstName", "lastName", "email", "category", "motivation"];
  if (required.some((key) => !fields[key]))
    throw new Error("Please complete all required fields.");
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) ||
    /[\r\n]/.test(fields.email)
  )
    throw new Error("Please enter a valid email address.");
  if (fields.linkedin && !/^https?:\/\//i.test(fields.linkedin))
    throw new Error(
      "Please enter a complete profile URL starting with https://.",
    );
  return {
    kind,
    fields,
    requestId: data.requestId,
    spam: Boolean(raw.website),
  };
}
