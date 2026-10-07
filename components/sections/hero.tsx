import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/layout";
import { Accent } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { heroStack, Reveal } from "@/engine/motion";
import { hero } from "@/config/home";
import { heroProof } from "@/config/trust";

/**
 * Hero – one full-bleed lifestyle photograph (Foxtron hero architecture). The
 * image keeps its REAL colours; the text is adapted to the photo (white, with the
 * A&S red kept on "supplied"). There is exactly ONE <Image> and ONE uniform
 * readability tint applied to the WHOLE frame – no central panel, no white wash,
 * no side fills. A tall hero shows as much of the scene as possible. The H1 is
 * the LCP and is never animated.
 */
export function Hero() {
  const h = heroStack({ character: "precise" });

  return (
    <section className="relative isolate overflow-hidden bg-brand-ink">
      {/* ONE full-bleed photograph (edge to edge). Real colours preserved. */}
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        quality={88}
        className="-z-10 object-cover object-[56%_30%] lg:object-[50%_38%]"
      />
      {/* Single UNIFORM readability tint over the whole photo (identical left /
          centre / right – never a central panel) + a whisper-soft top & bottom
          deepening so the nav and the base read without washing the image. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand-ink/[0.28]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 [background:linear-gradient(to_bottom,rgba(15,24,41,0.42)_0%,transparent_26%,transparent_70%,rgba(15,24,41,0.5)_100%)]"
      />

      <Container className="relative">
        <div className="mx-auto flex min-h-[540px] max-w-3xl flex-col items-center justify-center pt-20 pb-28 text-center [text-shadow:0_1px_20px_rgba(8,12,22,0.45)] lg:min-h-[94svh] lg:pt-24 lg:pb-40">
          <div {...h.lcp}>
            <p className="font-medium text-xs uppercase tracking-[0.22em] text-white/85">{hero.eyebrow}</p>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-[2.5rem] font-extrabold leading-[1.03] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.75rem]">
              {hero.headline}
              <br className="hidden sm:block" /> <Accent>{hero.headlineAccent}</Accent> {hero.headlineRest}
            </h1>
          </div>

          <Reveal {...h.step(0)}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">{hero.sub}</p>
          </Reveal>

          <Reveal {...h.step(1)}>
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <Button href={hero.primaryCta.href} variant="primary" size="lg" className="w-full sm:w-auto" trailingIcon={<ArrowRight className="h-4 w-4 transition-transform duration-200 ease-brand group-hover:translate-x-1" />}>
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary" size="lg" onDark className="w-full sm:w-auto">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal {...h.step(2)}>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:mt-12">
              {heroProof.map((p) => (
                <li key={p.label} className="flex items-center gap-2 text-sm font-semibold text-white">
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
