# AGENTS.md

## Project Overview

**MyCleans.App** landing page — a marketing site for a platform connecting professional cleaners with self-managing BnB hosts. Built with TanStack Start and deployed on Netlify.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR-capable) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility-first) |
| Language | TypeScript 5.7, strict mode |
| Deployment | Netlify |

## Directory Structure

```
src/
  routes/
    __root.tsx        # Root layout, global <head> meta (title, description)
    index.tsx         # Landing page — the entire single-page marketing site
  data/
    products.ts       # Legacy product data (not used by the landing page)
  styles.css          # Global CSS — Tailwind import + base body styles
  router.tsx          # TanStack Router setup
public/               # Static assets (favicon, placeholder image)
netlify.toml          # Build config: vite build → dist/client, dev port 8888
```

## Key Architecture Decisions

- **Single-page landing**: The entire landing page lives in `src/routes/index.tsx` as one component. Sections use `id` anchors (`#cleaners`, `#hosts`, `#features`, `#register`) linked via smooth-scroll `<a>` tags — no client-side routing within the page.
- **No external component library**: All UI is hand-written Tailwind — no Radix UI or shadcn/ui, keeping the bundle lean.
- **Dual-audience layout**: "For Cleaners" section uses a teal color scheme; "For Hosts" uses indigo. They mirror each other structurally but reverse column order for visual variety.

## Coding Conventions

- **Naming**: Components PascalCase, utilities/hooks camelCase, route files kebab-case.
- **Styling**: Tailwind utility classes only. Use `cn()` if conditional class merging grows complex.
- **TypeScript**: Strict mode. Use `type` keyword for type-only imports.
- **No comments by default**: Only add inline comments for non-obvious constraints or workarounds.
- **Path alias**: `@/` maps to `src/` (configured in `tsconfig.json`).

## Adding New Sections or Pages

- New pages: create a file in `src/routes/` following TanStack Router file-based conventions.
- New landing sections: add a `<section id="...">` block inside `LandingPage()` in `index.tsx`.
- API endpoints: create `src/routes/api.*.ts` files (e.g., `api.waitlist.ts`).

## Environment Variables

For AI features (if added later): `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `GEMINI_API_KEY`, or `OLLAMA_BASE_URL`.
