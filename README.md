# Astro i18n Test Project

This is a minimal test project to reproduce an i18n routing issue with Astro.

## Setup

```bash
npm create astro@latest
# Choose minimal template
npm install
```

## Structure

The key files to examine:

1. `astro.config.mjs` - Contains i18n configuration
2. `src/i18n/ui.ts` - Contains translations and helper functions
3. `src/pages/test/index.astro` - Default language test page
4. `src/pages/[lang]/test/index.astro` - Language-specific test page

## Testing the Issue

1. Start the development server: `npm run dev`
2. Visit the following URLs:
    - `/test` - Should show the English test page
    - `/es/test` - Should show the Spanish test page
    - Check if any redirects happen when visiting `/es/test`

## What to Look For

If you see meta redirects in the HTML output like this:

```html
<!doctype html><title>Redirecting to: /es/test/</title><meta http-equiv="refresh" content="2;url=/es/test/"><meta name="robots" content="noindex"><link rel="canonical" href="/es/test/"><body>   <a href="/es/test/">Redirecting from <code>/es/es/test/</code> to <code>/es/test/</code></a></body>
```

Then we've reproduced the issue.