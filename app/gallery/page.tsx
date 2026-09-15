import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description: "A&S Wholesalers project gallery — coming soon.",
  path: "/gallery",
  noindex: true,
});

export default function GalleryPage() {
  return (
    <ComingSoon
      title="Projects & gallery"
      blurb="Installations and projects will be showcased here. Have a space in mind? Send us the details and we'll get you the right Haier unit."
    />
  );
}
