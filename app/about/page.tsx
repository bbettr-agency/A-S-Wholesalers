import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow, Accent } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/engine/motion";
import { Breadcrumbs } from "@/components/funnel/breadcrumbs";
import { Location } from "@/components/sections/location";
import { EnquirySection } from "@/components/funnel/enquiry-section";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { about } from "@/config/pages";
import { haierCredentials } from "@/config/trust";

export const metadata: Metadata = buildMetadata({
  title: about.metaTitle,
  description: about.metaDescription,
  path: "/about",
});

const crumbs = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
];

export default function AboutPage() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />

      {/* Hero – type-led */}
      <Section tone="bone" className="pt-32 md:pt-36">
        <Container>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />
          <div className="mt-10 max-w-4xl">
            <Eyebrow>{about.hero.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.03] tracking-tight text-brand-ink md:text-5xl lg:text-[3.6rem]">
              {about.hero.headline} <Accent>{about.hero.headlineAccent}</Accent> {about.hero.headlineRest}
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-brand-graphite md:text-xl">{about.hero.lead}</p>
          </div>
        </Container>
      </Section>

      {/* What we do + range (editorial split) */}
      <Section tone="mist">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <Eyebrow>{about.what.eyebrow}</Eyebrow>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">{about.what.heading}</h2>
                <p className="mt-4 text-base leading-relaxed text-brand-graphite">{about.what.body}</p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div>
                <Eyebrow>{about.range.eyebrow}</Eyebrow>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">{about.range.heading}</h2>
                <p className="mt-4 text-base leading-relaxed text-brand-graphite">{about.range.body}</p>
                <div className="mt-6">
                  <Button href="/haier-range" variant="secondary" size="md">Explore the Haier range</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Product context image */}
      <Section tone="bone" compact>
        <Container>
          <Reveal preset="imageReveal">
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl ring-1 ring-brand-line">
              <Image src="/images/lifestyle/living-room-wide.jpg" alt="A Haier wall-mounted air conditioner in a bright modern interior" fill sizes="100vw" quality={82} className="object-cover" />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Haier credentials – dark inset, attributed to Haier */}
      <Section tone="mist">
        <Container>
          <Reveal>
            <div className="rounded-3xl bg-brand-ink p-8 text-brand-bone shadow-ink md:p-12">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-fog">Haier — the brand behind the range</p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-fog">
                Everything A&S distributes is Haier — the manufacturer whose standing gives your customers a name they already trust.
              </p>
              <dl className="mt-8 grid gap-8 sm:grid-cols-3">
                {haierCredentials.map((c) => (
                  <div key={c.label} className="border-t border-white/10 pt-5">
                    <dt className="tnum font-display text-3xl font-bold tracking-tight text-brand-bone md:text-4xl">{c.value}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-brand-fog">
                      {c.label}
                      {c.source ? <span className="mt-1 block text-[0.65rem] font-medium uppercase tracking-wide text-brand-steel">{c.source}</span> : null}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Location />
      <EnquirySection />
    </main>
  );
}
