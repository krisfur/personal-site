# Personal site

Personal portfolio site, built with Next.js, React, TypeScript, Tailwind CSS, and pnpm.

The app is a single-page, single-column site: a header with photo and links, a short introduction, skills, experience, selected projects, and writing links.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- pnpm

## Local development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

Other useful commands:

```bash
pnpm lint
pnpm build
pnpm start
```

## Project structure

```text
app/
  layout.tsx          Root layout and page metadata
  page.tsx            Main page content and structured data
  globals.css         Global styles
  robots.ts           Search crawler rules
  sitemap.ts          Sitemap generation
  site-config.ts      Site URL configuration

public/
  kris-headshot.png   Header photo
```

## What to edit

Most content updates happen in `app/page.tsx`:

- intro copy
- work experience
- skills
- selected projects
- writing links
- header name, title, and contact links

Site-wide styling lives in `app/globals.css`.

Images are stored in `public/`.

## Notes

- The site is mostly static and server-rendered for good SEO by default.
- `NEXT_PUBLIC_SITE_URL` can be set in production to generate canonical metadata, `robots.txt`, and `sitemap.xml` with the correct domain.
- Deployment is set up for Vercel with pnpm commands in `vercel.json`.
- `pnpm-workspace.yaml` enforces a 7-day minimum release age for dependencies.

## Deployment

The site is deployed on Vercel.

This repo includes `vercel.json` with:

- `pnpm install --frozen-lockfile` for install
- `pnpm build` for build
- `pnpm dev` for local Vercel dev

Those settings are picked up automatically.
