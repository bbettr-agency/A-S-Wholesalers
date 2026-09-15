import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description:
    "Residential and commercial Haier air conditioning solutions from A&S Wholesalers, Centurion. Full page coming soon.",
  path: "/services",
  noindex: true,
});

export default function ServicesPage() {
  return (
    <ComingSoon
      title="Solutions for home & business"
      blurb="From a single bedroom split to a commercial cassette floor — this page will lay out how we match the right Haier unit to your space. For now, send us the details and we'll help."
    />
  );
}
