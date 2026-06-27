# Engineering & Research Portfolio

An academic, professional portfolio site for showcasing bio, physical engineering projects, and research (completed and ongoing). Built with Next.js 15, React 19, and Tailwind CSS v4 using your custom color theme.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Redirects to `/home` |
| `/home` | Background, skills, education |
| `/projects` | Physical projects (slide portfolio) |
| `/research` | Research showcase |
| `/contact` | Contact info, globe, and links |

## Getting started

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

Edit **`src/data/site.ts`** — name, bio paragraphs, projects, research entries, links, and navigation.

Add a CV at **`public/cv.pdf`** (or update the path in `siteConfig.links.cv`).

## Theme

Your CSS variables live in **`src/app/globals.css`** (light and `.dark` modes). A theme toggle persists preference in `localStorage`.

Fonts: **Playfair Display** (headings), **Montserrat** (body), **Source Code Pro** (labels/code).

## Adding 21st.dev components

This project follows the **shadcn** layout:

| Path | Purpose |
|------|---------|
| `src/components/ui/` | Reusable UI primitives (21st.dev / shadcn) |
| `src/components/sections/` | Page sections that compose UI components |
| `src/lib/utils.ts` | `cn()` helper for Tailwind class merging |

**Physical projects** use `FeatureShowcase` from `src/components/ui/feature-showcase.tsx` (Radix tabs/accordion + shadcn UI).

```bash
npm install
```

If you initialized a fresh repo without shadcn CLI, this folder already matches what `npx shadcn@latest init` would create under `src/`. Keep new blocks in `src/components/ui/` so imports stay `@/components/ui/...`.

Share additional 21st.dev prompts to extend research or bio sections.

## Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com), Netlify, or any static/Node host that supports Next.js.
