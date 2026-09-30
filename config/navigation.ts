/**
 * Navigation – real production routes (Phase 2). The "Haier Range" item opens a
 * mega-menu built from the catalogue data (categories → individual range pages).
 */
import { categories, rangeDetail } from "./catalogue";
import { familyById } from "./products";

export interface NavItem {
  label: string;
  href: string;
  /** Opens the Haier Range mega-menu instead of navigating directly. */
  mega?: boolean;
}

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Haier Range", href: "/haier-range", mega: true },
  { label: "Trade Supply", href: "/trade-supply" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Mega-menu columns: one per category, listing its individual range pages. */
export const rangeMega = categories.map((c) => ({
  label: c.title,
  categoryHref: `/haier-range#${c.slug}`,
  ranges: c.familyIds
    .map((id) => {
      const f = familyById(id);
      const d = rangeDetail[id];
      return f && d ? { name: f.name, href: `/haier-range/${d.slug}` } : null;
    })
    .filter((x): x is { name: string; href: string } => x !== null),
}));

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Haier range",
    items: [
      { label: "Wall-mounted", href: "/haier-range#wall-mounted" },
      { label: "Solar", href: "/haier-range#solar" },
      { label: "Multi-split", href: "/haier-range#multi-split" },
      { label: "Ducted", href: "/haier-range#ducted" },
      { label: "Cassette", href: "/haier-range#cassette" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "Trade supply", href: "/trade-supply" },
      { label: "About A&S", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
