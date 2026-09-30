/**
 * Catalogue detail – the structured content that drives the Haier Range index and
 * the individual range pages (/haier-range/[slug]). Built on top of the existing
 * `families` data (config/products.ts) so the approved homepage is untouched.
 *
 * All product facts come from the supplied Haier 2026 SA catalogue. A&S adds no
 * commercial claims (no MOQ, pricing, discounts, delivery, exclusivity, or
 * "authorised distributor"). Copy is trade-aware: written for a retailer / reseller
 * / installer deciding what they can source and offer their customers.
 */
import { families, solutions, familyById, type ProductFamily, type SolutionType } from "./products";

export interface RangeTech {
  title: string;
  body: string;
}
export interface Spec {
  label: string;
  value: string;
}
export interface RangeDetail {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  /** One-line trade positioning under the H1. */
  positioning: string;
  /** 2–3 sentence overview. */
  overview: string;
  /** Where a trade customer would place this range. */
  applications: string[];
  /** Haier technologies relevant to this range (from the catalogue). */
  tech: RangeTech[];
  /** Key specifications (catalogue-accurate). */
  specs: Spec[];
  relatedIds: string[];
}

export interface Category {
  slug: string;
  type: SolutionType;
  label: string;
  title: string;
  intro: string;
  familyIds: string[];
}

/** Range categories – the index groups the range by installation type. */
export const categories: Category[] = [
  {
    slug: "wall-mounted",
    type: "wall",
    label: "Wall-mounted",
    title: "Wall-mounted splits",
    intro: "The everyday split – the highest-volume category. Bedrooms, living areas, offices and shop floors, from 9,000 to 24,000 BTU.",
    familyIds: ["aeropure", "ai-eco", "turbo"],
  },
  {
    slug: "solar",
    type: "solar",
    label: "Solar",
    title: "Solar",
    intro: "DC solar-driven cooling that runs straight off panels and balances solar with grid – built for high tariffs and load-shedding.",
    familyIds: ["solar-eco"],
  },
  {
    slug: "multi-split",
    type: "multi",
    label: "Multi-split",
    title: "Multi-split",
    intro: "One outdoor unit driving several indoor units of mixed type – for multi-room homes and apartments where roof space is tight.",
    familyIds: ["multi-odu"],
  },
  {
    slug: "ducted",
    type: "ducted",
    label: "Ducted",
    title: "Ducted",
    intro: "Concealed indoor units delivering air through ceiling ducting – slim low-static for tight voids, medium-static for larger areas.",
    familyIds: ["lsp-duct", "msp-duct"],
  },
  {
    slug: "cassette",
    type: "cassette",
    label: "Cassette",
    title: "Cassette",
    intro: "Ceiling-recessed units with even 360° airflow – the commercial workhorse for shops, offices and open floors.",
    familyIds: ["mini-cassette", "cassette"],
  },
];

