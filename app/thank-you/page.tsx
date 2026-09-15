import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/layout";
import { CallButton, WhatsAppButton } from "@/components/funnel/channel-buttons";
import { buildMetadata } from "@/lib/metadata";
import { enquiryCopy } from "@/config/enquiry";

export const metadata: Metadata = buildMetadata({
  title: "Enquiry received",
  path: "/thank-you",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <main id="main" className="flex min-h-[70vh] items-center bg-brand-bone pt-32 pb-20">
      <Container>
        <div className="max-w-2xl">
          <CheckCircle2 className="h-12 w-12 text-brand-whatsapp" aria-hidden="true" />
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-brand-ink md:text-5xl">
            {enquiryCopy.successHeading}
          </h1>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-brand-graphite">
            {enquiryCopy.successBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
