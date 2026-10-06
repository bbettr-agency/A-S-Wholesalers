import { Container, Section } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/typography";
import { Reveal } from "@/engine/motion";
import { warranty } from "@/config/distributor";

/**
 * WarrantyBlock – Haier's manufacturer warranty, presented as three plain
 * datasheet figures (2 / 5 / 10 years). Restrained, with the T&C qualifier. No
 * invented claim procedures or exclusions.
 */
export function WarrantyBlock({ tone = "mist" }: { tone?: "bone" | "mist" }) {
  return (
    <Section tone={tone}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <div>
              <Eyebrow>{warranty.eyebrow}</Eyebrow>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
                {warranty.heading}
              </h2>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-brand-graphite">{warranty.lead}</p>
              <p className="mt-5 text-xs leading-relaxed text-brand-steel">{warranty.note}</p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <dl className="grid grid-cols-3 overflow-hidden rounded-2xl bg-white ring-1 ring-brand-line">
              {warranty.terms.map((t, i) => (
                <div key={t.label} className={`px-4 py-6 text-center md:px-5 md:py-8 ${i > 0 ? "border-l border-brand-line" : ""}`}>
                  <dt className="tnum font-display text-4xl font-extrabold leading-none tracking-tight text-brand-ink md:text-5xl">
                    {t.years}
                  </dt>
                  <dd className="mt-2">
                    <span className="block text-[0.7rem] font-medium uppercase tracking-[0.12em] text-brand-steel">{t.unit}</span>
                    <span className="mt-1 block text-sm font-semibold text-brand-graphite">{t.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
