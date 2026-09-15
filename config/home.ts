/**
 * Home page copy — the narrative. Every section's copy lives here so components
 * carry no hardcoded strings (OS config rule). Written in A&S's plain register:
 * specific, no filler ("solutions", "cutting-edge", "we pride ourselves"), and no
 * unverified A&S claim. Haier facts are marked as Haier's.
 */

export const hero = {
  eyebrow: "Haier air conditioning · supplied from Centurion",
  // H1: entity + category + country. Accent span on the differentiator word.
  headline: "Haier air conditioning,",
  headlineAccent: "supplied",
  headlineRest: "across South Africa.",
  sub: "A&S Wholesalers stocks the complete Haier range — wall-mounted, multi-split, ducted, cassette and solar — for homes and businesses, from our branch in Centurion, Gauteng.",
  primaryCta: { label: "Send an enquiry", href: "#enquire" },
  secondaryCta: { label: "See the range", href: "#range" },
  // Floating data chips on the hero product render (datasheet motif).
  productChips: ["9,000 – 24,000 BTU", "R32 inverter", "ES09–24QF32I"],
  productCaption: "Aeropure Inverter — the flagship wall split",
};

export const positioning = {
  eyebrow: "Who we are",
  heading: "A Haier air conditioning supply house.",
  body: "A&S Wholesalers distributes Haier air conditioning across South Africa. One range, residential to commercial — and straight answers on which unit fits the space.",
};

export const range = {
  eyebrow: "Find your fit",
  heading: "Which air conditioner do you actually need?",
  lead: "Five ways to cool a space. Pick the one that matches yours — we'll show the Haier families that fit, and take it from there.",
};

export const whyHaier = {
  eyebrow: "Why Haier",
  heading: "Engineered for efficiency, clean air and unstable supply.",
  lead: "Everything A&S supplies is Haier — by Euromonitor's count, the world's number-one major-appliance brand for 16 years running. That engineering is what you're buying.",
  pillars: [
    {
      title: "Full-inverter efficiency",
      body: "DC inverter compressors rated up to A+++/A++, with AI ECO learning usage to cut the running cost.",
    },
    {
      title: "Genuinely healthy air",
      body: "UVC Plus sterilisation and Self-Clean keep the evaporator — and the air coming off it — clean.",
    },
    {
      title: "Built for South African supply",
      body: "Wide-voltage operation (150–264 V), the Hyper PCB and anti-corrosion coils cope with surges, dust and coastal air.",
    },
    {
      title: "Cooling through load-shedding",
      body: "The Solar-ECO range runs straight off DC panels and balances solar with grid automatically.",
    },
  ],
};

export const products = {
  eyebrow: "The range",
  heading: "The Haier families we supply.",
  lead: "From a bedroom split to a commercial cassette floor — the model codes and capacities are straight off the datasheet.",
  residentialHeading: "Wall-mounted & solar",
  commercialHeading: "Multi-split, ducted & cassette",
};

export const resiComm = {
  eyebrow: "Where it goes",
  heading: "For the home. And for the business.",
  lead: "The same range covers both — we help you match the unit type to the space.",
  residential: {
    tag: "Residential",
    title: "Homes & apartments",
    body: "Quiet wall splits for bedrooms and living areas, multi-split to run several rooms off one outdoor unit, and slim ducted where you want the units out of sight.",
    types: ["Wall-mounted split", "Multi-split", "Slim ducted", "Solar"],
    image: "/images/lifestyle/room-beige.jpg",
    imageAlt: "A Haier wall-mounted split air conditioner installed above a sofa in a modern living room",
    imageIsProduct: false,
  },
  commercial: {
    tag: "Commercial",
    title: "Shops, offices & commercial",
    body: "Ceiling cassettes for even airflow across an open floor, medium-static ducted for larger areas, and multi-split where you're cooling a run of rooms.",
    types: ["Cassette", "Ducted", "Multi-split"],
    // No commercial-premises photo exists — we use the commercial cassette render
    // rather than implying an interior we can't show. A real shoot is a follow-up.
    image: "/images/products/haier-cassette.jpg",
    imageAlt: "Haier ceiling cassette air conditioner — the commercial unit for open floors",
    imageIsProduct: true,
  },
};

export const supplier = {
  eyebrow: "Why A&S",
  heading: "One supplier for the whole Haier range.",
  lead: "Instead of chasing units across five sellers, get the range, the specs and the right fit from one branch in Centurion.",
};

export const location = {
  eyebrow: "Find us",
  heading: "Supplied from Centurion, Gauteng.",
  body: "Stocked and supplied from Icon Industrial Park in Sunderland Ridge. Send an enquiry, message us on WhatsApp, or call the branch during business hours.",
};
