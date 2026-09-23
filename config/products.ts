/**
 * Product catalogue – the Haier 2026 South Africa air conditioning range that A&S
 * supplies. Data taken from the supplied Haier catalogue (model codes, capacities,
 * energy classes, features). Homepage shows FAMILIES grouped by installation type;
 * the full per-SKU catalogue is a future /products build.
 *
 * All product facts belong to Haier's published specification. A&S adds no claims.
 */

export type SolutionType = "wall" | "multi" | "ducted" | "cassette" | "solar";

export interface Solution {
  type: SolutionType;
  label: string;
  /** One-line "who it's for" – drives the discovery selector. */
  summary: string;
  /** The visitor-facing question this answers. */
  forWho: string;
  familyIds: string[];
}

export interface ProductFamily {
  id: string;
  name: string;
  /** Haier's own range positioning line. */
  line: string;
  solution: SolutionType;
  audience: ("residential" | "commercial")[];
  /** Capacity range as it appears on the datasheet. */
  capacity: string;
  btu: string;
  /** Representative model codes (datasheet). */
  models: string[];
  energyClass: string;
  refrigerant: "R32";
  /** A&S-written, factual feature highlights (reinterpreted from the catalogue). */
  highlights: string[];
  image: string;
  imageAlt: string;
  /** Short original blurb. */
  blurb: string;
}

/** The five ways to install – the homepage self-selection mechanic. */
export const solutions: Solution[] = [
  {
    type: "wall",
    label: "Wall-mounted split",
    summary: "The everyday split for a room, office or shop.",
    forWho: "Homes, offices and single rooms",
    familyIds: ["aeropure", "ai-eco", "turbo"],
  },
  {
    type: "multi",
    label: "Multi-split",
    summary: "One outdoor unit running several indoor units.",
    forWho: "Multi-room homes and apartments",
    familyIds: ["multi-odu"],
  },
  {
    type: "ducted",
    label: "Ducted",
    summary: "Concealed in the ceiling, air delivered through ducting.",
    forWho: "Whole-home and commercial fit-outs",
    familyIds: ["lsp-duct", "msp-duct"],
  },
  {
    type: "cassette",
    label: "Cassette",
    summary: "Ceiling-recessed, 360° airflow for open floors.",
    forWho: "Shops, offices and open commercial spaces",
    familyIds: ["mini-cassette", "cassette"],
  },
  {
    type: "solar",
    label: "Solar",
    summary: "DC solar-driven cooling that runs off panels.",
    forWho: "Off-grid and high-tariff sites",
    familyIds: ["solar-eco"],
  },
];

