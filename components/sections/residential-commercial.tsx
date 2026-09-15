import Image from "next/image";
import { Home, Building2 } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/typography";
import { Reveal, Stagger } from "@/engine/motion";
import { cn } from "@/lib/utils";
import { resiComm } from "@/config/home";
import { EnquireLink } from "@/components/funnel/enquire-link";

const cards = [
  { ...resiComm.residential, icon: Home, interest: "wall" },
  { ...resiComm.commercial, icon: Building2, interest: "cassette" },
];

/**
 * Residential ↔ Commercial — proves the range serves both audiences. Split layout
 * breaks the previous rhythm. Residential uses the real room photograph; commercial
 * uses the cassette render (no commercial-premises photo exists — honest imagery).
 */
export function ResidentialCommercial() {
  return (
    <Section tone="mist">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={resiComm.eyebrow} heading={resiComm.heading} lead={resiComm.lead} maxWidth="max-w-2xl" />
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.tag} preset="fadeUpItem">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-brand-line">
                  <div
                    className={cn(
                      "relative aspect-[16/10] w-full",
                      c.imageIsProduct ? "bg-gradient-to-b from-brand-mist to-white" : "bg-brand-cloud",
                    )}
                  >
                    <Image
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      sizes="(max-width:768px) 100vw, 600px"
                      className={cn(c.imageIsProduct ? "object-contain p-6" : "object-cover")}
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brand-ink/85 px-3 py-1 text-xs font-semibold text-brand-bone backdrop-blur">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" /> {c.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="font-display text-xl font-semibold text-brand-ink">{c.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-graphite">{c.body}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {c.types.map((t) => (
                        <li key={t} className="rounded-full bg-brand-mist px-3 py-1 text-xs font-medium text-brand-primary ring-1 ring-brand-line">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 border-t border-brand-line pt-4">
                      <EnquireLink interest={c.interest} label={`Enquire — ${c.tag.toLowerCase()}`} />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
