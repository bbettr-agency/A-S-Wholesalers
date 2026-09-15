import { MapPin, Clock, Navigation } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/typography";
import { DimensionRule } from "@/components/ui/data";
import { Reveal } from "@/engine/motion";
import { Button } from "@/components/ui/button";
import { site, mapsLink } from "@/config/site";
import { location } from "@/config/home";

/**
 * Location — real NAP + hours, with a real (keyless) Google Maps embed of the
 * Centurion premises. No fabricated premises photo.
 */
export function Location() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&output=embed`;

  return (
    <Section tone="mist" id="location">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <div>
              <SectionHeading eyebrow={location.eyebrow} heading={location.heading} lead={location.body} maxWidth="max-w-md" />

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-brand-accent ring-1 ring-brand-line">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <address className="not-italic leading-relaxed text-brand-graphite">
                    <span className="block font-display font-semibold text-brand-ink">{site.name}</span>
                    {site.address.street}
                    <br />
                    {site.address.park}, {site.address.suburb}
                    <br />
                    {site.address.city}, {site.address.postalCode}
                  </address>
                </div>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-brand-accent ring-1 ring-brand-line">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="leading-relaxed text-brand-graphite">
                    <span className="block font-display font-semibold text-brand-ink">Business hours</span>
                    {site.hours.weekdays}
                    <span className="mt-0.5 block text-sm text-brand-steel">{site.hours.note}</span>
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  href={mapsLink}
                  variant="secondary"
                  size="md"
                  leadingIcon={<Navigation className="h-4 w-4" aria-hidden="true" />}
                >
                  Get directions
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-3xl bg-white p-2 ring-1 ring-brand-line shadow-card">
              <div className="overflow-hidden rounded-2xl">
                <iframe
                  title={`Map to ${site.name}, ${site.address.city}`}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[300px] w-full border-0 md:h-[420px]"
                />
              </div>
              <DimensionRule className="px-3 py-3" label={`${site.address.park} · ${site.address.suburb}`} />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
