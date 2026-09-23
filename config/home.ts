/**
 * Home page copy – the narrative. Every section's copy lives here so components
 * carry no hardcoded strings (OS config rule).
 *
 * POSITIONING (owner feedback, 2026): A&S is the WHOLESALE DISTRIBUTOR of Haier
 * air conditioning. The audience is trade – independent retailers, resellers and
 * trade businesses that want to STOCK and SUPPLY Haier to their own customers –
 * not individual homeowners buying one unit. The site stays highly informational
 * about the Haier range; the commercial objective is larger trade enquiries.
 *
 * Confirmed facts only: A&S distributes/wholesales Haier from Centurion and works
 * with trade partners. NOT stated (unconfirmed): MOQ, trade pricing, dealer
 * discounts, exclusivity, credit, nationwide delivery, "authorised/official
 * distributor". Haier facts stay attributed to Haier.
 */

export const hero = {
  eyebrow: "The Haier air conditioning wholesaler",
  // H1: entity + category + the commercial position (supplied to the trade). Accent
  // keeps the approved red emphasis on "supplied". Centurion carried in the sub.
  headline: "Haier air conditioning,",
  headlineAccent: "supplied",
  headlineRest: "to the trade.",
  sub: "A&S Wholesalers distributes the full Haier air-conditioning range from Centurion – for independent retailers, resellers and installers looking to stock and supply Haier to their own customers.",
  primaryCta: { label: "Enquire about stocking Haier", href: "#enquire" },
  secondaryCta: { label: "See the range", href: "#range" },
  // Floating data chips on the hero product render (datasheet motif).
  productChips: ["9,000 – 24,000 BTU", "R32 inverter", "ES09–24QF32I"],
  productCaption: "Aeropure Inverter – the flagship wall split",
};

export const positioning = {
  eyebrow: "Who we are",
  heading: "A Haier air conditioning wholesaler.",
  body: "A&S distributes the full Haier air-conditioning range from Centurion. We work with independent retailers, resellers and trade businesses looking to stock and supply Haier to their own customers.",
};

export const range = {
  eyebrow: "Match the range",
  heading: "Which Haier ranges fit your customers?",
  lead: "Different customers, different systems. Explore the five Haier categories A&S supplies – and the ranges that fit what your customers are asking for.",
};

export const whyHaier = {
  eyebrow: "Why Haier",
  heading: "Engineered for efficiency, clean air and unstable supply.",
  lead: "Everything A&S supplies is Haier – by Euromonitor's count, the world's number-one major-appliance brand for 16 years running. That engineering is what your customers get.",
  pillars: [
    {
      title: "Full-inverter efficiency",
      body: "DC inverter compressors rated up to A+++/A++, with AI ECO learning usage to cut the running cost.",
    },
    {
      title: "Genuinely healthy air",
      body: "UVC Plus sterilisation and Self-Clean keep the evaporator – and the air coming off it – clean.",
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
  // The immersive Airflow Gallery – a demonstration of the Haier ranges A&S can
  // supply, and how each system type works. Informative for trade buyers.
  eyebrow: "The systems, shown",
  heading: "See how each Haier system moves air.",
  lead: "Five system types, five ways of delivering air – the full spread of Haier ranges you can source through A&S. Scroll through them.",
  scrollHint: "Scroll to move through the systems",
  exploreEyebrow: "The full catalogue",
  exploreHeading: "Explore all nine Haier ranges",
  exploreLead: "Every Haier family A&S supplies, with capacities and model codes – the depth of range you can offer your customers.",
};

export const resiComm = {
  eyebrow: "Where it goes",
  heading: "For the home. And for the business.",
  lead: "One range, both markets – residential for homes and apartments, commercial for shops, offices and larger sites. Source what your customers need from A&S.",
  residential: {
    tag: "Residential",
    title: "Homes & apartments",
    body: "Quiet wall splits, multi-split to run several rooms off one outdoor unit, and slim ducted for a concealed finish – the residential ranges your customers ask for most.",
    types: ["Wall-mounted split", "Multi-split", "Slim ducted", "Solar"],
    image: "/images/lifestyle/room-beige.jpg",
    imageAlt: "A Haier wall-mounted split air conditioner installed above a sofa in a modern living room",
    imageIsProduct: false,
  },
  commercial: {
    tag: "Commercial",
    title: "Shops, offices & commercial",
    body: "Ceiling cassettes for even airflow across an open floor, medium-static ducted for larger areas, and multi-split for a run of rooms – the commercial ranges for your project work.",
    types: ["Cassette", "Ducted", "Multi-split"],
    // No commercial-premises photo exists – we use the commercial cassette render
    // rather than implying an interior we can't show. A real shoot is a follow-up.
    image: "/images/products/haier-cassette.jpg",
    imageAlt: "Haier ceiling cassette air conditioner – the commercial unit for open floors",
    imageIsProduct: true,
  },
};

export const supplier = {
  eyebrow: "Why A&S",
  heading: "One wholesaler for the whole Haier range.",
  lead: "Source the entire Haier air-conditioning range from one Centurion wholesaler – wall splits through to commercial cassettes, one point of contact for your business.",
};

export const location = {
  eyebrow: "Find us",
  heading: "Supplied from Centurion, Gauteng.",
  body: "Stocked and supplied from our branch at Icon Industrial Park in Sunderland Ridge. Start a trade enquiry, message us on WhatsApp, or call during business hours.",
};
