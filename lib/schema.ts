import { site, addressOneLine } from "@/config/site";

/**
 * JSON-LD structured data. Real NAP only. No AggregateRating, no awards, no
 * founding year — none are verified for A&S (OS truth standard, Gate 3).
 */

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.shortDescription,
    url: site.url,
    telephone: site.contact.phone.dial,
    email: site.contact.email.primary,
    image: `${site.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.park}`,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      postalCode: site.address.postalCode,
      addressCountry: "ZA",
    },
    areaServed: { "@type": "AdministrativeArea", name: "Gauteng, South Africa" },
    openingHoursSpecification: site.hours.schema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
      opens: h.opens,
      closes: h.closes,
    })),
    brand: { "@type": "Brand", name: "Haier" },
    slogan: site.tagline,
    knowsAbout: [
      "Haier air conditioning",
      "Inverter air conditioners",
      "Ducted air conditioning",
      "Cassette air conditioners",
      "Multi-split air conditioning",
      "Solar air conditioning",
    ],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#org`,
    name: site.name,
    url: site.url,
    email: site.contact.email.primary,
    telephone: site.contact.phone.dial,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.park}`,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      postalCode: site.address.postalCode,
      addressCountry: "ZA",
    },
    description: `${site.name}. ${addressOneLine}.`,
  };
}
