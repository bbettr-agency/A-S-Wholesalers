import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/layout";
import { Eyebrow, Accent } from "@/components/ui/typography";
import { DimensionRule } from "@/components/ui/data";
import { Button } from "@/components/ui/button";
import { heroStack, Reveal } from "@/engine/motion";
import { hero } from "@/config/home";
import { heroProof } from "@/config/trust";

/**
 * Hero — Capability archetype, executed light. Blocking Question: "is A&S a real
 * SA supplier who stocks the full Haier range for my job, and how do I reach them?"
 * Left: category-clear H1 (the LCP, never animated) + proof + CTAs. Right: the
 * flagship product render as evidence, with datasheet data chips.
 */
export function Hero() {
  const h = heroStack({ character: "precise" });

  return (
    <section className="relative overflow-hidden bg-brand-bone pt-32 md:pt-40">
      {/* faint technical grid wash — structure, not decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,theme(colors.brand.line)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.brand.line)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(120%_90%_at_80%_0%,black,transparent_70%)]"
      />
      <Container className="relative pb-16 md:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.02fr] lg:gap-8">
          {/* Copy column */}
          <div className="max-w-xl">
            <div {...h.lcp}>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
              <h1 className="mt-4 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.02em] text-brand-ink sm:text-5xl md:text-6xl lg:text-[4rem]">
                {hero.headline}
                <br className="hidden sm:block" /> <Accent>{hero.headlineAccent}</Accent> {hero.headlineRest}
              </h1>
            </div>

            <Reveal {...h.step(0)}>
              <p className="mt-6 max-w-prose text-lg leading-relaxed text-brand-graphite">{hero.sub}</p>
            </Reveal>

            <Reveal {...h.step(1)}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={hero.primaryCta.href} variant="primary" size="lg" trailingIcon={<ArrowRight className="h-4 w-4 transition-transform duration-200 ease-brand group-hover:translate-x-1" />}>
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </Reveal>

            <Reveal {...h.step(2)}>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
                {heroProof.map((p) => (
                  <li key={p.label} className="flex items-center gap-2 text-sm font-medium text-brand-graphite">
                    <Check className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                    {p.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Evidence column — the product render */}
          <div className="relative">
            <div className="relative rounded-3xl bg-gradient-to-b from-brand-mist to-brand-bone p-6 ring-1 ring-brand-line sm:p-8">
              <DimensionRule label="Aeropure Inverter" />
              <div className="relative mt-4 aspect-[4/3]">
                <Image
                  src="/images/products/haier-aeropure.jpg"
                  alt="Haier Aeropure Inverter — black-glass wall-mounted split with outdoor condenser unit, supplied by A&S Wholesalers"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 640px"
                  className="object-contain"
                />
              </div>

              {/* floating datasheet chips */}
              <div className="pointer-events-none absolute left-4 top-20 hidden rounded-lg bg-white/90 px-3 py-2 shadow-lift ring-1 ring-brand-line backdrop-blur sm:block">
                <div className="font-medium text-[0.6rem] uppercase tracking-[0.16em] text-brand-steel">Capacity</div>
                <div className="tnum font-display text-sm font-bold text-brand-ink">{hero.productChips[0]}</div>
              </div>
              <div className="pointer-events-none absolute bottom-16 right-5 hidden rounded-lg bg-white/90 px-3 py-2 shadow-lift ring-1 ring-brand-line backdrop-blur sm:block">
                <div className="font-medium text-[0.6rem] uppercase tracking-[0.16em] text-brand-steel">Refrigerant</div>
                <div className="tnum font-display text-sm font-bold text-brand-ink">{hero.productChips[1]}</div>
              </div>

              <div className="mt-4 flex flex-col gap-1 border-t border-brand-line pt-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm font-medium text-brand-graphite">{hero.productCaption}</span>
                <span className="tnum font-medium text-xs uppercase tracking-wide text-brand-steel">{hero.productChips[2]}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
