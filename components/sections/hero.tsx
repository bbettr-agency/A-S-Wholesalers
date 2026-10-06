import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/layout";
import { Accent } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { heroStack, Reveal } from "@/engine/motion";
import { hero } from "@/config/home";
import { heroProof } from "@/config/trust";

/**
 * Hero – Capability archetype, executed as a single full-bleed photographic
 * canvas (Foxtron hero architecture, A&S light character). The lifestyle image
 * (a Haier wall-split in a premium interior) fills the whole hero edge-to-edge;
 * the centred message sits inside it. The legibility treatment is COHESIVE – a
 * uniform light veil plus a gentle, large central lift – so the photo reads as
 * one continuous image with no washed-out centre rectangle. The H1 is the LCP
 * and is never animated.
 */
export function Hero() {
  const h = heroStack({ character: "precise" });

  return (
    <section className="relative isolate overflow-hidden bg-brand-mist">
      {/* Full-bleed background photograph (edge to edge) */}
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        quality={86}
        className="-z-10 object-cover object-[54%_30%] md:object-[50%_24%] lg:object-[50%_20%]"
      />
      {/* Cohesive light treatment, not a central blob:
          1) a uniform veil lightens the whole frame evenly (keeps colour/depth);
          2) a large, gentle central lift raises legibility behind the copy while
             fading so smoothly it never reads as a rectangle;
          3) a whisper-soft top/bottom gradient frames the nav and the hand-off
             to the certificate section. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand-bone/[0.44]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 [background:linear-gradient(to_bottom,rgba(251,251,252,0.18)_0%,transparent_26%,transparent_82%,rgba(251,251,252,0.22)_100%)]"
      />

      <Container className="relative">
        <div className="mx-auto flex min-h-[600px] max-w-3xl flex-col items-center justify-center py-28 text-center sm:min-h-[640px] lg:min-h-[84vh]">
          <div {...h.lcp}>
            <p className="font-medium text-xs uppercase tracking-[0.2em] text-brand-graphite">{hero.eyebrow}</p>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-[2.5rem] font-extrabold leading-[1.03] tracking-[-0.02em] text-brand-ink sm:text-5xl lg:text-[3.75rem]">
              {hero.headline}
              <br className="hidden sm:block" /> <Accent>{hero.headlineAccent}</Accent> {hero.headlineRest}
            </h1>
          </div>

          <Reveal {...h.step(0)}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-graphite">{hero.sub}</p>
          </Reveal>

          <Reveal {...h.step(1)}>
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <Button href={hero.primaryCta.href} variant="primary" size="lg" className="w-full sm:w-auto" trailingIcon={<ArrowRight className="h-4 w-4 transition-transform duration-200 ease-brand group-hover:translate-x-1" />}>
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary" size="lg" className="w-full bg-brand-bone shadow-lift sm:w-auto">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal {...h.step(2)}>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {heroProof.map((p) => (
                <li key={p.label} className="flex items-center gap-2 text-sm font-semibold text-brand-graphite">
                  <Check className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                  {p.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
