"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/typography";
import { Reveal } from "@/engine/motion";
import { cn } from "@/lib/utils";
import { systemStages, families, type SystemStage } from "@/config/products";
import { products } from "@/config/home";
import { AirflowVisual } from "./airflow-visual";
import { EnquireLink } from "@/components/funnel/enquire-link";
import { prefillEnquiry } from "@/components/funnel/enquiry-events";

const STAGE_VH = 82; // scroll length per system stage (desktop pinned)

/**
 * AirflowGallery – the signature Haier system experience. Replaces the old product
 * card grid. Desktop: a scroll-pinned stage that transitions between the five
 * SYSTEM TYPES, each with its own airflow visualisation. Mobile / no-JS / reduced
 * data: stacked editorial stages (never nine generic cards). A restrained
 * full-catalogue index sits underneath for utility.
 */
export function AirflowGallery() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const pinned = mounted && isDesktop;

  // Scroll → active index (rAF-throttled; a single listener).
  useEffect(() => {
    if (!pinned) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = sectionRef.current;
        if (!el) return;
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total);
        const p = total > 0 ? scrolled / total : 0;
        const idx = Math.min(Math.floor(p * systemStages.length), systemStages.length - 1);
        setActive((prev) => (prev === idx ? prev : idx));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pinned]);

  const jumpTo = useCallback((i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const p = (i + 0.35) / systemStages.length;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: el.offsetTop + p * total, behavior: reduce ? "auto" : "smooth" });
  }, []);

  return (
    <Section tone="bone" id="products">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow={products.eyebrow} heading={products.heading} lead={products.lead} maxWidth="max-w-2xl" />
            {pinned ? (
              <p className="hidden items-center gap-2 text-sm font-medium text-brand-steel lg:flex">
                <ArrowDown className="h-4 w-4" aria-hidden="true" /> {products.scrollHint}
              </p>
            ) : null}
          </div>
        </Reveal>
      </Container>

      {pinned ? (
        <div ref={sectionRef} style={{ height: `${systemStages.length * STAGE_VH}vh` }} className="relative mt-10">
          <div className="sticky top-0 flex h-[100svh] items-center">
            <Container className="w-full">
              <Stepper active={active} onJump={jumpTo} />
              <div className="relative mt-6 min-h-[62vh]">
                {systemStages.map((s, i) => (
                  <StagePanel key={s.key} stage={s} active={i === active} />
                ))}
              </div>
            </Container>
          </div>
        </div>
      ) : (
        <Container>
          <div className="mt-6">
            {systemStages.map((s, i) => (
              <Reveal key={s.key} preset="fadeUp">
                <StackedStage stage={s} first={i === 0} />
              </Reveal>
            ))}
          </div>
        </Container>
      )}

      {/* Full-catalogue index – restrained utility, not nine giant cards */}
      <Container>
        <ExploreIndex />
      </Container>
    </Section>
  );
}

