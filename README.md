# A&S Wholesalers

Haier air conditioning supply house — Centurion, Gauteng, South Africa.
Marketing website built on **Bbettr Website OS v2.7.0**.

> **Phase 1 — homepage demo.** This repo currently ships a production-quality
> homepage for client approval. The remaining pages (Products, About, Solutions,
> Gallery, Contact) are built once the homepage design is signed off.

## Stack

- Next.js 14 (App Router) · React 18 · TypeScript (strict)
- Tailwind CSS 3 · Motion (`motion@12`) via the OS motion engine
- `lucide-react` icons · deployed on Vercel

## Develop

```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # production build
npm run lint           # eslint (next/core-web-vitals)
npm run typecheck      # tsc --noEmit
```

## Structure

```
app/            routes, layout (metadata + JSON-LD), sitemap, robots, og image, api/enquiry
views/          page compositions (home-page.tsx = section order)
components/
  sections/     homepage sections
  funnel/       header, footer, sticky bar, enquiry form + channel CTAs
  ui/           primitives (button, layout, typography, data/datasheet motifs)
config/         ALL copy & content (site, seo, navigation, products, trust, enquiry, home)
lib/            metadata, schema (JSON-LD), utils
engine/motion/  OS motion engine (do not edit — copied from Website OS)
public/         processed web images (products, lifestyle, brand)
source-assets/  original client uploads (logos, catalogue PDF, onboarding) — not served
```

## Content rule

No copy, contact detail, stat or URL is hardcoded in a component — everything lives
in `config/`. Product data is Haier's published specification; A&S adds no claims.

## Enquiries → GoHighLevel

`POST /api/enquiry` is webhook-ready. Set `GHL_WEBHOOK_URL` (see `.env.example`) in
Vercel to forward enquiries to GHL. Unset, the endpoint validates and confirms
without forwarding (demo mode) — no fake mail backend.

See `PROJECT_STATUS.md` for the full design brief, gate results and deferred items.
