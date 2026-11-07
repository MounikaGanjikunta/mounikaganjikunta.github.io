# Mounika Portfolio

A clean React + Vite + TypeScript portfolio for Mounika Ganjikunta.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Customize

Most profile content lives in:

```bash
src/data/profile.ts
```

Replace `public/resume.pdf` with your latest resume if you want the Resume button to work.

## Deploy to GitHub Pages

1. Create a GitHub repository, for example `mounika-portfolio`.
2. Push this project to the repository.
3. Run:

```bash
npm install
npm run build
```

4. In GitHub, go to **Settings → Pages** and deploy from GitHub Actions or the `dist` folder using your preferred setup.
