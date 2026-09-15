import { NextResponse } from "next/server";

/**
 * Enquiry endpoint — REAL and integration-ready, not a fake backend.
 *
 * • Validates the submission server-side.
 * • Forwards to GoHighLevel when GHL_WEBHOOK_URL is set (the production path).
 * • When the webhook is NOT configured (this demo), it validates and confirms so
 *   the form is fully testable end-to-end without inventing a mail backend.
 *
 * Wiring GHL later is one env var: set GHL_WEBHOOK_URL in Vercel. No code change.
 */

export const runtime = "nodejs";

interface EnquiryPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  interest?: string;
  message?: string;
  consent?: string;
  company_url?: string; // honeypot
  attribution?: Record<string, string>;
}

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(request: Request) {
  let body: EnquiryPayload;
  try {
    body = (await request.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: pretend success, do nothing.
  if (body.company_url) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();

  if (!name || !phone || !isEmail(email)) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  const lead = {
    source: "answholesalers.co.za",
    name,
    email,
    phone,
    company: (body.company ?? "").trim(),
    interest: body.interest ?? "",
    message: (body.message ?? "").trim(),
    attribution: body.attribution ?? {},
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.GHL_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!res.ok) throw new Error(`webhook ${res.status}`);
    } catch (err) {
      console.error("[enquiry] webhook forward failed:", err);
      return NextResponse.json({ ok: false, error: "forward_failed" }, { status: 502 });
    }
  } else {
    // Demo mode — no webhook configured. Log for visibility; do not fabricate delivery.
    console.info("[enquiry] received (demo mode — set GHL_WEBHOOK_URL to forward):", {
      name: lead.name,
      email: lead.email,
      interest: lead.interest,
    });
  }

  return NextResponse.json({ ok: true });
}
