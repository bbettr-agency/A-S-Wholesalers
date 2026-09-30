import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone, MessageCircle, Mail } from "lucide-react";
import { Container } from "@/components/ui/layout";
import { site, telLink, whatsappLink, mapsLink, addressOneLine } from "@/config/site";
import { footerNav } from "@/config/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-ink text-brand-fog">
      <Container className="py-16 md:py-20">
        {/* Full-width horizontal composition: identity + NAP · nav columns · get in touch */}
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] lg:gap-x-10">
          {/* Identity + NAP */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/ans-logo-round.png"
                alt={`${site.name} logo`}
                width={480}
                height={480}
                className="h-12 w-12"
              />
              <div>
                <p className="font-display text-lg font-bold text-brand-bone">{site.name}</p>
                <p className="font-medium text-[0.7rem] uppercase tracking-[0.18em] text-brand-steel">
                  {site.descriptor}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-fog">
              {site.shortDescription}
            </p>

            <address className="mt-6 space-y-3 text-sm not-italic">
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 transition-colors hover:text-brand-bone">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                <span>{addressOneLine}</span>
              </a>
              <p className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                <span>{site.hours.weekdays}</span>
              </p>
            </address>
          </div>

          {/* Nav link columns */}
          {footerNav.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <p className="font-medium text-[0.7rem] uppercase tracking-[0.18em] text-brand-steel">{col.heading}</p>
              <ul className="mt-4 space-y-3 text-sm">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-bone">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Get in touch – links + direct channels, anchored right on desktop */}
          <div>
            <p className="font-medium text-[0.7rem] uppercase tracking-[0.18em] text-brand-steel">Get in touch</p>
            <div className="mt-4 space-y-3 text-sm">
              <a href={telLink} className="flex items-center gap-2.5 transition-colors hover:text-brand-bone" data-cta="call">
                <Phone className="h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" /> {site.contact.phone.label}
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition-colors hover:text-brand-bone" data-cta="whatsapp">
                <MessageCircle className="h-4 w-4 shrink-0 text-brand-whatsapp" aria-hidden="true" /> {site.contact.whatsapp.label}
              </a>
              <a href={`mailto:${site.contact.email.primary}`} className="flex items-center gap-2.5 transition-colors hover:text-brand-bone">
                <Mail className="h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" /> {site.contact.email.primary}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                href="/contact#enquire"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-accent px-5 text-sm font-semibold text-white transition-transform duration-200 ease-brand hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
                data-cta="enquire"
              >
                Start a trade enquiry
              </Link>
              <Link href="/contact" className="text-sm transition-colors hover:text-brand-bone">
                Contact page
              </Link>
            </div>
          </div>
        </div>

        {/* Legal + credit */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="max-w-2xl text-xs leading-relaxed text-brand-steel">
            Haier and all product names are trademarks of Haier. A&S Wholesalers is a supplier of Haier air conditioning.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-xs text-brand-steel sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} {site.name}. All rights reserved.</p>
            <p>
              Website designed by{" "}
              <a
                href="https://bbettragency.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm font-medium text-brand-fog underline-offset-4 transition-colors hover:text-brand-bone hover:underline focus-visible:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
              >
                Bbettr Agency
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
