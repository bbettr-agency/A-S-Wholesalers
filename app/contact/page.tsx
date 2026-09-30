import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow, Accent } from "@/components/ui/typography";
import { Reveal } from "@/engine/motion";
import { Breadcrumbs } from "@/components/funnel/breadcrumbs";
import { Location } from "@/components/sections/location";
import { EnquirySection } from "@/components/funnel/enquiry-section";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { contact } from "@/config/pages";

export const metadata: Metadata = buildMetadata({
  title: contact.metaTitle,
  description: contact.metaDescription,
  path: "/contact",
});

const crumbs = [
  { name: "Home", url: "/" },
  { name: "Contact", url: "/contact" },
];

export default function ContactPage() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />

      {/* Hero */}
      <Section tone="bone" className="pt-32 md:pt-36" compact>
        <Container>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
          <div className="mt-10 max-w-3xl">
            <Eyebrow>{contact.hero.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-brand-ink md:text-5xl">
              {contact.hero.headline} <Accent>{contact.hero.headlineAccent}</Accent>
            </h1>
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-brand-graphite">{contact.hero.lead}</p>
          </div>
        </Container>
      </Section>

      <EnquirySection />
      <Location />
    </main>
  );
}