export const rangeDetail: Record<string, RangeDetail> = {
  aeropure: {
    slug: "aeropure-inverter",
    seoTitle: "Haier Aeropure Inverter",
    seoDescription:
      "The Haier Aeropure Inverter – black-glass wall split, 9,000–24,000 BTU, UVC Plus and Self-Clean. Stocked and supplied to the trade by A&S Wholesalers, Centurion.",
    positioning: "The flagship black-glass wall split.",
    overview:
      "Aeropure is the range to lead with. A black-glass indoor unit that suits premium residential and front-of-house commercial installs, with full DC-inverter efficiency, UVC Plus air sterilisation and Self-Clean. A strong margin product your customers will recognise on sight.",
    applications: [
      "Premium bedrooms and living areas",
      "Front-of-house offices and consulting rooms",
      "Boutique retail and hospitality",
    ],
    tech: [
      { title: "UVC Plus sterilisation", body: "A UVC module oxidises odours and sterilises the air near the inlet – the healthy-air story customers pay for." },
      { title: "Self-Clean", body: "Freezes then rapidly melts the evaporator to shed dirt, keeping capacity and air quality up." },
      { title: "AI ECO", body: "Learns usage patterns and trims running cost automatically – an easy efficiency sell." },
      { title: "Free Match indoor", body: "Pairs to a multi-split outdoor unit, so it fits both single and multi-room jobs." },
    ],
    specs: [
      { label: "Cooling capacity", value: "2.7 – 6.7 kW" },
      { label: "Capacity (BTU)", value: "9,000 – 24,000" },
      { label: "Energy class", value: "A / A++" },
      { label: "Refrigerant", value: "R32" },
      { label: "Control", value: "Remote + WiFi app" },
      { label: "Model codes", value: "ES09QF32I – ES24QF32I" },
    ],
    relatedIds: ["ai-eco", "turbo", "solar-eco"],
  },
  "ai-eco": {
    slug: "ai-eco-inverter",
    seoTitle: "Haier AI ECO Inverter",
    seoDescription:
      "The Haier AI ECO Inverter – white wall split, 9,000–24,000 BTU, AI ECO efficiency and the Hyper PCB for unstable supply. Supplied to the trade by A&S Wholesalers.",
    positioning: "The core inverter wall split.",
    overview:
      "AI ECO is the volume workhorse of the wall range – clean white styling for any room, with AI ECO learning to cut the running cost and the Hyper PCB built to ride out surges and unstable supply. The everyday split your customers ask for by the pallet.",
    applications: [
      "Bedrooms, lounges and home offices",
      "Shops, offices and consulting rooms",
      "Rental and turnkey residential fit-outs",
    ],
    tech: [
      { title: "AI ECO", body: "Machine-learning control collects operating data and applies energy-saving adjustments automatically." },
      { title: "Hyper PCB", body: "A conformal-coated board built to cope with voltage fluctuation, moisture, dust and insects." },
      { title: "UVC Plus (optional)", body: "Optional UVC sterilisation for customers who want the healthy-air upgrade." },
      { title: "Self-Clean", body: "Keeps the evaporator clean so the unit holds capacity over its life." },
    ],
    specs: [
      { label: "Cooling capacity", value: "2.7 – 6.7 kW" },
      { label: "Capacity (BTU)", value: "9,000 – 24,000" },
      { label: "Energy class", value: "A / A++" },
      { label: "Refrigerant", value: "R32" },
      { label: "Control", value: "Remote + WiFi app" },
      { label: "Model codes", value: "ES09RE32I – ES24RE32I" },
    ],
    relatedIds: ["aeropure", "turbo", "multi-odu"],
  },
  turbo: {
    slug: "turbo-cooling",
    seoTitle: "Haier Turbo Cooling",
    seoDescription:
      "Haier Turbo Cooling – the value wall split, 8,400–21,800 BTU, fast cooling and an anti-corrosion coil. Supplied to the trade by A&S Wholesalers, Centurion.",
    positioning: "The value wall split.",
    overview:
      "Turbo Cooling is the sharp price point in the range – quick cooling and an anti-corrosion coil that holds up in coastal and dusty conditions. The right unit for cost-sensitive customers without dropping to an unbranded product.",
    applications: [
      "Budget-conscious residential",
      "Coastal and high-dust locations",
      "Rooms that need fast cool-down",
    ],
    tech: [
      { title: "Turbo cooling", body: "Runs the motor at higher frequency in Turbo mode to cool a room quickly." },
      { title: "Anti-corrosion coil", body: "Golden-fin coating and blue-glaze U-bends protect the coil from salt, damp and chemicals." },
      { title: "WiFi ready", body: "App control available for customers who want it." },
      { title: "Easy to maintain", body: "Simplified disassembly cuts service time for your install/maintenance customers." },
    ],
    specs: [
      { label: "Cooling capacity", value: "2.5 – 6.4 kW" },
      { label: "Capacity (BTU)", value: "8,400 – 21,800" },
      { label: "Energy class", value: "A / A+" },
      { label: "Refrigerant", value: "R32" },
      { label: "Control", value: "Remote (WiFi ready)" },
      { label: "Model codes", value: "TS09QA32I – TS24QA32I" },
    ],
    relatedIds: ["aeropure", "ai-eco", "mini-cassette"],
  },
  "solar-eco": {
    slug: "solar-eco-inverter",
    seoTitle: "Haier Solar-ECO Inverter",
    seoDescription:
      "Haier Solar-ECO Inverter – DC solar-driven wall split (MC4), 18,000 BTU, solar-and-grid auto-balance and wide voltage. Supplied to the trade by A&S Wholesalers.",
    positioning: "Cooling that runs off the sun.",
    overview:
      "Solar-ECO is a genuine differentiator for your range. It plugs straight into PV panels via MC4 and balances solar with grid automatically – so it keeps cooling through load-shedding and shaves high tariffs. A strong story for solar installers and off-grid customers.",
    applications: [
      "Homes with solar PV already installed",
      "Off-grid and high-tariff sites",
      "Load-shedding-prone areas",
    ],
    tech: [
      { title: "DC solar direct-drive (MC4)", body: "Plugs into panels with an MC4 connector – no extra inverter or battery set needed to run in cooling mode." },
      { title: "Solar & grid auto-balance", body: "Runs on solar first and pulls from the grid only when needed, then blends the two automatically." },
      { title: "Wide voltage 150–264 V", body: "Holds stable operation across a wide voltage band for rural and unstable supply." },
      { title: "Self-Clean", body: "Keeps the evaporator clean for consistent output." },
    ],
    specs: [
      { label: "Cooling capacity", value: "5.35 kW" },
      { label: "Capacity (BTU)", value: "18,000" },
      { label: "Energy class", value: "A / A+" },
      { label: "Refrigerant", value: "R32" },
      { label: "Power", value: "DC solar (MC4) + grid" },
      { label: "Model code", value: "GS18FB32I" },
    ],
    relatedIds: ["aeropure", "ai-eco", "multi-odu"],
  },
  "multi-odu": {
    slug: "multi-odu-free-match",
    seoTitle: "Haier Multi ODU · Free Match",
    seoDescription:
      "Haier Multi ODU Free Match – one outdoor unit driving up to four indoor units of mixed type. Multi-split systems supplied to the trade by A&S Wholesalers, Centurion.",
    positioning: "One outdoor unit, several rooms.",
    overview:
      "The Free Match multi-split lets a customer run up to four indoor units – wall, cassette or ducted – off a single outdoor unit, each controlled independently. It solves the roof-clutter and wall-space problem on multi-room homes and apartments, and lets your installers mix indoor types on one job.",
    applications: [
      "Multi-room homes and apartments",
      "Sites with limited outdoor / roof space",
      "Jobs mixing wall, cassette and ducted indoors",
    ],
    tech: [
      { title: "Free Match", body: "One universal outdoor unit connects to a mix of high-wall, cassette, console and ducted indoor units." },
      { title: "Twin-rotary compressor", body: "Smooth, efficient operation across a 2-, 3- or 4-room outdoor unit." },
      { title: "Independent room control", body: "Each indoor unit is controlled on its own – rooms only run when they're used." },
    ],
    specs: [
      { label: "Outdoor capacity", value: "5.0 – 8.0 kW" },
      { label: "Indoor units", value: "Up to 4 (2 / 3 / 4-room)" },
      { label: "Energy class", value: "A+++ / A++" },
      { label: "Refrigerant", value: "R32" },
      { label: "Compressor", value: "Twin rotary" },
      { label: "Model codes", value: "2H50 / 3H60 / 4H80WEAFRA" },
    ],
    relatedIds: ["ai-eco", "lsp-duct", "mini-cassette"],
  },
  "lsp-duct": {
    slug: "lsp-duct",
    seoTitle: "Haier LSP Duct",
    seoDescription:
      "Haier LSP low-static ducted – the thinnest in its class at 180 mm, 8,500–24,000 BTU, for concealed residential installs. Supplied to the trade by A&S Wholesalers.",
    positioning: "The thinnest ducted in its class.",
    overview:
      "LSP is low-static ducted at just 180 mm deep – concealed cooling that fits ceiling voids a full ducted unit can't. Ideal for premium residential where the customer wants the units out of sight, with flexible air-in / air-out to suit the room layout.",
    applications: [
      "Concealed whole-home installs",
      "Tight ceiling voids and bulkheads",
      "Premium residential fit-outs",
    ],
    tech: [
      { title: "180 mm slim body", body: "The optimised pipe and air path drop the unit height so it fits shallow ceilings." },
      { title: "Flexible air in / out", body: "Rear or bottom intake with side discharge to suit different room layouts." },
      { title: "Quiet operation", body: "Low sound levels for bedrooms and living areas." },
    ],
    specs: [
      { label: "Cooling capacity", value: "2.5 – 7.1 kW" },
      { label: "Capacity (BTU)", value: "8,500 – 24,000" },
      { label: "Depth", value: "180 mm slim body" },
      { label: "Energy class", value: "A++" },
      { label: "Refrigerant", value: "R32" },
      { label: "Model codes", value: "HD25LBAHRA – HD71LDAHRA" },
    ],
    relatedIds: ["msp-duct", "multi-odu", "mini-cassette"],
  },
  "msp-duct": {
    slug: "msp-duct",
    seoTitle: "Haier MSP Duct",
    seoDescription:
      "Haier MSP medium-static ducted – 12,000–36,000 BTU, dual-fan air supply and built-in water pump for larger areas and longer duct runs. Supplied to the trade by A&S Wholesalers.",
    positioning: "Higher-capacity concealed ducted.",
    overview:
      "MSP is medium-static ducted for larger areas and longer duct runs – a dual-fan air supply and higher static pressure move air further, with a built-in water pump for flexible drainage. The ducted option for bigger residential and light-commercial jobs.",
    applications: [
      "Larger homes and open-plan areas",
      "Light-commercial concealed installs",
      "Longer duct runs and multiple outlets",
    ],
    tech: [
      { title: "Dual-fan air supply", body: "Two fans increase air volume and even distribution while cutting high-speed power draw." },
      { title: "Higher static pressure", body: "Pushes air through longer duct runs and more outlets than a low-static unit." },
      { title: "Built-in water pump", body: "Standard lift pump gives installers flexible condensate drainage." },
      { title: "Electricity management", body: "App-based usage tracking and targets – a useful running-cost story." },
    ],
    specs: [
      { label: "Cooling capacity", value: "3.5 – 10.5 kW" },
      { label: "Capacity (BTU)", value: "12,000 – 36,000" },
      { label: "Energy class", value: "A+++ / A++" },
      { label: "Refrigerant", value: "R32" },
      { label: "Drainage", value: "Built-in water pump" },
      { label: "Model codes", value: "HD35MDAHRA – HD105MFAHRA" },
    ],
    relatedIds: ["lsp-duct", "cassette", "multi-odu"],
  },
  "mini-cassette": {
    slug: "mini-cassette",
    seoTitle: "Haier Mini Cassette",
    seoDescription:
      "Haier Mini Cassette – compact 4-way ceiling cassette, 8,500–24,000 BTU, 56 °C Steri-Clean and independent louvres. Supplied to the trade by A&S Wholesalers, Centurion.",
    positioning: "Compact 4-way ceiling cassette.",
    overview:
      "The Mini Cassette drops into a standard ceiling tile and throws air in four directions – the compact commercial unit for smaller shops, offices and consulting rooms. Independent louvres and 56 °C Steri-Clean make it an easy sell into hygiene-conscious spaces.",
    applications: [
      "Smaller shops and offices",
      "Consulting and treatment rooms",
      "Reception and retail spaces",
    ],
    tech: [
      { title: "Compact 4-way airflow", body: "360° ceiling distribution from a compact chassis that suits a standard tile." },
      { title: "56 °C Steri-Clean", body: "Heats the evaporator to 56 °C to kill bacteria and viruses – strong for hygiene-sensitive rooms." },
      { title: "Independent louvres", body: "Each flap is driven separately for precise airflow and no direct draughts." },
      { title: "Built-in water pump", body: "Standard lift pump for flexible drainage during install." },
    ],
    specs: [
      { label: "Cooling capacity", value: "2.5 – 7.1 kW" },
      { label: "Capacity (BTU)", value: "8,500 – 24,000" },
      { label: "Airflow", value: "4-way, 360°" },
      { label: "Energy class", value: "A++" },
      { label: "Refrigerant", value: "R32" },
      { label: "Model codes", value: "HB25MBAHRA – HB71MBAHRA" },
    ],
    relatedIds: ["cassette", "msp-duct", "multi-odu"],
  },
  cassette: {
    slug: "cassette",
    seoTitle: "Haier Cassette",
    seoDescription:
      "Haier full-size ceiling cassette – 24,000–36,000 BTU, even 360° 4-way airflow and fresh-air intake for open commercial floors. Supplied to the trade by A&S Wholesalers.",
    positioning: "Full-size 360° for open floors.",
    overview:
      "The full-size cassette covers larger open floors – shops, offices and showrooms – with even 360° airflow and a fresh-air intake for indoor air quality. The commercial capacity end of the cassette range, from 24,000 to 36,000 BTU.",
    applications: [
      "Open-plan offices and boardrooms",
      "Shops, showrooms and restaurants",
      "Larger commercial floors",
    ],
    tech: [
      { title: "Even 360° airflow", body: "Four independently-driven flaps deliver a stable, draught-free spread across a large floor." },
      { title: "Fresh-air intake", body: "A fresh-air port brings in outside air to improve indoor air quality." },
      { title: "56 °C Steri-Clean", body: "High-temperature sterilisation keeps the evaporator and the air off it clean." },
    ],
    specs: [
      { label: "Cooling capacity", value: "7.1 – 10.5 kW" },
      { label: "Capacity (BTU)", value: "24,000 – 36,000" },
      { label: "Airflow", value: "4-way, 360°, fresh-air intake" },
      { label: "Energy class", value: "A++" },
      { label: "Refrigerant", value: "R32" },
      { label: "Model codes", value: "HB71CEAHRA / HB105CFAHRA" },
    ],
    relatedIds: ["mini-cassette", "msp-duct", "multi-odu"],
  },
};

