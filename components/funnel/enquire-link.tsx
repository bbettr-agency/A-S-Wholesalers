"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { prefillEnquiry } from "./enquiry-events";

/**
 * EnquireLink — a context-aware enquiry trigger usable inside server components.
 * Pre-fills the form with a solution interest and scrolls to it.
 */
export function EnquireLink({
  interest,
  label = "Enquire",
  className,
}: {
  interest: string;
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => prefillEnquiry(interest)}
      data-cta="enquire-context"
      className={cn(
        "group/enq inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition-colors duration-200 ease-brand hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus",
        className,
      )}
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-brand group-hover/enq:translate-x-1" />
    </button>
  );
}
