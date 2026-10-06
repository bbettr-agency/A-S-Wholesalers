import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/layout";
import { Eyebrow, Accent } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { heroStack, Reveal } from "@/engine/motion";
import { hero } from "@/config/home";
import { heroProof } from "@/config/trust";

/**
 * Hero – Capability archetype, executed light and centred. Blocking Question:
 * "is A&S a real SA supplier who stocks the full Haier range for my business,
 * and how do I reach them?" A centred message + CTAs + proof, then a real-world
 * lifestyle image (a Haier wall-split in a premium interior) carrying the brand
 * atmosphere. The H1 is the LCP and is never animated.
 */
export function Hero() {
  const h = heroStack({ character: "precise" });

  return (
    <section className="relative overflow-hidden bg-brand-bone pt-28 pb-12 md:pt-28 md:pb-16">
      {/* faint technical grid wash – structure, not decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,theme(colors.brand.line)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.brand.line)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(120%_70%_at_50%_0%,black,transparent_70%)]"
      />
      <Container className="relative">
        {/* Centred message */}
        <div className="mx-auto max-w-3xl text-center">
          <div {...h.lcp}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-[2.5rem] font-extrabold leading-[1.03] tracking-[-0.02em] text-brand-ink sm:text-5xl lg:text-[3.75rem]">
              {hero.headline}
              <br className="hidden sm:block" /> <Accent>{hero.headlineAccent}</Accent> {hero.headlineRest}
            </h1>
          </div>

          <Reveal {...h.step(0)}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-graphite">{hero.sub}</p>
          </Reveal>

          <Reveal {...h.step(1)}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={hero.primaryCta.href} variant="primary" size="lg" className="w-full sm:w-auto" trailingIcon={<ArrowRight className="h-4 w-4 transition-transform duration-200 ease-brand group-hover:translate-x-1" />}>
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary" size="lg" className="w-full sm:w-auto">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal {...h.step(2)}>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {heroProof.map((p) => (
                <li key={p.label} className="flex items-center gap-2 text-sm font-medium text-brand-graphite">
                  <Check className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                  {p.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Lifestyle hero visual – editorial band (the LCP image) */}
        <Reveal {...h.step(3)} preset="imageReveal">
          <div className="relative mt-10 overflow-hidden rounded-3xl ring-1 ring-brand-line md:mt-12">
            <div className="relative h-[260px] w-full sm:h-[340px] md:h-[400px] lg:h-[448px]">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority
                sizes="(min-width: 1280px) 1216px, 100vw"
                quality={86}
                className="object-cover object-[50%_38%]"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
