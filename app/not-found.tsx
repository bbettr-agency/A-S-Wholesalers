import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/layout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-[70vh] items-center bg-brand-bone pt-32 pb-20">
      <Container>
        <div className="max-w-xl">
          <p className="font-medium text-sm uppercase tracking-[0.2em] text-brand-accent">404</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-brand-ink md:text-5xl">
            Page not found
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-graphite">
            That page isn&apos;t here. Head back to the range, or send us an enquiry.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/" variant="primary" size="lg" leadingIcon={<ArrowLeft className="h-4 w-4" />}>
              Back to home
            </Button>
            <Button href="/#enquire" variant="secondary" size="lg">Trade enquiry</Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
