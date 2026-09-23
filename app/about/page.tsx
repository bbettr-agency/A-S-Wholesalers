import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "About A&S Wholesalers – a Haier air conditioning supply house in Centurion, Gauteng. Full page coming soon.",
  path: "/about",
  noindex: true,
});

export default function AboutPage() {
  return (
    <ComingSoon
      title="About A&S Wholesalers"
      blurb="Our full story is on the way. In short: we supply the complete Haier air conditioning range – residential and commercial – from our branch in Centurion, Gauteng."
    />
  );
}
