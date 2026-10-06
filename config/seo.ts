/**
 * SEO configuration – titles, descriptions and the keyword map that shaped the
 * copy. Keywords are documented for architecture, not stuffed into visible copy.
 *
 * Home targets the transactional / commercial-investigation cluster for a Haier
 * air conditioning supplier in Gauteng. Future /products/{type} and /areas pages
 * will capture the long-tail (planned, not built in this demo).
 */
import { site } from "./site";

export const seo = {
  titleDefault: "Authorised Haier Air Conditioning Distributor | A&S Wholesalers",
  titleTemplate: "%s | A&S Wholesalers",
  description:
    "A&S Wholesalers is an authorised distributor of Haier air conditioning, supplying the full range from Centurion, Gauteng to independent retailers and resellers – with nationwide delivery, spares and after-sales support.",
  keywords: [
    // Commercial / trade intent (primary under the wholesale positioning)
    "Haier authorised distributor South Africa",
    "Haier air conditioning distributor",
    "Haier air conditioning wholesaler",
    "Haier wholesaler South Africa",
    "Haier air conditioning supplier",
    "Haier aircon distributor",
    "air conditioning wholesaler",
    "aircon wholesaler",
    "HVAC wholesaler",
    "air conditioning distributor South Africa",
    "wholesale air conditioners",
    "trade air conditioning supplier",
    "air conditioning supplier for resellers",
    "Haier air conditioning Centurion",
    // Product / category discovery (organic reach)
    "Haier wall mounted air conditioners",
    "Haier ducted air conditioning",
    "Haier cassette air conditioning",
    "Haier multi split systems",
    "Haier solar air conditioning",
    "Haier inverter air conditioner",
  ],
  // Home page primary cluster (for reference / future keyword map).
  homeCluster: {
    primary: "Haier air conditioning wholesaler",
    supporting: [
      "air conditioning distributor",
      "aircon wholesaler / HVAC supplier",
      "trade air conditioning supplier Centurion",
      "stock Haier air conditioning",
    ],
    intent: "wholesale / trade / commercial-investigation",
  },
  og: {
    type: "website" as const,
    siteName: site.name,
  },
} as const;
