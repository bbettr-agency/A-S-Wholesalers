import Image from "next/image";
import { Check } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/typography";
import { ModelCode, DataChip, DimensionRule } from "@/components/ui/data";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger } from "@/engine/motion";
import { Breadcrumbs } from "@/components/funnel/breadcrumbs";
import { RangeCard } from "@/components/sections/range-card";
import { EnquirySection } from "@/components/funnel/enquiry-section";
import type { ProductFamily } from "@/config/products";
import { type RangeDetail, categoryForType, relatedFor } from "@/config/catalogue";

/**
 * RangeDetailView – the shared product-page template. Consistent system, but the
 * product's own data (specs, applications, tech) drives the content.
 * The closing enquiry carries the range as context for CRM.
 */
export function RangeDetailView({ family, detail }: { family: ProductFamily; detail: RangeDetail }) {
  const category = categoryForType(family.solution);
  const related = relatedFor(family.id);
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Haier Range", url: "/haier-range" },
    { name: family.name, url: `/haier-range/${detail.slug}` },
  ];

  return (
    <main id="main">
      {/* Hero */}
      <Section tone="bone" className="pt-32 md:pt-36">
        <Container>
          <Breadcrumbs items={crumbs.map((c, i) => ({ name: c.name, href: i < crumbs.length - 1 ? c.url : undefined }))} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <div>
              {category ? <Eyebrow>{category.label} · Haier range</Eyebrow> : null}
              <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink md:text-5xl">
                Haier {family.name}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-brand-graphite">{detail.positioning}</p>

              <div className="mt-6 grid max-w-md grid-cols-3 gap-2">
                <DataChip label="Capacity" value={family.capacity} />
                {family.solution === "multi" ? (
                  <DataChip label="Indoor units" value="Up to 4" />
                ) : (
                  <DataChip label="BTU" value={family.btu} />
                )}
                <DataChip label="Class" value={family.energyClass} />
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {family.models.map((m) => (
                  <ModelCode key={m}>{m}</ModelCode>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#enquire" variant="primary" size="lg">Enquire about this range</Button>
                <Button href="/haier-range" variant="secondary" size="lg">All Haier ranges</Button>
              </div>
            </div>

            {/* Product stage – the render carries the visual weight on a soft depth glow */}
            <div className="relative">
              <div className="relative aspect-[16/11] w-full">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 [background:radial-gradient(58%_54%_at_50%_46%,rgba(27,42,74,0.06),transparent_70%)]" />
                <Image
                  src={family.image}
                  alt={family.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 640px"
                  quality={88}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Overview + applications */}
      <Section tone="mist">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <Reveal>
              <div>
                <Eyebrow>Overview</Eyebrow>
                <p className="mt-4 max-w-prose text-lg leading-relaxed text-brand-graphite">{detail.overview}</p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-2xl bg-white p-6 ring-1 ring-brand-line md:p-7">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand-steel">Where it fits</p>
                <ul className="mt-4 space-y-3">
                  {detail.applications.map((a) => (
                    <li key={a} className="flex items-start gap-2.5 text-sm text-brand-graphite">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Technology */}
      <Section tone="bone">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>The technology</Eyebrow>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">What sets this range apart.</h2>
            </div>
          </Reveal>
          <Stagger className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {detail.tech.map((t) => (
              <Reveal key={t.title} preset="fadeUpItem">
                <div className="border-t-2 border-brand-ink/10 pt-5">
                  <h3 className="font-display text-lg font-semibold text-brand-ink">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-graphite">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Specifications */}
      <Section tone="mist">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <div>
                <Eyebrow>Specifications</Eyebrow>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">Straight off the datasheet.</h2>
                <p className="mt-4 max-w-prose text-sm leading-relaxed text-brand-graphite">
                  Catalogue figures for the {family.name} range. Full per-model datasheets are available on enquiry.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <dl className="overflow-hidden rounded-2xl bg-white ring-1 ring-brand-line">
                {detail.specs.map((s, i) => (
                  <div key={s.label} className={`flex items-center justify-between gap-4 px-5 py-4 ${i > 0 ? "border-t border-brand-line" : ""}`}>
                    <dt className="text-sm text-brand-steel">{s.label}</dt>
                    <dd className="tnum text-right text-sm font-semibold text-brand-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Related ranges */}
      {related.length > 0 ? (
        <Section tone="bone">
          <Container>
            <Reveal>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <Eyebrow>Related ranges</Eyebrow>
                  <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">More from the Haier range.</h2>
                </div>
                <DimensionRule className="hidden w-40 sm:flex" />
              </div>
            </Reveal>
            <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map(({ family: rf, detail: rd }) => (
                <Reveal key={rf.id} preset="fadeUpItem">
                  <RangeCard family={rf} detail={rd} />
                </Reveal>
              ))}
            </Stagger>
          </Container>
        </Section>
      ) : null}

      <EnquirySection defaultInterest={family.solution} sourceProduct={family.name} />
    </main>
  );
}
