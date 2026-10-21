# oscarchavez.com

Personal portfolio for Oscar Chavez, Senior Full-Stack Engineer. Built with Next.js (App Router), React, TypeScript and Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build && npm start
```

## Structure

- `src/content/site.ts` — all copy, links, experience and project data. Edit text here.
- `src/app/` — routes: `/` (home), `/work/knowvia` (case study), `/archive`, plus the generated social preview image.
- `src/components/sections/` — homepage sections (Hero, FeaturedWork, Impact, Experience, MoreWork, Contact).
- `src/components/` — shared UI and the client-side pieces (sticky nav, scroll reveal, Knowvia chat demo, gameplay video, copy-email button).
- `src/app/globals.css` — theme tokens (graphite dark palette) and animations.

## Media still needed

Screenshots live in `src/assets/projects/` (optimized by `next/image`); video in `public/media/`. Raw captures go in `media-source/` (gitignored, never deployed) — redact personal data before copying anything out of it.

| Asset | Spec | Where it's wired |
| --- | --- | --- |
| Knowvia dashboard | ✅ `src/assets/projects/knowvia-leads.jpg` (emails pixelated) — homepage tile | `FeaturedWork.tsx` → KnowviaTile |
| Knowvia extras | ✅ `knowvia-site.jpg`, `knowvia-lead-detail.jpg`, `knowvia-account.jpg` — reserved for the case study | `/work/knowvia` (not yet used) |
| RokketMed site | ✅ `src/assets/projects/rokketmed-site.jpg` (captured from rokketmed.com, cookie banner dismissed) | `FeaturedWork.tsx` → RokketMedTile |
| Browser Fishing loop | ✅ Done: `public/media/fishing-game/gameplay-loop.mp4` + `poster.jpg` | `site.ts` → `fishing.video` |
| More-work thumbnails | 192×192 | `MoreWork.tsx` |

## Deploy

Runs as a standard Node server (`npm run build` then `npm start`, which respects `PORT`). The `Procfile` keeps Heroku-style hosts working; Vercel also works with zero config.