/* ── Desktop: horizontal system stepper ── */
function Stepper({ active, onJump }: { active: number; onJump: (i: number) => void }) {
  return (
    <div className="flex items-stretch gap-1 border-b border-brand-line" role="tablist" aria-label="Air conditioning system types">
      {systemStages.map((s, i) => {
        const on = i === active;
        return (
          <button
            key={s.key}
            role="tab"
            aria-selected={on}
            onClick={() => onJump(i)}
            className={cn(
              "group flex flex-1 items-center gap-3 border-b-2 px-2 pb-3 pt-1 text-left transition-colors duration-300 ease-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus",
              on ? "border-brand-accent" : "border-transparent hover:border-brand-line",
            )}
          >
            <span className={cn("tnum text-sm font-semibold tabular-nums", on ? "text-brand-accent" : "text-brand-steel")}>{s.n}</span>
            <span className={cn("text-sm font-semibold transition-colors", on ? "text-brand-ink" : "text-brand-steel group-hover:text-brand-graphite")}>
              {s.type}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ── Desktop: one absolutely-stacked, crossfading stage ── */
function StagePanel({ stage, active }: { stage: SystemStage; active: boolean }) {
  return (
    <div
      aria-hidden={!active}
      className={cn(
        "absolute inset-0 grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12",
        "motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-brand",
        active ? "opacity-100 motion-safe:translate-y-0" : "pointer-events-none opacity-0 motion-safe:translate-y-3",
      )}
    >
      <StageCopy stage={stage} />
      <StageStage stage={stage} active={active} />
    </div>
  );
}

/* ── Shared: the copy column ── */
function StageCopy({ stage }: { stage: SystemStage }) {
  return (
    <div>
      <div className="flex items-baseline gap-4">
        <span className="tnum text-5xl font-extrabold leading-none tracking-tight text-brand-cloud">{stage.n}</span>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-steel">System type</p>
          <h3 className="font-display text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">{stage.type}</h3>
        </div>
      </div>

      <p className="mt-5 max-w-md text-lg leading-relaxed text-brand-graphite">{stage.statement}</p>

      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="tnum text-base font-semibold text-brand-primary">{stage.capacity}</span>
        <span className="h-3 w-px bg-brand-line" />
        <span className="tnum text-sm text-brand-steel">{stage.btu}</span>
      </div>

      <ul className="mt-6 grid max-w-md grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
        {stage.attributes.map((a) => (
          <li key={a} className="flex items-start gap-2.5 text-sm text-brand-graphite">
            <span className="mt-1.5 h-1 w-3 shrink-0 bg-brand-accent" aria-hidden="true" />
            {a}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-wrap items-center gap-5">
        <button
          onClick={() => prefillEnquiry(stage.solutionType)}
          data-cta="enquire-context"
          className="group inline-flex h-12 items-center gap-2 rounded-lg bg-brand-ink px-6 text-sm font-semibold text-brand-bone transition-transform duration-200 ease-brand hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus active:translate-y-px"
        >
          Enquire about this range
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-brand group-hover:translate-x-1" />
        </button>
        <span className="text-sm text-brand-steel">
          {stage.families.join(" · ")}
        </span>
      </div>
    </div>
  );
}

/* ── Shared: the product stage with airflow ──
   No card / ring / inner canvas – the PRODUCT is the object. It sits on the stage
   with a soft depth glow (not a bordered box); airflow radiates around it. The
   enhanced white-background renders merge into the bone surface. */
function StageStage({ stage, active, priority }: { stage: SystemStage; active: boolean; priority?: boolean }) {
  return (
    <div className="relative">
      <div className="relative aspect-[16/11] w-full">
        {/* soft radial depth – gives the product ground without a box */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [background:radial-gradient(58%_54%_at_50%_46%,rgba(27,42,74,0.06),transparent_70%)]"
        />
        <Image
          src={stage.image}
          alt={stage.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 94vw, (max-width: 1024px) 90vw, 720px"
          quality={88}
          className="object-contain"
        />
        {/* airflow sits over the product (white renders are opaque), reading as air
            leaving the unit rather than a graphic behind a card */}
        <AirflowVisual kind={stage.key} active={active} />
      </div>
      <div className="mt-3 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-brand-line" aria-hidden="true" />
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-brand-steel">Airflow – {stage.type}</span>
        <span className="h-px w-8 bg-brand-line" aria-hidden="true" />
      </div>
    </div>
  );
}

/* ── Mobile / no-JS: stacked editorial stage (no card – product-led) ── */
function StackedStage({ stage, first }: { stage: SystemStage; first?: boolean }) {
  return (
    <div className={cn("pt-10", !first && "border-t border-brand-line")}>
      <StageStage stage={stage} active priority={first} />
      <div className="mt-6">
        <StageCopy stage={stage} />
      </div>
    </div>
  );
}

/* ── Restrained full-catalogue index ── */
function ExploreIndex() {
  return (
    <div className="mt-16 border-t border-brand-line pt-12 md:mt-24">
      <Reveal>
        <SectionHeading eyebrow={products.exploreEyebrow} heading={products.exploreHeading} lead={products.exploreLead} maxWidth="max-w-2xl" />
      </Reveal>
      <ul className="mt-8 grid gap-x-10 gap-y-0 sm:grid-cols-2">
        {families.map((f) => (
          <li key={f.id}>
            <div className="flex items-center gap-4 border-b border-brand-line py-4">
              <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md bg-brand-mist">
                <Image src={f.image} alt="" fill sizes="64px" className="object-contain p-0.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-brand-ink">{f.name}</p>
                <p className="tnum mt-0.5 text-xs text-brand-steel">
                  {f.capacity} · {f.energyClass}
                </p>
              </div>
              <EnquireLink interest={f.solution} label="Enquire" className="shrink-0" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
