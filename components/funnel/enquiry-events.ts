/**
 * Context-aware enquiry: any CTA can pre-fill the enquiry form with a solution
 * interest and scroll to it, without prop-drilling or routing. The form listens
 * for this event. Decoupled so every "Enquire about ducted" button preserves
 * context into the single form.
 */
export const PREFILL_EVENT = "ans:prefill-enquiry";

export function prefillEnquiry(interest: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: { interest } }));
  // Move to the form; the hash scroll is the accessible, no-JS-safe fallback too.
  window.location.hash = "enquire";
}
