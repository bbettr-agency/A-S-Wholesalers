"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useScrollPast, THRESHOLD } from "@/engine/motion";
import { cn } from "@/lib/utils";
import { site, telLink, whatsappLink } from "@/config/site";

/**
 * Sticky mobile CTA bar – the mobile hero's real conversion surface. Appears once
 * the hero scrolls out; Call + WhatsApp minimum, plus the primary enquiry action.
 * Slides in via transform only; respects safe-area insets.
 */
export function StickyMobileBar() {
  const show = useScrollPast(THRESHOLD.floatingCta);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-brand-line bg-brand-bone/95 backdrop-blur-md transition-transform duration-300 ease-brand lg:hidden",
        "pb-[env(safe-area-inset-bottom)]",
        show ? "translate-y-0" : "translate-y-full",
      )}
      role="region"
      aria-label="Contact A&S Wholesalers"
    >
      <div className="flex items-stretch gap-2 px-3 py-2.5">
        <a
          href={telLink}
          data-cta="call"
          aria-label={`Call A&S Wholesalers on ${site.contact.phone.label}`}
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand-primary/20 text-brand-primary"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="whatsapp"
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-brand-whatsapp text-sm font-semibold text-brand-ink"
        >
          <MessageCircle className="h-5 w-5" /> WhatsApp
        </a>
        <a
          href="#enquire"
          data-cta="enquire"
          className="inline-flex h-12 flex-[1.4] items-center justify-center rounded-lg bg-brand-accent text-sm font-semibold text-white shadow-accent"
        >
          Send enquiry
        </a>
      </div>
    </div>
  );
}
