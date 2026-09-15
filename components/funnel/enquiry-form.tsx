"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { enquiryFields, interestOptions, enquiryCopy } from "@/config/enquiry";
import { WhatsAppButton, CallButton } from "./channel-buttons";
import { PREFILL_EVENT } from "./enquiry-events";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * EnquiryForm — the primary conversion. Built for later GHL webhook integration:
 * posts every field plus captured attribution to POST /api/enquiry. No fake email
 * backend — the endpoint validates and confirms (and forwards to GHL when the
 * webhook env is configured). Honeypot + POPIA consent included.
 */
export function EnquiryForm({ onDark = true }: { onDark?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [interest, setInterest] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const interestRef = useRef<HTMLSelectElement>(null);

  // Context-aware pre-fill from any CTA on the page.
  useEffect(() => {
    const onPrefill = (e: Event) => {
      const detail = (e as CustomEvent<{ interest: string }>).detail;
      if (detail?.interest) {
        setInterest(detail.interest);
        // Focus the form so keyboard users land in context.
        window.setTimeout(() => interestRef.current?.focus(), 350);
      }
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot — if filled, silently succeed (bot).
    if (data.company_url) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          attribution: collectAttribution(),
        }),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-2xl p-8 md:p-10 ring-1",
          onDark ? "bg-white/[0.04] ring-white/10" : "bg-brand-bone ring-brand-line",
        )}
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="h-10 w-10 text-brand-whatsapp" aria-hidden="true" />
        <h3 className={cn("mt-4 font-display text-2xl font-bold", onDark ? "text-brand-bone" : "text-brand-ink")}>
          {enquiryCopy.successHeading}
        </h3>
        <p className={cn("mt-3 max-w-prose leading-relaxed", onDark ? "text-brand-fog" : "text-brand-graphite")}>
          {enquiryCopy.successBody}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <WhatsAppButton />
          <CallButton onDark={onDark} />
        </div>
      </div>
    );
  }

  const inputBase = cn(
    "w-full rounded-lg px-4 py-3 text-sm transition-colors duration-200 ease-brand",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus",
    onDark
      ? "bg-white/[0.04] text-brand-bone ring-1 ring-white/15 placeholder:text-brand-steel focus:ring-white/30"
      : "bg-white text-brand-ink ring-1 ring-brand-line placeholder:text-brand-steel focus:ring-brand-primary/40",
  );
  const labelBase = cn("mb-1.5 block text-sm font-medium", onDark ? "text-brand-fog" : "text-brand-graphite");

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_url">Do not fill this</label>
        <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {enquiryFields.map((f) => {
          const isFull = f.type === "textarea" || f.type === "select";
          if (f.type === "select") {
            return (
              <div key={f.name} className={cn(isFull && "sm:col-span-2")}>
                <label htmlFor={f.name} className={labelBase}>{f.label}</label>
                <select
                  id={f.name}
                  name={f.name}
                  ref={interestRef}
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className={inputBase}
                >
                  {interestOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            );
          }
          if (f.type === "textarea") {
            return (
              <div key={f.name} className="sm:col-span-2">
                <label htmlFor={f.name} className={labelBase}>{f.label}</label>
                <textarea
                  id={f.name}
                  name={f.name}
                  rows={4}
                  required={f.required}
                  placeholder={f.placeholder}
                  className={cn(inputBase, "resize-y")}
                />
              </div>
            );
          }
          return (
            <div key={f.name}>
              <label htmlFor={f.name} className={labelBase}>{f.label}</label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required={f.required}
                autoComplete={f.autoComplete}
                inputMode={f.inputMode}
                placeholder={f.placeholder}
                className={inputBase}
              />
            </div>
          );
        })}
      </div>

      <label className={cn("flex items-start gap-3 text-xs leading-relaxed", onDark ? "text-brand-fog" : "text-brand-steel")}>
        <input
          type="checkbox"
          name="consent"
          required
          aria-label="I agree that A&S Wholesalers may contact me about my enquiry (POPIA)"
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-brand-line text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus"
        />
        <span>{enquiryCopy.consent}</span>
      </label>

      {status === "error" ? (
        <p className="flex items-center gap-2 text-sm text-red-400" role="alert">
          <AlertCircle className="h-4 w-4" /> {enquiryCopy.errorBody}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          data-cta="enquiry-submit"
          className={cn(
            "group inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-brand-accent px-7 text-base font-semibold text-white shadow-accent",
            "transition-[transform,background-color] duration-200 ease-brand hover:-translate-y-0.5 hover:bg-brand-accentDark",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus",
            "active:translate-y-px disabled:pointer-events-none disabled:opacity-60",
          )}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> {enquiryCopy.submitting}
            </>
          ) : (
            <>
              {enquiryCopy.submit}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-brand group-hover:translate-x-1" />
            </>
          )}
        </button>
        <p className={cn("text-xs", onDark ? "text-brand-steel" : "text-brand-steel")}>{enquiryCopy.reassurance}</p>
      </div>
    </form>
  );
}

/** Capture attribution for later CRM routing (UTM, click IDs, page, referrer). */
function collectAttribution() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  const get = (k: string) => p.get(k) ?? "";
  return {
    utm_source: get("utm_source"),
    utm_medium: get("utm_medium"),
    utm_campaign: get("utm_campaign"),
    utm_term: get("utm_term"),
    utm_content: get("utm_content"),
    gclid: get("gclid"),
    fbclid: get("fbclid"),
    landing_page: window.location.pathname,
    referrer: document.referrer || "direct",
    submitted_at: new Date().toISOString(),
  };
}
