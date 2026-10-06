import { Download } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/typography";
import { Reveal } from "@/engine/motion";
import { catalogue } from "@/config/distributor";

/**
 * CatalogueCTA – a restrained distributor-resource banner linking to the real
 * Haier catalogue PDF (opens in a new tab). Not a downloads dump.
 */
export function CatalogueCTA({ tone = "bone" }: { tone?: "bone" | "mist" }) {
  return (
    <Section tone={tone} compact>
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-brand-ink p-7 text-brand-bone shadow-ink md:flex-row md:items-center md:gap-10 md:p-9">
            <div className="max-w-xl">
              <Eyebrow onDark>{catalogue.eyebrow}</Eyebrow>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-brand-bone md:text-3xl">
                {catalogue.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-fog md:text-base">{catalogue.body}</p>
            </div>
            <a
              href={catalogue.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="download-catalogue"
              className="group inline-flex h-12 shrink-0 items-center gap-2.5 rounded-lg bg-brand-accent px-6 text-sm font-semibold text-white shadow-accent transition-[transform,background-color] duration-200 ease-brand hover:-translate-y-0.5 hover:bg-brand-accentDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus active:translate-y-px"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {catalogue.cta}
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
