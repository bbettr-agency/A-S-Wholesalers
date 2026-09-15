/**
 * Type system — two primary faces + one data-only accent.
 *
 * Display: Schibsted Grotesk — precise, contemporary grotesque (deliberately not
 *          the Inter / Space Grotesk "AI-website" tell).
 * Body:    IBM Plex Sans — genuine engineering heritage, tabular figures, excellent
 *          at small sizes; carries the argument.
 * Mono:    IBM Plex Mono — DELIBERATE data-only accent for the datasheet motif
 *          (model codes, BTU / kW / mm). Documented deviation in PROJECT_STATUS.md;
 *          it appears only in micro data labels, never in reading copy.
 *
 * Weights held to three sitewide: 400 (body), 500 (emphasis / labels / mono),
 * 700 (display headings). Self-hosted via next/font, display: swap.
 */
import { Schibsted_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

export const fontDisplay = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

export const fontBody = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

export const fontVariables = `${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`;
