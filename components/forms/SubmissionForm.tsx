"use client";
import { useRef, useState, type ReactNode } from "react";

export function SubmissionForm({
  children,
  kind,
  className = "org-form",
  label,
  submitLabel = "Confirm & Submit",
}: {
  children: ReactNode;
  kind: "contact" | "volunteer" | "partnership" | "sponsorship";
  className?: string;
  label: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const requestId = useRef<string | null>(null);
  const previousFields = useRef("");
  return (
    <form
      className={className}
      aria-label={label}
      onSubmit={async (event) => {
        event.preventDefault();
        if (status === "sending") return;
        const form = event.currentTarget;
        const data = new FormData(form);
        if (kind === "partnership" && !data.getAll("supportType").length) {
          setStatus("error");
          setMessage("Please select at least one support type.");
          return;
        }
        const fields: Record<string, string | string[]> = {};
        for (const key of data.keys())
          fields[key] =
            data.getAll(key).length > 1
              ? data.getAll(key).map(String)
              : String(data.get(key));
        const fingerprint = JSON.stringify(fields);
        if (!requestId.current || previousFields.current !== fingerprint) {
          requestId.current = crypto.randomUUID();
          previousFields.current = fingerprint;
        }
        setStatus("sending");
        setMessage("");
        try {
          const response = await fetch("/api/enquiries", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              kind,
              fields,
              requestId: requestId.current,
            }),
          });
          const result = await response.json();
          if (!response.ok || !result.ok)
            throw new Error(
              result.error ||
                "We couldn’t send your message. Please try again.",
            );
          setStatus("success");
          setMessage(
            kind === "contact"
              ? "Thank you. Your message has been sent to our team."
              : "Thank you. Your application has been recorded and our team has been notified.",
          );
          form.reset();
          requestId.current = null;
        } catch (error) {
          setStatus("error");
          setMessage(
            error instanceof Error
              ? error.message
              : "Something went wrong. Please try again.",
          );
        }
      }}
    >
      {children}
      <div className="form-trap" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button
        className="org-submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </button>
      {message ? (
        <p
          className={`form-feedback form-feedback--${status}`}
          role={status === "error" ? "alert" : "status"}
        >
          {message}
          {status === "error" ? (
            <>
              {" "}
              You can also email{" "}
              <a href="mailto:producthubafrica@gmail.com">
                producthubafrica@gmail.com
              </a>
              .
            </>
          ) : null}
        </p>
      ) : null}
    </form>
  );
}
