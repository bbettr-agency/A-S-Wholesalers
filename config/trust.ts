/**
 * Trust configuration.
 *
 * TWO STRICTLY SEPARATED SETS:
 *  1. haierCredentials — belong to HAIER (the manufacturer). Verifiable, from the
 *     supplied 2026 catalogue. Always rendered with explicit Haier attribution.
 *  2. supplierPoints — what A&S offers as the supplier. Stated factually. NO
 *     invented stats: no founding year, install counts, testimonials, ratings, or
 *     "authorised/official distributor" wording (none are verified).
 *
 * Supplier credentials are never transferred onto A&S (OS truth standard).
 */

export interface Credential {
  value: string;
  label: string;
  source?: string;
}

/** Haier's own standing — the "why this product range" evidence. Attributed to Haier. */
export const haierCredentials: Credential[] = [
  {
    value: "No. 1",
    label: "world's major appliances brand — 16 years running",
    source: "Euromonitor International, 2008–2024",
  },
  {
    value: "Fortune 500",
    label: "Haier Smart Home, Global 500 company",
    source: "Fortune Global 500, 2024",
  },
  {
    value: "51",
    label: "global certifications across 220+ R&D laboratories",
    source: "Haier Air Conditioning",
  },
];

/** What A&S offers, stated as fact — the supplier value, distinct from Haier. */
export const supplierPoints = [
  {
    title: "The full Haier range, one supplier",
    body: "Wall-mounted, multi-split, ducted, cassette and solar — residential through to commercial — from a single point of contact.",
  },
  {
    title: "Based in Centurion, Gauteng",
    body: "Stocked and supplied from Icon Industrial Park in Sunderland Ridge, Centurion.",
  },
  {
    title: "The right unit for the space",
    body: "Send us the room or the site and we'll point you to the model and capacity that fits — before you buy.",
  },
] as const;

/** Compact capability strip used in-hero (all factual, no numbers invented). */
export const heroProof: { label: string }[] = [
  { label: "The complete Haier range" },
  { label: "Residential & commercial" },
  { label: "Supplied from Centurion" },
];
