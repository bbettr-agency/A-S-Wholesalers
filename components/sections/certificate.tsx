import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/typography";
import { Reveal } from "@/engine/motion";
import { certificate } from "@/config/distributor";

/**
 * Certificate – the Haier Certificate of Authorisation presented as evidence,
 * not decoration. The real rendered document is the visual hero; the copy states
 * the authorised-distributor fact once, cleanly. No fake badges or shields.
 *
 * `compact` renders a tighter two-column trust moment (for Trade Supply); the
 * full variant is the primary credibility section (About).
 */
export function Certificate({
  tone = "mist",
  compact = false,
}: {
  tone?: "bone" | "mist";
  compact?: boolean;
}) {
  return (
    <Section tone={tone} id="authorised-distributor">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <Reveal>
            <div>
              <Eyebrow>{certificate.eyebrow}</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight text-brand-ink md:text-4xl">
                {certificate.heading}
              </h2>
              <p className="mt-5 max-w-prose text-base leading-relaxed text-brand-graphite md:text-lg">
                {certificate.body}
              </p>

              <p className="mt-6 inline-flex items-center gap-2.5 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-brand-ink ring-1 ring-brand-line">
                <BadgeCheck className="h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                {certificate.statement}
              </p>

              <div className="mt-7">
                <a
                  href={certificate.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="view-certificate"
                  className="group inline-flex h-12 items-center gap-2 rounded-lg bg-brand-ink px-6 text-sm font-semibold text-brand-bone transition-transform duration-200 ease-brand hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus active:translate-y-px"
                >
                  {certificate.viewLabel}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-brand-steel">
                  {certificate.issuedBy}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} preset={compact ? "fadeUp" : "imageReveal"}>
            {/* The real document, framed as evidence. Click opens the full PDF. */}
            <a
              href={certificate.pdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${certificate.viewLabel} (PDF, opens in a new tab)`}
              className="group relative mx-auto block w-full max-w-sm rounded-xl bg-white p-3 shadow-ink ring-1 ring-brand-line transition-transform duration-300 ease-brand hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-state-focus md:p-4"
            >
              <div className="relative aspect-[595/842] w-full overflow-hidden rounded-md ring-1 ring-brand-line/70">
                <Image
                  src={certificate.image}
                  alt={certificate.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 80vw, 380px"
                  quality={88}
                  className="object-contain"
                />
              </div>
              <span className="pointer-events-none absolute bottom-5 right-5 inline-flex items-center gap-1.5 rounded-md bg-brand-ink/90 px-3 py-1.5 text-xs font-semibold text-brand-bone opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:bottom-6 md:right-6">
                View full certificate <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </a>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
