"use client";

import { useState } from "react";
import { PROJECT_TYPES, SITE } from "@/lib/site";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; message: string }
  | { kind: "fallback"; mailto: string }
  | { kind: "error"; message: string; fieldErrors?: Record<string, string> };

const baseInput =
  "w-full bg-transparent border border-[var(--color-border)] px-3 py-2.5 text-[14px] text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] focus:border-[var(--color-accent)] focus:outline-none transition-colors";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ kind: "submitting" });

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      phone: String(fd.get("phone") || ""),
      projectType: String(fd.get("projectType") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok || json?.ok === false) {
        const fieldErrors: Record<string, string> = {};
        if (Array.isArray(json?.errors)) {
          for (const e of json.errors) {
            if (e?.field && e.field !== "_" && typeof e.message === "string") {
              fieldErrors[e.field] = e.message;
            }
          }
        }
        setStatus({
          kind: "error",
          message:
            json?.errors?.find((e: { field: string }) => e.field === "_")?.message ||
            "Please review the fields above and try again.",
          fieldErrors,
        });
        return;
      }

      if (json?.fallback && typeof json?.mailto === "string") {
        setStatus({ kind: "fallback", mailto: json.mailto });
        return;
      }

      setStatus({
        kind: "success",
        message:
          "Thank you. Your message has been sent and you will receive a response directly.",
      });
      form.reset();
    } catch {
      setStatus({
        kind: "error",
        message: `Something went wrong. Please email ${SITE.contactEmail} directly.`,
      });
    }
  }

  const fieldErr = status.kind === "error" ? status.fieldErrors ?? {} : {};
  const disabled = status.kind === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot — visually hidden but reachable to bots that fill all fields */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          id="name"
          label="Name"
          required
          error={fieldErr.name}
        >
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={200}
            className={baseInput}
          />
        </Field>
        <Field id="company" label="Company" error={fieldErr.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={200}
            className={baseInput}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="email" label="Email" required error={fieldErr.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={320}
            className={baseInput}
          />
        </Field>
        <Field id="phone" label="Phone (optional)" error={fieldErr.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={50}
            className={baseInput}
          />
        </Field>
      </div>

      <Field id="projectType" label="Project type" required error={fieldErr.projectType}>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          className={baseInput}
        >
          <option value="" disabled>
            Select one
          </option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id="message"
        label="Message"
        required
        hint="A short paragraph is enough. We respond directly."
        error={fieldErr.message}
      >
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={10}
          maxLength={5000}
          className={baseInput + " resize-y"}
        />
      </Field>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-accent-fg)] px-5 py-3 text-sm font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          {disabled ? "Sending…" : "Send message"}
        </button>
        <p className="text-[12px] text-[var(--color-fg-subtle)]">
          Or email {SITE.contactEmail} directly.
        </p>
      </div>

      {/* Status region */}
      <div role="status" aria-live="polite" className="min-h-[1.5rem]">
        {status.kind === "success" && (
          <p className="text-[14px] text-[var(--color-fg)] border-l-2 border-[var(--color-accent)] pl-3">
            {status.message}
          </p>
        )}
        {status.kind === "fallback" && (
          <p className="text-[14px] text-[var(--color-fg)] border-l-2 border-[var(--color-accent)] pl-3">
            Email delivery is not configured for this environment.{" "}
            <a
              href={status.mailto}
              className="underline underline-offset-4 hover:text-[var(--color-accent)]"
            >
              Open a prefilled email to {SITE.contactEmail}
            </a>
            .
          </p>
        )}
        {status.kind === "error" && (
          <p className="text-[14px] text-[var(--color-danger)] border-l-2 border-[var(--color-danger)] pl-3">
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--color-fg-muted)] mb-2"
      >
        {label}
        {required ? <span aria-hidden="true" className="text-[var(--color-accent)]"> *</span> : null}
      </label>
      {children}
      {hint && !error ? (
        <p className="mt-1.5 text-[12px] text-[var(--color-fg-subtle)]">{hint}</p>
      ) : null}
      {error ? (
        <p className="mt-1.5 text-[12px] text-[var(--color-danger)]">{error}</p>
      ) : null}
    </div>
  );
}
