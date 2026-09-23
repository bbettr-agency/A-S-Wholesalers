import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description:
    "Residential and commercial Haier air-conditioning ranges from A&S Wholesalers, Centurion – for trade partners stocking Haier. Full page coming soon.",
  path: "/services",
  noindex: true,
});

export default function ServicesPage() {
  return (
    <ComingSoon
      title="Solutions for home & business"
      blurb="From wall splits to commercial cassettes – this page will lay out the Haier ranges you can source through A&S for your customers. For now, start a trade enquiry and we'll help."
    />
  );
}
