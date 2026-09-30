import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow, Accent } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger } from "@/engine/motion";
import { Breadcrumbs } from "@/components/funnel/breadcrumbs";
import { Location } from "@/components/sections/location";
import { EnquirySection } from "@/components/funnel/enquiry-section";
import { WhatsAppButton } from "@/components/funnel/channel-buttons";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { tradeSupply } from "@/config/pages";
import { categories } from "@/config/catalogue";

export const metadata: Metadata = buildMetadata({
  title: tradeSupply.metaTitle,
  description: tradeSupply.metaDescription,
  path: "/trade-supply",
});

const crumbs = [
  { name: "Home", url: "/" },
  { name: "Trade Supply", url: "/trade-supply" },
];

export default function TradeSupplyPage() {
  const t = tradeSupply;
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />

      {/* Hero */}
      <Section tone="bone" className="pt-32 md:pt-36">
        <Container>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Trade Supply" }]} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div>
              <Eyebrow>{t.hero.eyebrow}</Eyebrow>
              <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-brand-ink md:text-5xl lg:text-[3.4rem]">
                {t.hero.headline} <Accent>{t.hero.headlineAccent}</Accent> {t.hero.headlineRest}
              </h1>
              <p className="mt-5 max-w-prose text-lg leading-relaxed text-brand-graphite">{t.hero.lead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#enquire" variant="primary" size="lg">Start a trade enquiry</Button>
                <WhatsAppButton size="lg" />
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] w-full">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 [background:radial-gradient(58%_54%_at_50%_46%,rgba(27,42,74,0.06),transparent_70%)]" />
                <Image src="/images/products/haier-aeropure.jpg" alt="Haier Aeropure Inverter – the flagship wall split supplied by A&S Wholesalers" fill priority sizes="(max-width:1024px) 92vw, 560px" quality={88} className="object-contain" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Who it's for */}
      <Section tone="mist">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>{t.audience.eyebrow}</Eyebrow>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">{t.audience.heading}</h2>
              <p className="mt-4 text-base leading-relaxed text-brand-graphite">{t.audience.lead}</p>
            </div>
          </Reveal>
          <Stagger className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-3">
            {t.audience.items.map((it, i) => (
              <Reveal key={it.title} preset="fadeUpItem">
                <div className="border-t-2 border-brand-ink/10 pt-5">
                  <span className="tnum font-medium text-sm text-brand-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-brand-ink">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-graphite">{it.body}</p>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Breadth of range */}
      <Section tone="bone">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <Reveal>
              <div>
                <Eyebrow>{t.breadth.eyebrow}</Eyebrow>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">{t.breadth.heading}</h2>
                <p className="mt-4 max-w-prose text-base leading-relaxed text-brand-graphite">{t.breadth.lead}</p>
                <div className="mt-7">
                  <Button href="/haier-range" variant="secondary" size="md" trailingIcon={<ArrowRight className="h-4 w-4" />}>
                    Explore the full range
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <ul className="divide-y divide-brand-line rounded-2xl bg-white ring-1 ring-brand-line">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/haier-range#${c.slug}`} className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-brand-mist/60">
                      <span className="font-display text-base font-semibold text-brand-ink">{c.title}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-brand-steel" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section tone="mist">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>{t.process.eyebrow}</Eyebrow>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">{t.process.heading}</h2>
            </div>
          </Reveal>
          <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
            {t.process.steps.map((s) => (
              <Reveal key={s.n} preset="fadeUpItem">
                <div className="rounded-2xl bg-white p-6 ring-1 ring-brand-line md:p-7">
                  <span className="tnum font-display text-3xl font-extrabold tracking-tight text-brand-cloud">{s.n}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-brand-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-graphite">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Location />
      <EnquirySection />
    </main>
  );
}
