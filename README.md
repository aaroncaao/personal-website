# Aaron Cao — NCAS Career Portfolio

A single-page React/TypeScript portfolio for NASA Community College Aerospace Scholars. Warm editorial styling, linked citations, an embedded résumé PDF, and print layouts for the complete portfolio and standalone résumé.

## Run locally

Requires Node.js 22.12+ or a compatible newer release and npm.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. For the tested fixed port: `npm run dev -- --port 5173 --strictPort`.

## Build, test, export

```sh
npx playwright install chromium
npm run build
npm run export:pdf
npm run test:browser
npm run preview
```

`build` type-checks and produces `dist/`. `export:pdf` starts an isolated production preview on port 4174, exports both PDFs, and closes that server. Keep that port free. It writes PDFs to `output/` and copies them to `public/` and `dist/`; it also writes `output/content-checks.json`. Browser tests start or reuse the development server on port 5173 and save screenshots under `.impeccable/review/`.

The “Save portfolio” control opens the browser print dialog: select Save as PDF, A4, default CSS margins, and disable browser headers/footers. The résumé section embeds the supplied PDF and links to the original for browsers that open PDFs separately. The download uses the NCAS submission filename. **Rerun build and export after changing content.**

## Edit content

Edit `src/content/portfolio.ts` for the identity, executive summary, skills, experiences, pathway rows, timeline, and references. Citation markers such as `[3]` become linked superscripts. Keep reference IDs stable or update all markers when changing them. Every reference needs a citation.

The source résumé is `public/NCAS_RESUME.pdf`. When replacing it, update the print-only transcription in `src/content/resume.ts` so the résumé also appears in the full portfolio PDF. See [CONTENT_REVIEW.md](CONTENT_REVIEW.md) for portfolio copy still under review.

Presentation lives in `src/App.tsx` and `src/styles.css`. Fonts are self-hosted from `@fontsource/inter`, with the OFL license in `public/licenses/`. The portrait, project screenshots, and campus photo are stored in `public/images/`.

## Static deployment package

After building and exporting, deploy the **contents of `dist/`** to any static HTTP host. Relative asset paths support a GitHub Pages repository subdirectory. The site uses anchors and a résumé query parameter; no routing fallback configuration is required. Do not open `dist/index.html` directly using `file://`.

For Netlify or Vercel, configure build command `npm run build && npm run export:pdf`, publish directory `dist`, and install Playwright Chromium as a build prerequisite. Alternatively, upload the already generated local `dist/` package. No hosting account was changed or site published by this task.

## Validation

Browser checks cover 1440px desktop, 768px tablet, and 390px/360px mobile, WCAG A/AA automated checks, citation navigation, keyboard entry, menu behavior, downloads, and print controls. Automated accessibility checks supplement manual visual and keyboard review; they do not certify accessibility. PDF layout must be rechecked after substantial résumé or project text changes.
