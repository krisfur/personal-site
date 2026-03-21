# Personal site

Personal portfolio site, built with Next.js, React, TypeScript, Tailwind CSS, and Bun.

The app is currently a single-page site centered around a custom interactive profile card, a short bio, work history, and technology badges.

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
  page.tsx            Main page content
  globals.css         Global styles and profile card effects

components/
  ProfileCard.tsx     Interactive profile card component

public/
  kris-taller.png     Main card image
  kris.jpg            Mini avatar image
```

## What to edit

Most content updates happen in `app/page.tsx`:

- intro copy
- work experience
- social links
- technology badge rows
- profile card props such as name, title, handle, and status

Profile card behavior and structure live in `components/ProfileCard.tsx`.

Profile card visual styling and animation effects live in `app/globals.css`.

Images are stored in `public/`.

## Notes

- The card UI is more custom than the rest of the page and uses regular CSS in `app/globals.css` alongside Tailwind utilities.
- External badge images are loaded directly from badge providers in `app/page.tsx`.
- Deployment is set up for Vercel with Bun commands in `vercel.json`.

## Deployment

The site is deployed on Vercel.

This repo includes `vercel.json` with:

- `bun install` for install
- `bun run build` for build
- `bun run dev` for local Vercel dev

Those settings are picked up automatically.

## Credit

The profile card design is inspired by the React Bits profile card component:

- https://www.reactbits.dev/components/profile-card