export const families: ProductFamily[] = [
  {
    id: "aeropure",
    name: "Aeropure Inverter",
    line: "ECO Expert, Healthy Air",
    solution: "wall",
    audience: ["residential", "commercial"],
    capacity: "2.7 – 6.7 kW",
    btu: "9,000 – 24,000 BTU",
    models: ["ES09QF32I", "ES12QF32I", "ES18QF32I", "ES24QF32I"],
    energyClass: "A / A++",
    refrigerant: "R32",
    highlights: ["Black-glass panel", "UVC Plus option", "Self-Clean", "AI ECO", "WiFi control"],
    image: "/images/products/haier-aeropure.jpg",
    imageAlt:
      "Haier Aeropure Inverter – black-glass wall-mounted indoor unit, outdoor condenser and remote controllers",
    blurb:
      "The flagship wall split. A black-glass indoor unit with UVC Plus sterilisation, Self-Clean and full inverter efficiency.",
  },
  {
    id: "ai-eco",
    name: "AI ECO Inverter",
    line: "ECO Expert, Healthy Air",
    solution: "wall",
    audience: ["residential", "commercial"],
    capacity: "2.7 – 6.7 kW",
    btu: "9,000 – 24,000 BTU",
    models: ["ES09RE32I", "ES12RE32I", "ES18RE32I", "ES24RE32I"],
    energyClass: "A / A++",
    refrigerant: "R32",
    highlights: ["AI ECO learning", "Hyper PCB", "Free Match indoor", "UVC Plus option"],
    image: "/images/products/haier-ai-eco.jpg",
    imageAlt:
      "Haier AI ECO Inverter – white wall-mounted indoor unit with outdoor condenser unit",
    blurb:
      "The core inverter split. AI ECO learns usage to trim running cost, with the Hyper PCB built for unstable supply.",
  },
  {
    id: "turbo",
    name: "Turbo Cooling",
    line: "Fast cooling, built to last",
    solution: "wall",
    audience: ["residential", "commercial"],
    capacity: "2.5 – 6.4 kW",
    btu: "8,400 – 21,800 BTU",
    models: ["TS09QA32I", "TS12QA32I", "TS18QA32I", "TS24QA32I"],
    energyClass: "A / A+",
    refrigerant: "R32",
    highlights: ["Fast cooling", "Anti-Corrosion coil", "Easy to maintain", "WiFi ready"],
    image: "/images/products/haier-turbo.jpg",
    imageAlt: "Haier Turbo Cooling – white wall-mounted split with outdoor condenser unit",
    blurb:
      "The value wall split. Quick cooling and an anti-corrosion coil for coastal and dusty conditions.",
  },
  {
    id: "solar-eco",
    name: "Solar-ECO Inverter",
    line: "Runs on the sun",
    solution: "solar",
    audience: ["residential", "commercial"],
    capacity: "5.35 kW",
    btu: "18,000 BTU",
    models: ["GS18FB32I"],
    energyClass: "A / A+",
    refrigerant: "R32",
    highlights: ["DC solar direct-drive (MC4)", "Solar & grid auto-balance", "Wide voltage 150–264 V", "Self-Clean"],
    image: "/images/products/haier-solar-eco.jpg",
    imageAlt: "Haier Solar-ECO Inverter – white wall-mounted split powered by DC solar panels",
    blurb:
      "Plugs straight into solar panels via MC4 and balances between solar and grid automatically – cooling through load-shedding and high tariffs.",
  },
  {
    id: "multi-odu",
    name: "Multi ODU · Free Match",
    line: "One outdoor unit, designed for all",
    solution: "multi",
    audience: ["residential", "commercial"],
    capacity: "5.0 – 8.0 kW outdoor",
    btu: "2, 3 & 4-room outdoor units",
    models: ["2H50WEAFRA", "3H60WEAFRA", "4H80WEAFRA"],
    energyClass: "A+++ / A++",
    refrigerant: "R32",
    highlights: ["Up to 4 indoor units", "Twin-rotary compressor", "Mix indoor types", "Independent room control"],
    image: "/images/products/haier-multi-odu.jpg",
    imageAlt: "Haier Multi ODU Free Match – single outdoor condenser unit that drives multiple indoor units",
    blurb:
      "One outdoor unit runs up to four indoor units – wall, cassette or ducted – each controlled independently. Fewer outdoor units, less roof clutter.",
  },
  {
    id: "lsp-duct",
    name: "LSP Duct",
    line: "The thinnest in its class",
    solution: "ducted",
    audience: ["residential", "commercial"],
    capacity: "2.5 – 7.1 kW",
    btu: "8,500 – 24,000 BTU",
    models: ["HD25LBAHRA", "HD35LBAHRA", "HD50LDAHRA", "HD71LDAHRA"],
    energyClass: "A++",
    refrigerant: "R32",
    highlights: ["180 mm slim body", "Fits tight ceilings", "Flexible air in/out", "Quiet operation"],
    image: "/images/products/haier-lsp-duct.jpg",
    imageAlt: "Haier LSP low-static ducted indoor unit with wired controller and outdoor condenser",
    blurb:
      "Low-static ducted at just 180 mm deep – concealed cooling that fits where a full ducted unit won't.",
  },
  {
    id: "msp-duct",
    name: "MSP Duct",
    line: "Higher capacity, concealed",
    solution: "ducted",
    audience: ["commercial", "residential"],
    capacity: "3.5 – 10.5 kW",
    btu: "12,000 – 36,000 BTU",
    models: ["HD35MDAHRA", "HD50MDAHRA", "HD71MFAHRA", "HD105MFAHRA"],
    energyClass: "A+++ / A++",
    refrigerant: "R32",
    highlights: ["Dual-fan air supply", "Built-in water pump", "Higher static pressure", "Electricity management"],
    image: "/images/products/haier-msp-duct.jpg",
    imageAlt: "Haier MSP medium-static ducted indoor unit with wired controller and outdoor condenser",
    blurb:
      "Medium-static ducted for larger areas – a dual-fan supply and higher static pressure for longer duct runs.",
  },
  {
    id: "mini-cassette",
    name: "Mini Cassette",
    line: "Compact ceiling cooling",
    solution: "cassette",
    audience: ["commercial", "residential"],
    capacity: "2.5 – 7.1 kW",
    btu: "8,500 – 24,000 BTU",
    models: ["HB25MBAHRA", "HB35MBAHRA", "HB50MBAHRA", "HB71MBAHRA"],
    energyClass: "A++",
    refrigerant: "R32",
    highlights: ["Compact 4-way", "56 °C Steri-Clean", "Independent louvres", "Built-in water pump"],
    image: "/images/products/haier-mini-cassette.jpg",
    imageAlt: "Haier Mini Cassette – compact ceiling-recessed indoor unit with remote and outdoor condenser",
    blurb:
      "A compact ceiling cassette that drops into a standard tile – 360° airflow with independently controlled louvres.",
  },
  {
    id: "cassette",
    name: "Cassette",
    line: "360° for open floors",
    solution: "cassette",
    audience: ["commercial"],
    capacity: "7.1 – 10.5 kW",
    btu: "24,000 – 36,000 BTU",
    models: ["HB71CEAHRA", "HB105CFAHRA"],
    energyClass: "A++",
    refrigerant: "R32",
    highlights: ["Full-size 4-way", "Even 360° airflow", "56 °C Steri-Clean", "Fresh-air intake"],
    image: "/images/products/haier-cassette.jpg",
    imageAlt: "Haier Cassette – full-size ceiling-recessed indoor unit with remote and outdoor condenser",
    blurb:
      "The full-size cassette for shops, offices and open commercial floors – even 360° airflow across a large area.",
  },
];

