import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Haier air conditioning range",
  description:
    "The full Haier air conditioning catalogue – wall-mounted, multi-split, ducted, cassette and solar. Full product pages coming soon.",
  path: "/products",
  noindex: true,
});

export default function ProductsPage() {
  return (
    <ComingSoon
      title="The full Haier range"
      blurb="We're building out the complete catalogue – every family, model code, capacity and datasheet. In the meantime, start a trade enquiry and we'll talk you through the range."
    />
  );
}
