/**
 * Site configuration — the single source of truth for A&S Wholesalers' identity,
 * NAP and conversion channels. No contact detail or business fact is hardcoded in
 * a component (OS config rule, SYSTEM/02).
 *
 * TRUTH DISCIPLINE: every value here is client-stated or confirmed. A&S has NOT
 * verified founding year, years of experience, install counts, testimonials,
 * certifications of its own, or "authorised/official distributor" status — so none
 * appear anywhere. Haier's credentials live in config/trust.ts, attributed to Haier.
 */

export const site = {
  name: "A&S Wholesalers",
  legalName: "A&S Wholesalers",
  descriptor: "Haier Air Conditioning", // from onboarding: "A&S Wholesalers Haier Hvac"
  // Not yet live — placeholder production origin for canonical/OG/sitemap. Update at launch.
  url: "https://www.answholesalers.co.za",
  locale: "en-ZA",
  region: "Gauteng",
  country: "South Africa",
  countryCode: "ZA",

  // What A&S does, in the client's own words (onboarding).
  tagline: "Haier air conditioning, supplied across South Africa.",
  shortDescription:
    "A&S Wholesalers supplies the full Haier air conditioning range — residential and commercial — from Centurion, Gauteng.",

  contact: {
    phone: {
      label: "012 323 2101",
      dial: "+27123232101",
    },
    whatsapp: {
      label: "065 815 1032",
      // wa.me requires international format without the leading 0 or +.
      number: "27658151032",
      defaultMessage:
        "Hi A&S Wholesalers, I'd like to enquire about Haier air conditioning.",
    },
    email: {
      primary: "haier@answholesalers.co.za",
      general: "info@answholesalers.co.za",
    },
  },

  address: {
    street: "301 Barolong Street",
    park: "Icon Industrial Park",
    suburb: "Sunderland Ridge",
    city: "Centurion",
    province: "Gauteng",
    postalCode: "0157",
    country: "South Africa",
    // For Google Maps directions link (address search, no fabricated coordinates).
    mapsQuery:
      "301 Barolong Street, Icon Industrial Park, Sunderland Ridge, Centurion, 0157",
  },

  hours: {
    // Onboarding: "Mon-Friday 9-5"
    weekdays: "Monday – Friday, 09:00 – 17:00",
    schema: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    note: "Closed weekends and public holidays.",
  },

  // The supplier relationship, stated factually (client: "We distribute haier airconditioning").
  supplies: "Haier",
} as const;

export type Site = typeof site;

/** wa.me deep link with a pre-filled, optionally context-aware message. */
export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(message ?? site.contact.whatsapp.defaultMessage);
  return `https://wa.me/${site.contact.whatsapp.number}?text=${text}`;
}

/** tel: link in international format. */
export const telLink = `tel:${site.contact.phone.dial}`;

/** Google Maps directions to the Centurion premises (address query — no invented geo). */
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.mapsQuery,
)}`;

/** One-line formatted address. */
export const addressOneLine = `${site.address.street}, ${site.address.park}, ${site.address.suburb}, ${site.address.city}, ${site.address.postalCode}`;
