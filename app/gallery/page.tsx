import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description: "A&S Wholesalers project gallery – coming soon.",
  path: "/gallery",
  noindex: true,
});

export default function GalleryPage() {
  return (
    <ComingSoon
      title="Projects & gallery"
      blurb="Installations and projects will be showcased here. Stocking Haier and want to see it in the field? Start a trade enquiry and we'll help."
    />
  );
}
