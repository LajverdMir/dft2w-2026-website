# DFT²W 2026 — Conference Website

Website for **Digital Futures & Transformative Technologies Week (DFT²W) 2026**, hosted by NUST SEECS, Islamabad, in partnership with Azerbaijan Technical University — 17–18 November 2026. It covers the two IEEE conferences (ICoDT² and ICDI² AI&ML), speakers, workshops, sponsorship packages, registration and venue information.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the development server        |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build          |
| `npm run lint`  | Run ESLint                          |

## Project structure

```
app/          Routes (App Router). Pages are thin and render a feature.
features/     Page sections, one folder per feature/section
components/   Shared UI components
layouts/      Site layout: navbar, footer, page frame
public/       Images and static assets
```

Each component lives in its own folder with `index.tsx`, and where needed `index.types.ts` (types) and `index.constants.ts` (copy and data).

## Deployment

The site is fully static and deploys to [Vercel](https://vercel.com) with no extra configuration:

1. Import the repository in Vercel.
2. Framework preset: **Next.js** (detected automatically).
3. Build command `npm run build`, output handled by Vercel.

No environment variables are required.
