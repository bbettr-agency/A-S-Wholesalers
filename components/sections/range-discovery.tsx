"use client";

import { useState } from "react";
import Image from "next/image";
import { AirVent, Network, Rows3, LayoutGrid, Sun, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/typography";
import { ModelCode } from "@/components/ui/data";
import { cn } from "@/lib/utils";
import { solutions, familiesFor, type SolutionType } from "@/config/products";
import { range } from "@/config/home";
import { prefillEnquiry } from "@/components/funnel/enquiry-events";

const ICONS: Record<SolutionType, LucideIcon> = {
  wall: AirVent,
  multi: Network,
  ducted: Rows3,
  cassette: LayoutGrid,
  solar: Sun,
};

/**
 * Find Your Fit – the self-selection mechanic. Five selectors (a real control),
 * then an editorial product showcase: the chosen family is shown large and merges
 * into the surface; the other families in that type are a compact hairline list.
 * The enquiry CTA never wraps.
 */
export function RangeDiscovery() {
  const [active, setActive] = useState<SolutionType>("wall");
  const [featuredId, setFeaturedId] = useState<string | null>(null);

  const activeSolution = solutions.find((s) => s.type === active)!;
  const activeFamilies = familiesFor(active);
  const featured = activeFamilies.find((f) => f.id === featuredId) ?? activeFamilies[0];

  function selectType(t: SolutionType) {
    setActive(t);
    setFeaturedId(null);
  }

  return (
    <Section tone="bone" id="range">
      <Container>
        <SectionHeading eyebrow={range.eyebrow} heading={range.heading} lead={range.lead} maxWidth="max-w-2xl" />

        {/* Selectors – the control */}
        <div role="tablist" aria-label="Haier air conditioning ranges" className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {solutions.map((s) => {
            const Icon = ICONS[s.type];
            const selected = s.type === active;
            return (
              <button
                key={s.type}
                role="tab"
                id={`tab-${s.type}`}
                aria-selected={selected}
                aria-controls="range-panel"
                onClick={() => selectType(s.type)}
                className={cn(
                  "group flex flex-col items-start gap-3 rounded-xl border p-4 text-left transition-all duration-200 ease-brand",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus",
                  selected
                    ? "border-brand-primary/25 bg-white shadow-card"
                    : "border-brand-line bg-brand-bone hover:border-brand-primary/20 hover:bg-white",
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 ease-brand",
                    selected ? "bg-brand-accent text-white" : "bg-brand-mist text-brand-primary group-hover:bg-brand-cloud",
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-brand-ink">{s.label}</span>
                  <span className="mt-0.5 block text-xs text-brand-steel">{s.forWho}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Result – editorial product showcase, no nested cards */}
        <div role="tabpanel" id="range-panel" aria-labelledby={`tab-${active}`} className="mt-12 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14">
          {/* Context + family list + CTA */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-steel">{activeSolution.label}</p>
            <p className="mt-3 text-lg leading-relaxed text-brand-graphite">{activeSolution.summary}</p>

            {activeFamilies.length > 1 ? (
              <ul className="mt-7 border-t border-brand-line">
                {activeFamilies.map((f) => {
                  const on = f.id === featured.id;
                  return (
                    <li key={f.id}>
                      <button
                        onClick={() => setFeaturedId(f.id)}
                        aria-pressed={on}
                        className={cn(
                          "flex w-full items-center gap-4 border-b border-brand-line py-3.5 text-left transition-colors duration-200 ease-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus",
                          on ? "" : "opacity-65 hover:opacity-100",
                        )}
                      >
                        <span className={cn("h-8 w-0.5 shrink-0 rounded-full transition-colors", on ? "bg-brand-accent" : "bg-transparent")} aria-hidden="true" />
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-brand-ink">{f.name}</span>
                          <span className="tnum mt-0.5 block text-xs text-brand-steel">{f.capacity} · {f.energyClass}</span>
                        </span>
                        <ModelCode>{f.models[0]}</ModelCode>
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : null}

            <div className="mt-8">
              <button
                onClick={() => prefillEnquiry(active)}
                data-cta="enquire-context"
                className="group inline-flex h-12 max-w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brand-accent px-7 text-sm font-semibold text-white shadow-accent transition-transform duration-200 ease-brand hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus active:translate-y-px"
              >
                Enquire about this range
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 ease-brand group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Featured product – large, merges into the surface, no box */}
          <div className="relative order-first lg:order-none">
            <div className="relative aspect-[16/11] w-full">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 [background:radial-gradient(58%_54%_at_50%_46%,rgba(27,42,74,0.06),transparent_70%)]" />
              <Image
                key={featured.id}
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(max-width: 640px) 94vw, (max-width: 1024px) 90vw, 680px"
                quality={88}
                className="object-contain"
              />
            </div>
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-brand-line pt-4">
              <div>
                <p className="text-base font-semibold text-brand-ink">{featured.name}</p>
                <p className="mt-0.5 text-sm text-brand-graphite">{featured.blurb}</p>
              </div>
              <span className="tnum text-sm font-semibold text-brand-primary">{featured.capacity}</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
