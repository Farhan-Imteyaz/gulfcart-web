# GulfCart Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Setup
npm install
npm run dev

## Structure
- src/app/*  → one folder per SEO page (commercial, country, comparison)
- src/components → Header, Footer, Cta, PageHero (shared across pages)
- src/lib/site.ts → brand config
- src/lib/seo.ts → generates metadata (title/desc/canonical/OG) per page
- sitemap.ts, robots.ts → auto SEO files

## Colors
tailwind.config.ts has placeholder brand.* colors — replace hex values
with exact ones from gulfcart.ae once you have them (DevTools > computed styles).

## Blog
Intentionally not included yet — structure supports adding
src/app/blog/[slug]/page.tsx later with an MDX or CMS backend.
