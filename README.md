
# Hammad Tahir Portfolio

This is a personal portfolio web application built with React, TypeScript, Vite, Tailwind CSS, and shadcn-ui.

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm (comes with Node.js)

### Installation

From the repository directory, install dependencies:

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open your browser and visit the local address shown in the terminal (usually http://localhost:5173).

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn-ui

## Project Structure

- `src/` — Main source code (components, pages, config, hooks, etc.)
- `public/` — Static assets (images, favicon, resume PDF)
- `package.json` — Project dependencies and scripts

## Content

- Contact details and CV links: `src/config/site.ts`
- Positioning, skills, and experience: `src/config/content.ts`
- Project evidence and ownership: `src/config/projects.ts`

## Deployment

This is a static Vite app. The Git repository root is this folder. Point the
host at this directory, not the parent `Final-portfolio` folder.

- **Vercel:** framework preset Vite. `vercel.json` rewrites client routes
  (`/projects`, `/recognition`, case studies) to `index.html`.
- **Netlify:** `public/_redirects` does the same. Publish the `dist` directory.
- **Other static hosts:** `npm run build` also writes `dist/404.html` so unknown
  paths fall back to the app.

Build command: `npm run build`. Output: `dist`.

The canonical and social URLs are `https://hammad-portfolio-cyan-pi.vercel.app`. If the
production domain is different, update `src/config/site.ts`, `index.html`,
`public/robots.txt`, and `public/sitemap.xml` together.

## License

MIT
