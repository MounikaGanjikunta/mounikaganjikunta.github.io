# Mounika Ganjikunta Portfolio

The source for my personal engineering portfolio: [mounikaganjikunta.github.io](https://mounikaganjikunta.github.io/).

The site presents my experience, selected projects, technical skills, education, and writing in a responsive single-page interface.

## Highlights

- Data-driven profile content that is easy to update
- Responsive project, experience, education, and skills sections
- A short portfolio URL for my healthcare architecture article
- Automatic GitHub Pages deployment from the `main` branch

## Technology

React · TypeScript · Vite · Tailwind CSS · Framer Motion · Lucide Icons · GitHub Actions

## Run locally

Node.js 22 is recommended.

```bash
npm ci
npm run dev
```

Run a production build with:

```bash
npm run build
```

Most portfolio content is maintained in `src/data/profile.ts`. The deployment workflow lives in `.github/workflows/deploy.yml` and publishes the Vite production build to GitHub Pages after a push to `main`.
