import { NextResponse } from "next/server";
import { PROJECT_TYPES, SITE } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* ============================================================================
   Server-side validation — no third-party deps, no database.
   ========================================================================== */

type ValidationError = { field: string; message: string };

type ContactInput = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  message: string;
  /** Honeypot. Must be empty. Bots fill it in. */
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asTrimmedString(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function validate(raw: unknown): { ok: true; data: ContactInput } | { ok: false; errors: ValidationError[] } {
  const errors: ValidationError[] = [];
  if (!raw || typeof raw !== "object") {
    return { ok: false, errors: [{ field: "_", message: "Invalid request body." }] };
  }
  const r = raw as Record<string, unknown>;

  const data: ContactInput = {
    name: asTrimmedString(r.name, 200),
    email: asTrimmedString(r.email, 320),
    company: asTrimmedString(r.company, 200),
    phone: asTrimmedString(r.phone, 50),
    projectType: asTrimmedString(r.projectType, 100),
    message: asTrimmedString(r.message, 5000),
    website: asTrimmedString(r.website, 200),
  };

  if (data.name.length < 2) errors.push({ field: "name", message: "Name is required." });
  if (!EMAIL_RE.test(data.email)) errors.push({ field: "email", message: "A valid email is required." });
  if (!PROJECT_TYPES.includes(data.projectType as (typeof PROJECT_TYPES)[number])) {
    errors.push({ field: "projectType", message: "Choose a project type." });
  }
  if (data.message.length < 10) errors.push({ field: "message", message: "Message is too short." });

  if (errors.length > 0) return { ok: false, errors };
  return { ok: true, data };
}

/* ============================================================================
   Email delivery via Resend (server-only). If env is missing, return a
   structured fallback the form surfaces as a prefilled mailto: link.
   ========================================================================== */

function emailBodyText(d: ContactInput): string {
  return [
    `New inquiry from ${SITE.url}`,
    "",
    `Name:         ${d.name}`,
    `Company:      ${d.company || "—"}`,
    `Email:        ${d.email}`,
    `Phone:        ${d.phone || "—"}`,
    `Project type: ${d.projectType}`,
    "",
    "Message:",
    d.message,
  ].join("\n");
}

function mailtoFallback(d: ContactInput) {
  const subject = `Antares inquiry — ${d.projectType}`;
  const body = emailBodyText(d);
  const url = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return {
    ok: true as const,
    delivered: false as const,
    fallback: true as const,
    mailto: url,
    contactEmail: SITE.contactEmail,
  };
}

async function sendViaResend(d: ContactInput): Promise<
  | { delivered: true; id: string | null }
  | { delivered: false; reason: string }
> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || `Antares Resilience <noreply@antaresresilience.com>`;

  if (!apiKey || !to) {
    return { delivered: false, reason: "missing_env" };
  }

  try {
    // Dynamic import keeps Resend out of the cold path when unconfigured.
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: d.email,
      subject: `Antares inquiry — ${d.projectType}`,
      text: emailBodyText(d),
    });
    if (result.error) {
      console.error("[contact] Resend error:", result.error);
      return { delivered: false, reason: "provider_error" };
    }
    return { delivered: true, id: result.data?.id ?? null };
  } catch (err) {
    console.error("[contact] Resend exception:", err);
    return { delivered: false, reason: "exception" };
  }
}

/* ============================================================================
   POST handler
   ========================================================================== */

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: [{ field: "_", message: "Invalid JSON." }] },
      { status: 400 }
    );
  }

  const result = validate(raw);
  if (!result.ok) {
    return NextResponse.json({ ok: false, errors: result.errors }, { status: 400 });
  }

  // Honeypot: pretend success without sending. Bots get a 200 and a fake mailto.
  if (result.data.website && result.data.website.length > 0) {
    return NextResponse.json(
      { ok: true, delivered: true, id: null },
      { status: 200 }
    );
  }

  const send = await sendViaResend(result.data);
  if (send.delivered) {
    return NextResponse.json({ ok: true, delivered: true, id: send.id }, { status: 200 });
  }

  // Graceful fallback: tell the client to surface a mailto: link.
  return NextResponse.json(mailtoFallback(result.data), { status: 200 });
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 });
}
