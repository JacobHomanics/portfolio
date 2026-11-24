# Portfolio

Codebase for [jacobhomanics.com](https://jacobhomanics.com). Being rebuilt from scratch.

- `assets/` images and resume PDF carried over from the previous site
- `content/` copy and data (projects, skills, profile, contact links, palette) from the previous site, kept for reference
- `.env.example` documents environment variables (copy to `.env.local`, which is git-ignored)

The previous implementation is in git history (see `bca7326`).

## Run locally

Requires Node and pnpm.

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.
