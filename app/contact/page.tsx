import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/coming-soon";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact A&S Wholesalers — Haier air conditioning, Centurion, Gauteng. Call 012 323 2101, WhatsApp 065 815 1032, or send an enquiry.",
  path: "/contact",
  noindex: true,
});

export default function ContactPage() {
  return (
    <ComingSoon
      title="Contact A&S Wholesalers"
      blurb="A dedicated contact page is on the way. Right now, the fastest way to reach us is to send an enquiry, message us on WhatsApp, or call the branch during business hours."
    />
  );
}
