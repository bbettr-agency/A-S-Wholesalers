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
  titleDefault: "Haier Air Conditioning Supplier | A&S Wholesalers",
  titleTemplate: "%s | A&S Wholesalers",
  description:
    "A&S Wholesalers supplies the full Haier air conditioning range – residential and commercial – from Centurion, Gauteng. Enquire online, WhatsApp or call.",
  keywords: [
    "Haier air conditioning South Africa",
    "Haier air conditioners",
    "Haier aircon supplier",
    "air conditioning supplier Centurion",
    "aircon supplier Pretoria",
    "air conditioning wholesaler",
    "inverter air conditioner",
    "ducted air conditioning",
    "cassette air conditioner",
    "multi split air conditioner",
    "solar air conditioner",
    "commercial air conditioning",
    "residential air conditioning",
  ],
  // Home page primary cluster (for reference / future keyword map).
  homeCluster: {
    primary: "Haier air conditioning supplier",
    supporting: [
      "Haier aircon South Africa",
      "air conditioning supplier Centurion",
      "aircon Pretoria",
      "residential and commercial air conditioning",
    ],
    intent: "transactional / commercial-investigation",
  },
  og: {
    type: "website" as const,
    siteName: site.name,
  },
} as const;
