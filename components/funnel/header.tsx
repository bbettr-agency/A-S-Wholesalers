"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useScrollPast, THRESHOLD } from "@/engine/motion";
import { cn } from "@/lib/utils";
import { site, telLink, whatsappLink } from "@/config/site";
import { primaryNav } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { CallButton } from "./channel-buttons";

/**
 * Header — substantial at the top (utility strip + full bar), transforms to a
 * condensed sticky bar on scroll (background, blur, shadow, height). Never animates
 * height/padding via Motion — CSS transition on transform/opacity/colour only.
 */
export function Header() {
  const scrolled = useScrollPast(THRESHOLD.header);
  const [open, setOpen] = useState(false);

  // Lock body scroll + close on Escape when the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility strip — hides on scroll */}
      <div
        className={cn(
          "hidden border-b border-brand-line bg-brand-ink text-brand-fog transition-[max-height,opacity] duration-300 ease-brand md:block",
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs lg:px-8">
          <span className="font-mono uppercase tracking-[0.16em]">{site.hours.weekdays}</span>
          <div className="flex items-center gap-5">
            <a href={telLink} className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-bone" data-cta="call">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {site.contact.phone.label}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-bone"
              data-cta="whatsapp"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              {site.contact.whatsapp.label}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "relative z-50 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300 ease-brand",
          scrolled
            ? "border-b border-brand-line bg-brand-bone/85 shadow-lift backdrop-blur-md"
            : "border-b border-transparent bg-brand-bone/60 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center py-3.5" aria-label={`${site.name} — home`}>
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
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-md px-3 py-2 text-sm font-medium text-brand-graphite transition-colors hover:text-brand-primary"
              >
                {item.label}
                {item.status === "soon" ? (
                  <span className="ml-1 align-super font-mono text-[0.55rem] uppercase tracking-wider text-brand-steel">soon</span>
                ) : null}
                <span className="absolute inset-x-3 -bottom-px h-px scale-x-0 bg-brand-accent transition-transform duration-200 ease-brand group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <CallButton size="md" variant="ghost" />
            <Button href="#enquire" variant="primary" size="md">
              Send an enquiry
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
      </div>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="lg:hidden"
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-brand-ink/40 backdrop-blur-sm motion-safe:animate-[fadeIn_.2s_ease]"
        />
        <nav
          aria-label="Mobile"
          className="fixed inset-x-0 top-0 z-40 mt-[env(safe-area-inset-top)] rounded-b-3xl bg-brand-bone px-6 pb-8 pt-24 shadow-card"
        >
          <ul className="divide-y divide-brand-line">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-lg font-semibold text-brand-ink"
                >
                  {item.label}
                  {item.status === "soon" ? (
                    <span className="font-mono text-[0.6rem] uppercase tracking-wider text-brand-steel">soon</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3">
            <Button href="#enquire" variant="primary" size="lg" fullWidth onClick={() => setOpen(false)}>
              Send an enquiry
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={telLink}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-brand-primary/20 text-sm font-medium text-brand-primary"
                data-cta="call"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-whatsapp text-sm font-semibold text-brand-ink"
                data-cta="whatsapp"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
