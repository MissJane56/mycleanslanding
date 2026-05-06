# MyCleans.App

A landing page for **MyCleans.App** — an innovative platform connecting professional cleaners with self-managing BnB hosts. The site presents the value proposition for both audiences: cleaners get faster payments and better client relationships, while hosts get operational clarity without outsourced management.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19 |
| Routing | TanStack Router v1 (file-based) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts on [http://localhost:3000](http://localhost:3000).

For Netlify feature emulation (functions, edge, etc.):

```bash
netlify dev
```

This starts on [http://localhost:8888](http://localhost:8888).

## Building for Production

```bash
npm run build
```

Output goes to `dist/client/` as configured in `netlify.toml`.
