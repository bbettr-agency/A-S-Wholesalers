import { Plus } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/typography";
import { Reveal } from "@/engine/motion";
import { faq } from "@/config/distributor";

/**
 * TradeFAQ – concise, verified trade questions. Native <details>/<summary> so it
 * is accessible and works with no JS; styled to the system. FAQPage schema is
 * emitted by the page, from the same config.
 */
export function TradeFAQ({ tone = "bone" }: { tone?: "bone" | "mist" }) {
  return (
    <Section tone={tone}>
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
              {faq.heading}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 max-w-3xl divide-y divide-brand-line border-y border-brand-line">
            {faq.items.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-base font-semibold text-brand-ink md:text-lg">{item.q}</span>
                  <Plus
                    className="h-5 w-5 shrink-0 text-brand-steel transition-transform duration-200 ease-brand group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="max-w-prose pb-5 text-sm leading-relaxed text-brand-graphite md:text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
