import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/typography";
import { Reveal, Stagger } from "@/engine/motion";
import { support } from "@/config/distributor";

/**
 * DistributorSupport – the confirmed trade assurances (authorised status,
 * nationwide delivery, trade pricing, spares, after-sales, warranty). Rendered as
 * a restrained numbered datasheet grid – the ownable A&S motif, not icon cards.
 */
export function DistributorSupport({ tone = "bone" }: { tone?: "bone" | "mist" }) {
  return (
    <Section tone={tone}>
      <Container>
        <Reveal>
          <SectionHeading eyebrow={support.eyebrow} heading={support.heading} lead={support.lead} maxWidth="max-w-2xl" />
        </Reveal>
        <Stagger className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {support.points.map((p, i) => (
            <Reveal key={p.title} preset="fadeUpItem">
              <div className="border-t-2 border-brand-ink/10 pt-5">
                <span className="tnum font-medium text-sm text-brand-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-brand-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-graphite">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
