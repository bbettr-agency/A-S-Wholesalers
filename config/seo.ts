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
  titleDefault: "Haier Air Conditioning Wholesaler | A&S Wholesalers",
  titleTemplate: "%s | A&S Wholesalers",
  description:
    "A&S Wholesalers distributes the full Haier air-conditioning range from Centurion, Gauteng – for retailers, resellers and trade partners looking to stock Haier.",
  keywords: [
    // Commercial / trade intent (primary under the wholesale positioning)
    "Haier air conditioning wholesaler",
    "Haier air conditioning supplier",
    "Haier aircon distributor",
    "air conditioning wholesaler",
    "aircon wholesaler",
    "HVAC wholesaler",
    "air conditioning distributor South Africa",
    "wholesale air conditioners",
    "trade air conditioning supplier",
    "air conditioning supplier for installers",
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
