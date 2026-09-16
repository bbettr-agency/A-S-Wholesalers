/**
 * Type system — Poppins as the single primary typeface across the entire site.
 *
 * One family, intentional weights for hierarchy:
 *   400 body / supporting copy
 *   500 navigation, labels, metadata, product specs
 *   600 buttons, product titles, subheadings
 *   700 major headings
 *   800 hero
 *
 * The "technical / product-catalogue" feel (eyebrows, model codes, data labels)
 * is achieved with Poppins Medium/Semibold, uppercase and deliberate tracking —
 * NOT a second monospace face. Self-hosted via next/font, display: swap.
 */
import { Poppins } from "next/font/google";

export const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const fontVariables = fontPoppins.variable;
