# Portfolio

Codebase for [jacobhomanics.com](https://jacobhomanics.com): a one-screen portfolio built with Next.js (App Router) and TypeScript.

## Run locally

Requires Node and pnpm.

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Scripts

| Command          | What it does                              |
| ---------------- | ----------------------------------------- |
| `pnpm dev`       | Start the dev server                      |
| `pnpm build`     | Production build                          |
| `pnpm start`     | Serve the production build                |
| `pnpm typecheck` | Type-check the project                    |
| `pnpm lint`      | Lint the project                          |

## Environment variables

The contact form sends mail through [Web3Forms](https://web3forms.com). Copy `.env.example` to `.env.local` and add your access key:

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key
```

The key is public by design (it can only send mail to the address it was created for), but keep `.env.local` out of git. It is already git-ignored. The free plan allows 250 messages a month.

## Deploy (Vercel)

1. Import the repository in Vercel. The defaults work (framework: Next.js, build command: `pnpm build`).
2. Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` under Project Settings > Environment Variables, then redeploy. It is baked in at build time, so a change needs a new build.
3. After the first deploy, refresh the link preview in social tools (for example LinkedIn's Post Inspector), since they cache images.

## Where things live

- `app/page.tsx`: home page. `app/ProjectShowcase.tsx` is the carousel and `app/projects-data.ts` holds the project copy.
- `app/contact/`: contact page and form. `app/faq/page.tsx`: FAQ page (questions and answers are one list at the top, and the structured data is built from it).
- `app/layout.tsx`: site-wide title, description, social tags and structured data.
- `app/icon.svg`, `app/apple-icon.png`, `public/og-image.png`, `public/logo.png`: logo, favicon and link-preview image.
- `public/llms.txt`, `app/robots.ts`, `app/sitemap.ts`: crawler files. Add new pages to the sitemap by hand.
- `assets/`: project images, the logo and the resume PDF.
- `app/globals.css`: colors and shared styles.

Cheers.
