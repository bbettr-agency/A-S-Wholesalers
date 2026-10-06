import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/typography";
import { Reveal } from "@/engine/motion";
import { cn } from "@/lib/utils";
import { certificate } from "@/config/distributor";

/**
 * Certificate – the Haier Certificate of Authorisation presented as evidence,
 * not decoration. The real rendered document is the visual hero; the copy states
 * the authorised-distributor fact once, cleanly. No fake badges or shields.
 *
 * `full` (default) is the primary trust moment (homepage below the hero, About):
 * substantial copy/document balance, the certificate scaled to read clearly as a
 * real document. `compact` is a tighter, integrated proof reference (Trade Supply).
 * One component, two variants – no second design.
 */
export function Certificate({
  tone = "mist",
  compact = false,
  eager = false,
  className,
}: {
  tone?: "bone" | "mist";
  compact?: boolean;
  /** Required when the section sits at/above the fold (homepage #2) so the copy
   *  reveal animates on mount instead of waiting for a scroll observer. */
  eager?: boolean;
  className?: string;
}) {
  return (
    <Section tone={tone} id="authorised-distributor" compact={compact} className={className}>
      <Container>
        <div
          className={cn(
            "grid items-center gap-10",
            compact ? "lg:grid-cols-[1fr_0.72fr] lg:gap-12" : "lg:grid-cols-[1fr_0.92fr] lg:gap-14",
          )}
        >
          <Reveal eager={eager}>
            <div className="max-w-xl">
              <Eyebrow>{certificate.eyebrow}</Eyebrow>
              <h2
                className={cn(
                  "mt-3 font-display font-bold leading-[1.08] tracking-tight text-brand-ink",
                  compact ? "text-2xl md:text-3xl" : "text-3xl md:text-[2.6rem]",
                )}
              >
                {certificate.heading}
              </h2>
              <p
                className={cn(
                  "mt-5 max-w-prose leading-relaxed text-brand-graphite",
                  compact ? "text-base" : "text-lg",
                )}
              >
                {certificate.body}
              </p>

              <p className="mt-6 inline-flex items-center gap-2.5 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-brand-ink ring-1 ring-brand-line">
                <BadgeCheck className="h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                {certificate.statement}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
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
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-steel">
                  {certificate.issuedBy}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} eager={eager} preset={compact ? "fadeUp" : "imageReveal"}>
            {/* The real document, framed as evidence. Click opens the full PDF. */}
            <a
              href={certificate.pdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${certificate.viewLabel} (PDF, opens in a new tab)`}
              className={cn(
                "group relative block w-full rounded-xl bg-white p-3 shadow-ink ring-1 ring-brand-line transition-transform duration-300 ease-brand hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-state-focus md:p-4 lg:ml-auto",
                compact ? "mx-auto max-w-xs" : "mx-auto max-w-md lg:mx-0 lg:max-w-[460px]",
              )}
            >
              <div className="relative aspect-[595/842] w-full overflow-hidden rounded-md ring-1 ring-brand-line/70">
                <Image
                  src={certificate.image}
                  alt={certificate.imageAlt}
                  fill
                  sizes={compact ? "(max-width: 1024px) 70vw, 300px" : "(max-width: 1024px) 85vw, 460px"}
                  quality={90}
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
