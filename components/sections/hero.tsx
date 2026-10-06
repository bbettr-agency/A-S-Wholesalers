import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/layout";
import { Accent } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { heroStack, Reveal } from "@/engine/motion";
import { hero } from "@/config/home";
import { heroProof } from "@/config/trust";

/**
 * Hero – Capability archetype, executed as a single photographic canvas. The
 * lifestyle image (a Haier wall-split in a premium interior) is the hero
 * BACKGROUND; the centred message sits over it. A centre-weighted bone wash keeps
 * the navy/red type legible while the sunset windows and sofa stay vivid. The H1
 * is the LCP and is never animated.
 */
export function Hero() {
  const h = heroStack({ character: "precise" });

  return (
    <section className="relative isolate overflow-hidden bg-brand-mist">
      {/* Background photograph */}
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        quality={85}
        className="-z-10 object-cover object-[52%_28%] lg:object-[50%_18%]"
      />
      {/* Legibility treatment – a localised light pool behind the centred copy
          that blends smoothly outward, so the photograph (windows, sofa, the Haier
          unit) stays vivid and the hero reads as one continuous image. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 [background:radial-gradient(78%_82%_at_50%_48%,rgba(251,251,252,0.80)_0%,rgba(251,251,252,0.52)_38%,rgba(251,251,252,0.2)_66%,rgba(251,251,252,0)_88%)]"
      />

      <Container className="relative">
        <div className="mx-auto flex min-h-[600px] max-w-3xl flex-col items-center justify-center py-28 text-center sm:min-h-[640px] md:py-28 lg:min-h-[740px]">
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
              <Button href={hero.secondaryCta.href} variant="secondary" size="lg" className="w-full bg-brand-bone/70 backdrop-blur-sm sm:w-auto">
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
