import { Zap, ShieldCheck, Wind, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/typography";
import { Reveal, Stagger } from "@/engine/motion";
import { whyHaier } from "@/config/home";
import { haierCredentials } from "@/config/trust";

const PILLAR_ICONS: LucideIcon[] = [Zap, ShieldCheck, Wind, Sun];

/**
 * Why Haier — the "why this product range" answer. Technology pillars in A&S's
 * words, then Haier's own credentials on a dark inset, clearly attributed to Haier
 * (never transferred to A&S).
 */
export function WhyHaier() {
  return (
    <Section tone="mist">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow={whyHaier.eyebrow} heading={whyHaier.heading} lead={whyHaier.lead} maxWidth="max-w-md" />
          </Reveal>

          <Stagger className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {whyHaier.pillars.map((p, i) => {
              const Icon = PILLAR_ICONS[i];
              return (
                <Reveal key={p.title} preset="fadeUpItem">
                  <div className="border-t-2 border-brand-ink/10 pt-5">
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                      <h3 className="font-display text-lg font-semibold text-brand-ink">{p.title}</h3>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-brand-graphite">{p.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </Stagger>
        </div>

        {/* Haier credentials — dark inset, explicitly Haier's */}
        <Reveal>
          <div className="mt-14 rounded-3xl bg-brand-ink p-8 text-brand-bone shadow-ink md:p-10">
            <p className="font-medium text-[0.7rem] uppercase tracking-[0.2em] text-brand-fog">
              Haier — the manufacturer behind the range
            </p>
            <dl className="mt-6 grid gap-8 sm:grid-cols-3">
              {haierCredentials.map((c) => (
                <div key={c.label} className="border-t border-white/10 pt-5">
                  <dt className="tnum font-display text-3xl font-bold tracking-tight text-brand-bone md:text-4xl">
                    {c.value}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-brand-fog">
                    {c.label}
                    {c.source ? (
                      <span className="mt-1 block font-medium text-[0.65rem] uppercase tracking-wide text-brand-steel">
                        {c.source}
                      </span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
