# PROJECT STATUS — A&S Wholesalers

**Built on:** Bbettr Website OS v2.7.0
**Phase:** 1 — Homepage demo (for client approval)
**Status:** Built + polished, verified, deployed. Awaiting client sign-off before building remaining pages.

## Polish pass (2026-09-16)

- **Typography → Poppins everywhere.** Single primary typeface via `next/font`
  (weights 400/500/600/700/800). No secondary/monospace face — the technical
  "datasheet" feel is Poppins Medium/Semibold, uppercase, tracked. Hero at 800.
- **Signature section — the Airflow Gallery** replaces the old product-card grid.
  Desktop: a scroll-pinned stage cycling the five SYSTEM TYPES (Wall / Solar /
  Multi-split / Ducted / Cassette), each with a product-specific SVG airflow
  visual (Coanda, solar energy, one→many, ceiling descent, 360° radial), crossfade
  transitions, and a clickable stepper. Mobile / no-JS / reduced-data: stacked
  editorial stages (never nine cards). A restrained full-catalogue index (all nine
  families) sits underneath for utility. All airflow is CSS/SVG, compositor-only,
  gated by `prefers-reduced-motion`; no animation library added.
- **Claim correction.** "supplied across South Africa" (national reach NOT
  confirmed) → "supplied from Centurion" across hero, site config, SEO, OG image
  and schema `areaServed` (now Gauteng, not Country). Centurion is confirmed.
- **De-AI refinements.** Removed the boxed-icon "feature block" pattern in
  Why-Haier (now hairline-topped editorial), replaced generic pills in
  Residential/Commercial with a ticked inline list, and broke the uniform card
  rhythm by replacing the product grid with the airflow experience.
- Old `components/sections/product-families.tsx` removed.

---

## What this is

A production-quality **homepage-only** demo for A&S Wholesalers — a Haier air
conditioning supply house in Centurion, Gauteng. The approved homepage becomes the
design foundation for the full site (Products, About, Solutions, Gallery, Contact).

## Visual Direction Brief (Design Language §13)

- **Density mode:** Substantive, executed on a predominantly **light** field.
  A&S is a wholesale/range business — credibility comes from visible range and
  specification, balanced by strong product presentation and whitespace.
- **Motion character:** `precise` (0.45 section / 0.4 card / 0.6 hero, stagger 0.05).
  Engineered/technical, fits HVAC + the datasheet concept.
- **Typefaces:** **Poppins** only (client-directed) — one primary face across the
  whole site, weights 400/500/600/700/800. Hierarchy from weight, size and
  tracking; the datasheet/technical feel is Poppins Medium/Semibold uppercase +
  letter-spacing, not a second face.
- **Colour:** primary A&S navy `#1B2A4A` · accent A&S signal-red `#C1121F`
  (**primary CTA only**) · WhatsApp green `#25D366` · cool-tinted ink scale ·
  light surfaces bone/mist. All contrast pairs measured (see below).
- **Radius family:** buttons `rounded-lg` · cards `rounded-xl/2xl` · panels `rounded-3xl`.
- **Surface rhythm:** bone → mist → bone → mist(+dark inset) → bone → mist → bone →
  mist → **ink (final CTA — the one dark spotlight)**. No two adjacent content
  sections share a tone.
- **Dark spotlight(s):** the final Enquiry section (primary), plus a controlled dark
  inset inside Why-Haier for Haier's credentials.
- **Photography:** real Haier product renders extracted from the supplied catalogue
  + one real Haier lifestyle photo. No stock. **No commercial-premises photo exists**
  — the commercial card uses the cassette render, not a fake interior. A real A&S
  shoot (premises, team, installs) is a flagged follow-up.

## Hero Brief (Hero System §4)

- **Blocking Question:** "Is A&S a real, credible SA supplier who stocks the full
  Haier range for my job — home or commercial — and how do I reach them?"
- **Archetype:** C (Capability), executed light. Category-clear H1 + capability
  proof + the flagship product render as evidence.
- **LCP element:** the H1 (unanimated, `heroStack().lcp`). Hero product image carries
  `priority`.
- **CTA:** primary "Send an enquiry" (accent) · secondary "See the range".

## Contrast (measured, WCAG)

All body/heading/label pairs pass ≥4.5:1; large/UI pairs ≥3:1. WhatsApp buttons use
dark ink labels on green (7.6:1) — white-on-green (1.98:1) is never used.

## Truth discipline

- No invented A&S facts: no founding year, install counts, testimonials, ratings,
  awards, or "authorised/official distributor" wording (none verified).
- Haier's credentials (No.1 Euromonitor 16 yrs, Fortune 500, 51 certifications) are
  rendered **only** in a section explicitly headed "Haier — the manufacturer behind
  the range", with sources. Never transferred to A&S.
- Real NAP only in schema (LocalBusiness/HVACBusiness + Organization). No
  AggregateRating.

## Gate results (Phase-1 demo scope)

**Gate 3 — build/verify:**
- [x] `npm run build` passes · `tsc --noEmit` clean · `next lint` clean
- [x] Home: unique title (<60), meta description (<155), one H1, semantic H2/H3
- [x] Canonical on every page · `sitemap.ts` (home only) · `robots.ts`
- [x] OG/Twitter metadata + real OG image (`app/opengraph-image.tsx`)
- [x] JSON-LD (Organization + HVACBusiness) with real NAP
- [x] Placeholder routes (`/products` `/about` `/services` `/gallery` `/contact`)
      are honest, `noindex`, excluded from sitemap — no broken nav links, no faked pages
- [x] Motion: `MotionProvider` mounted, `<noscript>` fallback in `<head>`, LCP
      unanimated, all motion via ENGINE presets, `motion` the only anim dep
- [x] Reduced motion enforced structurally by `MotionProvider` (reducedMotion="user")
- [x] Sticky mobile CTA bar (Call + WhatsApp + Enquire) functional
- [x] Conversion path test-fired: form → `/api/enquiry` → success state (demo mode;
      GHL forward wired behind `GHL_WEBHOOK_URL`)
- [x] Responsive verified at 375 / 1440; mobile menu open/close; no horizontal scroll
- [x] Console clean (zero errors)

**Deliberately deferred to post-approval / launch:**
- Marketing-engine tracking (GA4/GTM/Pixel/CAPI), CRM routing live, Search Console,
  GBP — Gate-4 launch items, not demo scope.
- Full `/products/*` catalogue architecture and the other production pages.
- Impeccable critique/audit + full Playwright QA pass (recommended before launch).
- A real A&S photography shoot (premises, team, installations).

## Known notes

- Home first-load JS = **153 kB** vs the 150 kB target (+3 kB). Driven by the OS
  motion engine's `domAnimation` feature set (an OS standard, not deviated). Page is
  otherwise static with AVIF/WebP images; Lighthouse target still expected ≥90.
- `GHL_WEBHOOK_URL` unset ⇒ enquiries validate and confirm without forwarding.
- Production origin in `config/site.ts` is `https://www.answholesalers.co.za`
  (placeholder for canonical/OG). Update if the live domain differs.

## Outstanding client inputs (from the audit)

Physical branch confirmed (301 Barolong Street, Icon Industrial Park, Sunderland
Ridge, Centurion, 0157). Still needed for later phases: B2B-vs-B2C confirmation,
authorised-distributor status, real proof/testimonials, photography, and
confirmation A&S may use Haier brand assets on its own site.
