# artsite

The website for [Holly Rebecca Artwork](https://hollyrebeccaartwork.co.uk) —
coloured pencil pet portraits and wildlife art.

React + TypeScript on Vite, built and served by Cloudflare Pages on push to
`main`.

## Running it

```sh
bun install
bun run dev
```

| Script                 | What it does                      |
| ---------------------- | --------------------------------- |
| `bun run dev`          | Dev server with HMR               |
| `bun run build`        | Type-check, then build to `dist/` |
| `bun run preview`      | Serve the built `dist/` locally   |
| `bun run lint`         | ESLint                            |
| `bun run format`       | Prettier, writing in place        |
| `bun run format:check` | Prettier, reporting only          |

Hooks are managed with [prek](https://prek.j178.dev). `prek install` once, then
formatting and linting run on commit and the full build runs on push.

## Artwork

Sources live in `src/images/`, capped at 4000px on the long edge. Vite generates
AVIF and WebP at each breakpoint through
[vite-imagetools](https://github.com/JonasKruckenberg/imagetools), so nothing
larger than the display size is ever sent. Do not put artwork in `public/` — it
bypasses hashing, so it can neither be resized nor cached.

To add a piece: drop the `.jpg` into `src/images/`, then give it a name and alt
text in the `alt` map in `src/images/index.ts`. Anything referenced but missing
throws at startup rather than rendering a broken image.

Two tiers come out of that registry. Pages use `sources`/`img` (up to 1440px);
the fullscreen viewer uses `full` (up to 3200px), fetched only when opened.
Eleven of the pieces were photographed below 2000px and so gain nothing from the
larger tier — `holly_grass`, the owls and `zebras` among them. Re-photographing
is the only fix for those.

## Layout

`src/routes/` is one directory per page, `src/components/` one per component,
each with its own CSS. `src/components/carousel/` is the one-at-a-time carousel
the About page used before the drifting banner replaced it; it is kept working
so the two can be swapped with one line in `src/routes/about/about.tsx`.

## Attribution

Developed with [Claude Code](https://claude.com/claude-code).
