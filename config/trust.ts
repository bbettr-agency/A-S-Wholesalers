/**
 * Trust configuration.
 *
 * TWO STRICTLY SEPARATED SETS:
 *  1. haierCredentials – belong to HAIER (the manufacturer). Verifiable, from the
 *     supplied 2026 catalogue. Always rendered with explicit Haier attribution.
 *  2. supplierPoints – what A&S offers as the supplier. Stated factually. A&S IS
 *     an authorised Haier distributor (certificate-backed, 2026-10), so that is
 *     stated. Still NO invented stats: no founding year, install counts,
 *     testimonials, ratings, or "exclusive/official" wording.
 *
 * Haier's own credentials are never transferred onto A&S (OS truth standard).
 */

export interface Credential {
  value: string;
  label: string;
  source?: string;
}

/** Haier's own standing – the "why this product range" evidence. Attributed to Haier. */
export const haierCredentials: Credential[] = [
  {
    value: "No. 1",
    label: "world's major appliances brand – 16 years running",
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

/** What A&S offers the trade, stated as fact – distinct from Haier. All owner-
 *  confirmed (2026-10); authorised status is certificate-backed. */
export const supplierPoints = [
  {
    title: "Authorised Haier distributor",
    body: "An authorised distributor of Haier Air Conditioners – the full range, supplied to the trade through the proper channel.",
  },
  {
    title: "Nationwide delivery",
    body: "Source the whole Haier range from one Centurion wholesaler and have it delivered across South Africa, arranged to suit your order.",
  },
  {
    title: "Backed after the sale",
    body: "Genuine Haier spare parts, after-sales support and the manufacturer warranty behind every unit you supply on.",
  },
] as const;

/** Compact proof strip used in-hero (all factual, certificate-backed). */
export const heroProof: { label: string }[] = [
  { label: "Authorised Haier distributor" },
  { label: "For retailers & resellers" },
  { label: "Nationwide delivery" },
];
