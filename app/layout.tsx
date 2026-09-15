import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";
import { MotionProvider, NOSCRIPT_FALLBACK } from "@/engine/motion";
import { Header } from "@/components/funnel/header";
import { Footer } from "@/components/funnel/footer";
import { StickyMobileBar } from "@/components/funnel/sticky-mobile-bar";
import { buildMetadata } from "@/lib/metadata";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";
import { site } from "@/config/site";

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: "#0F1829",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.locale} className={fontVariables}>
      <head>
        <noscript>
          <style>{NOSCRIPT_FALLBACK}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only z-[60] rounded-lg bg-brand-ink px-4 py-2 text-sm font-medium text-brand-bone focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          {children}
          <Footer />
          <StickyMobileBar />
        </MotionProvider>
      </body>
    </html>
  );
}
