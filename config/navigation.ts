/**
 * Navigation configuration.
 *
 * This is a HOMEPAGE-ONLY demo. Nav items point to real placeholder routes
 * (/products, /about, …) that exist as honest "in progress" pages — they are NOT
 * on-page anchors and they do NOT fake complete pages. Home is "/". The structure
 * anticipates the production pages built after client approval.
 *
 * `status: "soon"` marks routes not yet built (rendered with a subtle marker and
 * excluded from the sitemap / set to noindex on their own page).
 */

export interface NavItem {
  label: string;
  href: string;
  status: "live" | "soon";
}

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/", status: "live" },
  { label: "Products", href: "/products", status: "soon" },
  { label: "Solutions", href: "/services", status: "soon" },
  { label: "About", href: "/about", status: "soon" },
  { label: "Gallery", href: "/gallery", status: "soon" },
  { label: "Contact", href: "/contact", status: "soon" },
];

/** In-page anchors used by the homepage itself (buttons, not nav). */
export const homeAnchors = {
  range: "#range",
  products: "#products",
  enquire: "#enquire",
  location: "#location",
} as const;

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Explore",
    items: [
      { label: "The Haier range", href: "/products", status: "soon" },
      { label: "Solutions", href: "/services", status: "soon" },
      { label: "About A&S", href: "/about", status: "soon" },
      { label: "Gallery", href: "/gallery", status: "soon" },
    ],
  },
  {
    heading: "Get in touch",
    items: [
      { label: "Send an enquiry", href: "/#enquire", status: "live" },
      { label: "Contact", href: "/contact", status: "soon" },
    ],
  },
];
