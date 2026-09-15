import { Container, Section } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/typography";
import { DimensionRule } from "@/components/ui/data";
import { Reveal } from "@/engine/motion";
import { positioning } from "@/config/home";

/**
 * Positioning band — answers "what is this?" in one confident statement. Compact,
 * tinted, centred — a deliberate rhythm break after the asymmetric hero.
 */
export function Positioning() {
  return (
    <Section tone="mist" compact>
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>{positioning.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-brand-ink md:text-3xl">
              {positioning.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-brand-graphite md:text-lg">
              {positioning.body}
            </p>
            <DimensionRule className="mx-auto mt-8 max-w-xs" />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
