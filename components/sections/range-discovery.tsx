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
 * Range discovery — the self-selection mechanic. Visitor picks how they want to
 * cool a space; the panel shows the matching Haier families and takes the enquiry
 * with that context preserved (prefillEnquiry).
 */
export function RangeDiscovery() {
  const [active, setActive] = useState<SolutionType>("wall");
  const activeSolution = solutions.find((s) => s.type === active)!;
  const activeFamilies = familiesFor(active);

  return (
    <Section tone="bone" id="range">
      <Container>
        <SectionHeading eyebrow={range.eyebrow} heading={range.heading} lead={range.lead} maxWidth="max-w-2xl" />

        {/* Selector */}
        <div
          role="tablist"
          aria-label="Air conditioning types"
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
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
                onClick={() => setActive(s.type)}
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
                  <span className="block font-display text-sm font-semibold text-brand-ink">{s.label}</span>
                  <span className="mt-0.5 block text-xs text-brand-steel">{s.forWho}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div
          role="tabpanel"
          id="range-panel"
          aria-labelledby={`tab-${active}`}
          className="mt-4 overflow-hidden rounded-2xl border border-brand-line bg-brand-mist"
        >
          <div className="grid gap-8 p-6 md:grid-cols-[1fr_1.1fr] md:p-8 lg:gap-10">
            <div className="flex flex-col justify-between">
              <div>
                <p className="font-medium text-[0.7rem] uppercase tracking-[0.18em] text-brand-steel">
                  {activeSolution.label}
                </p>
                <p className="mt-3 max-w-md text-lg leading-relaxed text-brand-graphite">{activeSolution.summary}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => prefillEnquiry(active)}
                  data-cta="enquire-context"
                  className="group inline-flex h-12 items-center gap-2 rounded-lg bg-brand-accent px-6 text-sm font-semibold text-white shadow-accent transition-transform duration-200 ease-brand hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus active:translate-y-px"
                >
                  Enquire about {activeSolution.label.toLowerCase()}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-brand group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <ul className="grid gap-3">
              {activeFamilies.map((f) => (
                <li
                  key={f.id}
                  className="flex items-center gap-4 rounded-xl bg-white p-3 ring-1 ring-brand-line transition-shadow duration-200 ease-brand hover:shadow-card"
                >
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-brand-bone">
                    <Image src={f.image} alt={f.imageAlt} fill sizes="96px" className="object-contain p-1" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold text-brand-ink">{f.name}</p>
                    <p className="mt-0.5 truncate text-xs text-brand-graphite">{f.blurb}</p>
                    <div className="mt-1.5 flex items-center gap-2">
                      <span className="tnum text-xs font-medium text-brand-primary">{f.capacity}</span>
                      <ModelCode>{f.models[0]}</ModelCode>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
