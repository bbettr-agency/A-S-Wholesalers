import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/typography";
import { Reveal, Stagger } from "@/engine/motion";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/funnel/channel-buttons";
import { supplier } from "@/config/home";
import { supplierPoints } from "@/config/trust";

/**
 * Why A&S — the supplier value, kept strictly distinct from Haier's credentials.
 * No invented stats. Numbered like a datasheet (the ownable motif).
 */
export function SupplierValue() {
  return (
    <Section tone="bone">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div>
              <SectionHeading eyebrow={supplier.eyebrow} heading={supplier.heading} lead={supplier.lead} maxWidth="max-w-md" />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#enquire" variant="primary" size="md">Send an enquiry</Button>
                <WhatsAppButton />
              </div>
            </div>
          </Reveal>

          <Stagger className="grid gap-px overflow-hidden rounded-2xl bg-brand-line ring-1 ring-brand-line sm:grid-cols-1">
            {supplierPoints.map((p, i) => (
              <Reveal key={p.title} preset="fadeUpItem">
                <div className="flex gap-5 bg-brand-bone p-6 md:p-7">
                  <span className="tnum font-medium text-sm font-medium text-brand-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-brand-ink">{p.title}</h3>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-brand-graphite">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
