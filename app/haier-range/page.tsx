import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/typography";
import { Reveal, Stagger } from "@/engine/motion";
import { Breadcrumbs } from "@/components/funnel/breadcrumbs";
import { RangeCard } from "@/components/sections/range-card";
import { EnquirySection } from "@/components/funnel/enquiry-section";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { categories, familiesInCategory } from "@/config/catalogue";
import { rangeIndex } from "@/config/pages";

export const metadata: Metadata = buildMetadata({
  title: rangeIndex.metaTitle,
  description: rangeIndex.metaDescription,
  path: "/haier-range",
});

const crumbs = [
  { name: "Home", url: "/" },
  { name: "Haier Range", url: "/haier-range" },
];

export default function HaierRangePage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      {/* Intro */}
      <Section tone="bone" className="pt-32 md:pt-36">
        <Container>
          <Breadcrumbs items={crumbs.map((c, i) => ({ name: c.name, href: i < crumbs.length - 1 ? c.url : undefined }))} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>{rangeIndex.eyebrow}</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.06] tracking-tight text-brand-ink md:text-5xl">
              {rangeIndex.heading}
            </h1>
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-brand-graphite">{rangeIndex.lead}</p>
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section tone="mist" className="pt-0">
        <Container>
          <div className="space-y-16 md:space-y-20">
            {categories.map((c) => {
              const ranges = familiesInCategory(c);
              return (
                <div key={c.slug} id={c.slug} className="scroll-mt-28 border-t border-brand-line pt-10">
                  <Reveal>
                    <div className="max-w-2xl">
                      <Eyebrow>{c.label}</Eyebrow>
                      <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">{c.title}</h2>
                      <p className="mt-3 text-base leading-relaxed text-brand-graphite">{c.intro}</p>
                    </div>
                  </Reveal>
                  <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {ranges.map(({ family, detail }) => (
                      <Reveal key={family.id} preset="fadeUpItem">
                        <RangeCard family={family} detail={detail} />
                      </Reveal>
                    ))}
                  </Stagger>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <EnquirySection />
    </main>
  );
}
