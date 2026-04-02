# Personal site

Personal portfolio site, built with Next.js, React, TypeScript, Tailwind CSS, and Bun.

The app is currently a single-page site with an editorial two-column layout: a profile panel, a concise introduction, experience, skills, selected projects, and writing links.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Bun

## Local development

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

Open `http://localhost:3000`.

Other useful commands:

```bash
bun run lint
bun run build
bun run start
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

components/
  ProfileCard.tsx     Profile panel component

public/
  kris-taller.png     Main card image
  kris.jpg            Mini avatar image
```

## What to edit

Most content updates happen in `app/page.tsx`:

- intro copy
- work experience
- skills
- selected projects
- writing links
- profile panel props such as name, title, summary, and contact links

Profile panel structure lives in `components/ProfileCard.tsx`.

Site-wide styling lives in `app/globals.css`.

Images are stored in `public/`.

## Notes

- The site is mostly static and server-rendered for good SEO by default.
- `NEXT_PUBLIC_SITE_URL` can be set in production to generate canonical metadata, `robots.txt`, and `sitemap.xml` with the correct domain.
- Deployment is set up for Vercel with Bun commands in `vercel.json`.

## Deployment

The site is deployed on Vercel.

This repo includes `vercel.json` with:

- `bun install` for install
- `bun run build` for build
- `bun run dev` for local Vercel dev

Those settings are picked up automatically.
