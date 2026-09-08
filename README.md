# Play Anywhere — Nintendo Switch

A standalone React + Vite landing page.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Verify a GitHub deployment

```bash
npm run typecheck
npm run build
npm run preview
```

## Deploy on GitHub Pages

The repository includes `.github/workflows/deploy.yml`. Push the project to
GitHub, then open **Settings → Pages** and set **Source** to **GitHub Actions**.
Every push to `main` or `master` will type-check, build, and deploy the `dist`
folder automatically.

Do not open the repository's source `index.html` through a raw file viewer.
GitHub Pages must serve the compiled `dist` artifact; otherwise the browser
cannot execute the TypeScript/React source files.