/* ── Helpers ── */

export function detailFor(id: string): RangeDetail | undefined {
  return rangeDetail[id];
}

export function slugForFamily(id: string): string | undefined {
  return rangeDetail[id]?.slug;
}

export function familyBySlug(slug: string): ProductFamily | undefined {
  const id = Object.keys(rangeDetail).find((k) => rangeDetail[k].slug === slug);
  return id ? familyById(id) : undefined;
}

/** All ranges in catalogue order, each paired with its detail (never undefined). */
export function allRanges(): { family: ProductFamily; detail: RangeDetail }[] {
  return families
    .map((family) => ({ family, detail: rangeDetail[family.id] }))
    .filter((r): r is { family: ProductFamily; detail: RangeDetail } => Boolean(r.detail));
}

export function relatedFor(id: string): { family: ProductFamily; detail: RangeDetail }[] {
  const d = rangeDetail[id];
  if (!d) return [];
  return d.relatedIds
    .map((rid) => ({ family: familyById(rid)!, detail: rangeDetail[rid] }))
    .filter((r) => r.family && r.detail);
}

export function categoryForType(type: SolutionType): Category | undefined {
  return categories.find((c) => c.type === type);
}

export function familiesInCategory(c: Category): { family: ProductFamily; detail: RangeDetail }[] {
  return c.familyIds
    .map((id) => ({ family: familyById(id)!, detail: rangeDetail[id] }))
    .filter((r) => r.family && r.detail);
}

// Re-export for convenience in page components.
export { families, solutions, familyById, type ProductFamily, type SolutionType };
