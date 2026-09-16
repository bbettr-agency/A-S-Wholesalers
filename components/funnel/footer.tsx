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
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Identity + NAP */}
          <div>
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

          {/* Nav columns */}
          {footerNav.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <p className="font-medium text-[0.7rem] uppercase tracking-[0.18em] text-brand-steel">{col.heading}</p>
              <ul className="mt-4 space-y-3 text-sm">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-bone">
                      {item.label}
                      {item.status === "soon" ? (
                        <span className="font-medium text-[0.55rem] uppercase tracking-wider text-brand-steel">soon</span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>

              {col.heading === "Get in touch" ? (
                <div className="mt-5 space-y-3 text-sm">
                  <a href={telLink} className="flex items-center gap-2.5 transition-colors hover:text-brand-bone" data-cta="call">
                    <Phone className="h-4 w-4 text-brand-accent" aria-hidden="true" /> {site.contact.phone.label}
                  </a>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition-colors hover:text-brand-bone" data-cta="whatsapp">
                    <MessageCircle className="h-4 w-4 text-brand-whatsapp" aria-hidden="true" /> {site.contact.whatsapp.label}
                  </a>
                  <a href={`mailto:${site.contact.email.primary}`} className="flex items-center gap-2.5 transition-colors hover:text-brand-bone">
                    <Mail className="h-4 w-4 text-brand-accent" aria-hidden="true" /> {site.contact.email.primary}
                  </a>
                </div>
              ) : null}
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-brand-steel sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="max-w-md sm:text-right">
            Haier and all product names are trademarks of Haier. A&S Wholesalers is a supplier of Haier air conditioning.
          </p>
        </div>
      </Container>
    </footer>
  );
}
