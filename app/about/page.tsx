import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "About A&S Wholesalers – the wholesale distributor of Haier air conditioning in Centurion, Gauteng. Full page coming soon.",
  path: "/about",
  noindex: true,
});

export default function AboutPage() {
  return (
    <ComingSoon
      title="About A&S Wholesalers"
      blurb="Our full story is on the way. In short: A&S is the wholesale distributor of the complete Haier air-conditioning range from our branch in Centurion, Gauteng, working with retailers, resellers and installers who stock and supply Haier."
    />
  );
}
