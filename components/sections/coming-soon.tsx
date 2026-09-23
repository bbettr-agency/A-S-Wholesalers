import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/typography";
import { DimensionRule } from "@/components/ui/data";
import { Button } from "@/components/ui/button";
import { CallButton, WhatsAppButton } from "@/components/funnel/channel-buttons";

/**
 * ComingSoon – the honest placeholder for routes not yet built. It does NOT fake a
 * finished page; it states the page is in progress and routes to the live enquiry
 * and contact channels. These pages are noindex and excluded from the sitemap.
 */
export function ComingSoon({ title, blurb }: { title: string; blurb: string }) {
  return (
    <main id="main" className="flex min-h-[70vh] items-center bg-brand-bone pt-32 pb-20">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>In progress</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-brand-ink md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-brand-graphite">{blurb}</p>
          <DimensionRule className="mt-8 max-w-md" label="Coming soon" />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#enquire" variant="primary" size="lg">Send an enquiry</Button>
            <WhatsAppButton size="lg" />
            <CallButton size="lg" />
          </div>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-primary transition-colors hover:text-brand-accent"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </Container>
    </main>
  );
}
