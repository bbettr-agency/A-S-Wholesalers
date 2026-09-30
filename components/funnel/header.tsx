"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { useScrollPast, THRESHOLD } from "@/engine/motion";
import { cn } from "@/lib/utils";
import { site, telLink, whatsappLink } from "@/config/site";
import { primaryNav, rangeMega } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { CallButton } from "./channel-buttons";

/**
 * Header – substantial at the top (utility strip + full bar), condenses on scroll.
 * "Haier Range" opens a mega-menu (desktop) / accordion (mobile) built from the
 * catalogue. Real routes; never animates height/padding via Motion.
 */
export function Header() {
  const scrolled = useScrollPast(THRESHOLD.header);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobileRange, setMobileRange] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMega(false);
      setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility strip – hides on scroll */}
      <div
        className={cn(
          "hidden border-b border-brand-line bg-brand-ink text-brand-fog transition-[max-height,opacity] duration-300 ease-brand md:block",
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs lg:px-8">
          <span className="font-medium uppercase tracking-[0.16em]">{site.hours.weekdays}</span>
          <div className="flex items-center gap-5">
            <a href={telLink} className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-bone" data-cta="call">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {site.contact.phone.label}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-bone" data-cta="whatsapp">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              {site.contact.whatsapp.label}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        onMouseLeave={() => setMega(false)}
        className={cn(
          "relative z-50 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300 ease-brand",
          scrolled || mega
            ? "border-b border-brand-line bg-brand-bone/95 shadow-lift backdrop-blur-md"
            : "border-b border-transparent bg-brand-bone/60 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center py-3.5" aria-label={`${site.name} – home`}>
            <Image
              src="/brand/ans-logo.png"
              alt={`${site.name} logo`}
              width={997}
              height={337}
              priority
              className={cn("w-auto transition-[height] duration-300 ease-brand", scrolled ? "h-8" : "h-9 md:h-10")}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {primaryNav.map((item) =>
              item.mega ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setMega(true)}
                  onFocus={() => setMega(true)}
                  aria-expanded={mega}
                  className="group relative inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-brand-graphite transition-colors hover:text-brand-primary"
                >
                  {item.label}
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200 ease-brand", mega && "rotate-180")} aria-hidden="true" />
                  <span className="absolute inset-x-3 -bottom-px h-px scale-x-0 bg-brand-accent transition-transform duration-200 ease-brand group-hover:scale-x-100" />
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setMega(false)}
                  className="group relative rounded-md px-3 py-2 text-sm font-medium text-brand-graphite transition-colors hover:text-brand-primary"
                >
                  {item.label}
                  <span className="absolute inset-x-3 -bottom-px h-px scale-x-0 bg-brand-accent transition-transform duration-200 ease-brand group-hover:scale-x-100" />
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <span className="hidden whitespace-nowrap xl:inline-flex">
              <CallButton size="md" variant="ghost" />
            </span>
            <Button href="/contact#enquire" variant="primary" size="md">
              Trade enquiry
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-brand-primary transition-colors hover:bg-brand-primary/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop mega-menu */}
        <div
          className={cn(
            "absolute inset-x-0 top-full hidden origin-top border-b border-brand-line bg-brand-bone shadow-card transition-[opacity,transform] duration-200 ease-brand lg:block",
            mega ? "visible opacity-100 translate-y-0" : "pointer-events-none invisible -translate-y-1 opacity-0",
          )}
          onMouseEnter={() => setMega(true)}
        >
          <div className="mx-auto grid max-w-7xl grid-cols-5 gap-6 px-6 py-8 lg:px-8">
            {rangeMega.map((col) => (
              <div key={col.label}>
                <Link href={col.categoryHref} onClick={() => setMega(false)} className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-steel transition-colors hover:text-brand-primary">
                  {col.label}
                </Link>
                <ul className="mt-3 space-y-2">
                  {col.ranges.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} onClick={() => setMega(false)} className="block text-sm font-medium text-brand-graphite transition-colors hover:text-brand-accent">
                        {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div id="mobile-menu" hidden={!open} className="lg:hidden">
        <button type="button" aria-label="Close menu" tabIndex={-1} onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-brand-ink/40 backdrop-blur-sm motion-safe:animate-[fadeIn_.2s_ease]" />
        <nav aria-label="Mobile" className="fixed inset-x-0 top-0 z-40 mt-[env(safe-area-inset-top)] max-h-[100svh] overflow-y-auto rounded-b-3xl bg-brand-bone px-6 pb-8 pt-24 shadow-card">
          <ul className="divide-y divide-brand-line">
            {primaryNav.map((item) =>
              item.mega ? (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => setMobileRange((v) => !v)}
                    aria-expanded={mobileRange}
                    className="flex w-full items-center justify-between py-4 font-display text-lg font-semibold text-brand-ink"
                  >
                    {item.label}
                    <ChevronDown className={cn("h-5 w-5 text-brand-steel transition-transform", mobileRange && "rotate-180")} aria-hidden="true" />
                  </button>
                  {mobileRange ? (
                    <div className="pb-4">
                      <Link href={item.href} onClick={() => setOpen(false)} className="block py-1.5 text-sm font-semibold text-brand-primary">
                        View full range
                      </Link>
                      {rangeMega.map((col) => (
                        <div key={col.label} className="mt-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-steel">{col.label}</p>
                          <ul className="mt-1.5 space-y-1.5">
                            {col.ranges.map((r) => (
                              <li key={r.href}>
                                <Link href={r.href} onClick={() => setOpen(false)} className="block py-0.5 text-sm text-brand-graphite">
                                  {r.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between py-4 font-display text-lg font-semibold text-brand-ink">
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <div className="mt-6 grid gap-3">
            <Button href="/contact#enquire" variant="primary" size="lg" fullWidth onClick={() => setOpen(false)}>
              Trade enquiry
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <a href={telLink} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-brand-primary/20 text-sm font-medium text-brand-primary" data-cta="call">
                <Phone className="h-4 w-4" /> Call
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-whatsapp text-sm font-semibold text-brand-ink" data-cta="whatsapp">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
