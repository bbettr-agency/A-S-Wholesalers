import { Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/typography";
import { DimensionRule } from "@/components/ui/data";
import { Reveal } from "@/engine/motion";
import { site, telLink, whatsappLink } from "@/config/site";
import { enquiryCopy } from "@/config/enquiry";
import { retailRouting } from "@/config/distributor";
import { EnquiryForm } from "./enquiry-form";

/**
 * Enquiry section – the page's single dark spotlight and strongest conversion
 * moment. Copy on the left with direct channels; the reusable form on the right.
 */
export function EnquirySection({
  defaultInterest,
  sourceProduct,
}: {
  defaultInterest?: string;
  sourceProduct?: string;
} = {}) {
  return (
    <Section tone="ink" id="enquire">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                onDark
                eyebrow={enquiryCopy.eyebrow}
                heading={enquiryCopy.heading}
                lead={enquiryCopy.lead}
                maxWidth="max-w-xl"
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8">
                <DimensionRule onDark label="Reach us directly" />
                <div className="mt-6 space-y-4">
                  <a href={telLink} data-cta="call" className="group flex items-center gap-4 text-brand-bone transition-colors">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/10 transition-colors group-hover:bg-white/10">
                      <Phone className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-medium text-[0.65rem] uppercase tracking-[0.18em] text-brand-steel">Call the branch</span>
                      <span className="font-display text-lg font-semibold">{site.contact.phone.label}</span>
                    </span>
                  </a>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-cta="whatsapp" className="group flex items-center gap-4 text-brand-bone transition-colors">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/10 transition-colors group-hover:bg-white/10">
                      <MessageCircle className="h-5 w-5 text-brand-whatsapp" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-medium text-[0.65rem] uppercase tracking-[0.18em] text-brand-steel">WhatsApp</span>
                      <span className="font-display text-lg font-semibold">{site.contact.whatsapp.label}</span>
                    </span>
                  </a>
                  <a href={`mailto:${site.contact.email.primary}`} className="group flex items-center gap-4 text-brand-bone transition-colors">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/10 transition-colors group-hover:bg-white/10">
                      <Mail className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-medium text-[0.65rem] uppercase tracking-[0.18em] text-brand-steel">Email</span>
                      <span className="font-display text-lg font-semibold">{site.contact.email.primary}</span>
                    </span>
                  </a>
                </div>

                <p className="mt-6 flex items-center gap-2 text-sm text-brand-fog">
                  <Clock className="h-4 w-4 text-brand-steel" aria-hidden="true" /> {site.hours.weekdays}
                </p>

                <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-brand-steel">
                  {retailRouting.text}{" "}
                  <a
                    href={whatsappLink("Hi A&S Wholesalers, I'm looking for a single Haier unit for my home – could you point me to a retailer you supply?")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-brand-fog underline-offset-4 transition-colors hover:text-brand-bone hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus"
                  >
                    {retailRouting.linkText}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="rounded-3xl bg-white/[0.03] p-6 ring-1 ring-white/10 md:p-8">
              <EnquiryForm onDark defaultInterest={defaultInterest} sourceProduct={sourceProduct} />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
