# SSR to SSG Conversion

This document outlines the changes made to convert the Astro application from Server-Side Rendering (SSR) to Static Site Generation (SSG).

## Changes Made

### 1. Updated astro.config.mjs
- Changed `output: "server"` to `output: "static"`
- Removed `adapter: vercel()` configuration (not needed for SSG)
- Removed import of `@astrojs/vercel` adapter
- Updated comments to reflect SSG setup

### 2. Key Differences

**Before (SSR):**
```javascript
export default defineConfig({
  site: "https://jacob-robin.vercel.app",
  output: "server",
  adapter: vercel(),
  // ... rest of config
});
```

**After (SSG):**
```javascript
export default defineConfig({
  site: "https://jacob-robin.vercel.app",
  output: "static",
  // ... rest of config
});
```

## Why This Works

The existing data fetching code in pages like `index.astro`, `about.astro`, and `[slug].astro` uses `await` calls in the frontmatter:

```javascript
const posts = await getPosts();
const about = await getAbout();
const post = await getPost(slug);
```

With SSG, these calls happen at **build time** instead of **request time**, which is exactly what we want for static generation.

## Next Steps

To complete the SSG setup:

1. **Add Environment Variables:**
   Create a `.env` file in the `astro-app` directory with:
   ```
   PUBLIC_SANITY_PROJECT_ID=your-project-id
   PUBLIC_SANITY_DATASET=production
   ```

2. **Test Build:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   - Use static hosting (Vercel, Netlify, GitHub Pages, etc.)
   - No server/serverless functions needed
   - All pages are pre-generated at build time

## Benefits of SSG over SSR

- **Faster loading:** Pre-generated HTML pages
- **Better SEO:** Fully rendered content for crawlers
- **Cost effective:** No server costs, can use CDN
- **Better performance:** No server processing on each request
- **Simpler deployment:** Just static files

## Sanity Studio

The Sanity Studio runs separately in the `studio/` directory and doesn't require the Astro app to be in SSR mode. The embedded studio path (`studioBasePath: "/admin"`) was already commented out in the original configuration.