/**
 * System stages – the immersive "Airflow Gallery". Five air-conditioning SYSTEM
 * TYPES (not nine cards), each grouping its real catalogue families. `airflow`
 * selects the product-specific airflow visualisation. All facts are Haier's.
 */
export type AirflowKind = "wall" | "solar" | "multi" | "ducted" | "cassette";

export interface SystemStage {
  n: string;
  key: AirflowKind;
  type: string;
  solutionType: SolutionType;
  families: string[];
  statement: string;
  capacity: string;
  btu: string;
  attributes: string[];
  image: string;
  imageAlt: string;
}

export const systemStages: SystemStage[] = [
  {
    n: "01",
    key: "wall",
    type: "Wall-mounted",
    solutionType: "wall",
    families: ["Aeropure Inverter", "AI ECO Inverter", "Turbo Cooling"],
    statement: "The everyday split – a bedroom, an office, a shop floor.",
    capacity: "2.5 – 6.7 kW",
    btu: "9,000 – 24,000 BTU",
    attributes: [
      "DC full-inverter, up to A++",
      "UVC Plus + Self-Clean air",
      "Anti-corrosion coil",
      "WiFi + AI ECO control",
    ],
    image: "/images/products/haier-aeropure.jpg",
    imageAlt: "Haier Aeropure wall-mounted split – the wall-mounted system type",
  },
  {
    n: "02",
    key: "solar",
    type: "Solar",
    solutionType: "solar",
    families: ["Solar-ECO Inverter"],
    statement: "Cooling that runs off the sun – straight through load-shedding.",
    capacity: "5.35 kW",
    btu: "18,000 BTU",
    attributes: [
      "DC solar direct-drive (MC4)",
      "Solar & grid auto-balance",
      "Wide voltage 150 – 264 V",
      "Self-Clean evaporator",
    ],
    image: "/images/products/haier-solar-eco.jpg",
    imageAlt: "Haier Solar-ECO split – the solar-powered system type",
  },
  {
    n: "03",
    key: "multi",
    type: "Multi-split",
    solutionType: "multi",
    families: ["Multi ODU · Free Match"],
    statement: "One outdoor unit. Several rooms, each controlled on its own.",
    capacity: "5.0 – 8.0 kW",
    btu: "2, 3 & 4-room outdoor units",
    attributes: [
      "Up to 4 indoor units",
      "Mix wall, cassette & ducted",
      "Twin-rotary compressor",
      "Independent room control",
    ],
    image: "/images/products/haier-multi-odu.jpg",
    imageAlt: "Haier Multi ODU Free Match outdoor unit – the multi-split system type",
  },
  {
    n: "04",
    key: "ducted",
    type: "Ducted",
    solutionType: "ducted",
    families: ["LSP Duct", "MSP Duct"],
    statement: "Concealed in the ceiling – climate you feel, not see.",
    capacity: "2.5 – 10.5 kW",
    btu: "8,500 – 36,000 BTU",
    attributes: [
      "Slim 180 mm body (LSP)",
      "Higher static pressure (MSP)",
      "Dual-fan air supply",
      "Built-in water pump",
    ],
    image: "/images/products/haier-lsp-duct.jpg",
    imageAlt: "Haier LSP ducted indoor unit – the ducted system type",
  },
  {
    n: "05",
    key: "cassette",
    type: "Cassette",
    solutionType: "cassette",
    families: ["Mini Cassette", "Cassette"],
    statement: "Ceiling-recessed – even 360° airflow across an open floor.",
    capacity: "2.5 – 10.5 kW",
    btu: "8,500 – 36,000 BTU",
    attributes: [
      "360° 4-way airflow",
      "56 °C Steri-Clean",
      "Independent louvres",
      "Fresh-air intake",
    ],
    image: "/images/products/haier-cassette.jpg",
    imageAlt: "Haier ceiling cassette – the cassette system type",
  },
];

export function familyById(id: string): ProductFamily | undefined {
  return families.find((f) => f.id === id);
}

export function familiesFor(type: SolutionType): ProductFamily[] {
  const s = solutions.find((x) => x.type === type);
  if (!s) return [];
  return s.familyIds.map(familyById).filter(Boolean) as ProductFamily[];
}
