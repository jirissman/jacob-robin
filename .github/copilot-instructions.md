# Jacob Robin - Astro + Sanity CMS Website

This is a personal website built with [Astro](https://astro.build/) frontend and [Sanity](https://www.sanity.io/) CMS backend. The codebase consists of an Astro web application for the frontend and a Sanity Studio for content management.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap, Build, and Test the Repository

**CRITICAL: NEVER CANCEL long-running commands. Builds and installs may take significant time.**

1. **Install dependencies** (takes ~60 seconds, NEVER CANCEL):

   ```bash
   npm install
   ```

   Set timeout to 120+ seconds.

2. **Environment Variables Required**:
   - For Astro app: `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`
   - For Studio: `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET`, `SANITY_STUDIO_STUDIO_HOST`
   - Example setup:
     ```bash
     export PUBLIC_SANITY_PROJECT_ID=your-project-id
     export PUBLIC_SANITY_DATASET=production
     export SANITY_STUDIO_PROJECT_ID=your-project-id
     export SANITY_STUDIO_DATASET=production
     export SANITY_STUDIO_STUDIO_HOST=your-project.sanity.studio
     ```

3. **Build the Astro app** (takes ~12 seconds):

   ```bash
   cd astro-app && npm run build
   ```

4. **Build the Studio** (takes ~22 seconds):

   ```bash
   cd studio && npm run build
   ```

   **WARNING**: In restricted network environments, disable auto-updates by setting `autoUpdates: false` in `studio/sanity.cli.ts`.

5. **Generate types** (requires valid Sanity credentials):
   ```bash
   npm run typegen
   ```

### Development Servers

**Start both servers concurrently** (recommended):

```bash
npm run dev
```

- Astro app: http://localhost:4321
- Studio: http://localhost:3333
- NEVER CANCEL: Allow 30+ seconds for full startup

**Start servers individually**:

```bash
# Astro only
cd astro-app && npm run dev

# Studio only
cd studio && npm run dev
```

### Code Quality and Formatting

**ALWAYS run before committing**:

```bash
# Format code (required)
npx prettier --write .

# Check formatting
npx prettier --check .
```

**Note**: ESLint is configured but uses deprecated .eslintrc format. Consider migrating to eslint.config.js for ESLint v9+.

## Project Structure

```
/
├── astro-app/          # Astro frontend application
│   ├── src/            # Source code
│   ├── public/         # Static assets
│   └── astro.config.mjs # Astro configuration
├── studio/             # Sanity Studio CMS
│   ├── schemaTypes/    # Content schemas
│   ├── sanity.config.ts # Studio configuration
│   └── sanity.cli.ts   # CLI configuration
├── shared/             # Shared types and utilities
│   └── sanity.types.ts # Generated Sanity types
└── package.json        # Workspace configuration
```

## Validation and Testing

### Manual Validation Steps

**ALWAYS perform these validation steps after making changes**:

1. **Build validation**:

   ```bash
   # Verify Astro builds without errors
   cd astro-app && npm run build

   # Verify Studio builds (may require env vars)
   cd studio && npm run build
   ```

2. **Development server validation**:

   ```bash
   # Start both servers
   npm run dev

   # Verify Astro serves at http://localhost:4321
   # Verify Studio serves at http://localhost:3333
   ```

3. **Content validation** (if Sanity credentials available):
   - Access Studio at http://localhost:3333
   - Create or edit a blog post
   - Verify content appears on frontend at http://localhost:4321

4. **Code formatting validation**:
   ```bash
   npx prettier --check .
   ```

### Common Issues and Workarounds

**Network/Auto-update Issues**:

- If Studio build/dev fails with fetch errors, temporarily set `autoUpdates: false` in `studio/sanity.cli.ts`
- This commonly occurs in restricted network environments

**Missing Environment Variables**:

- Astro requires `PUBLIC_SANITY_PROJECT_ID` and `PUBLIC_SANITY_DATASET`
- Studio requires `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET`, and `SANITY_STUDIO_STUDIO_HOST`
- Without these, applications will show configuration errors

**Type Generation Failures**:

- `npm run typegen` requires valid Sanity project credentials
- Can be skipped for basic development if using existing types

## Key Files to Monitor

**Always check these files when making Sanity-related changes**:

- `astro-app/astro.config.mjs` - Sanity integration configuration
- `studio/sanity.config.ts` - Studio configuration and plugins
- `studio/env.ts` - Environment variable validation
- `shared/sanity.types.ts` - Generated types (regenerate after schema changes)

**Always check these files when making content changes**:

- `studio/schemaTypes/` - Content type definitions
- `astro-app/src/utils/sanity.ts` - Sanity client queries

## Timing Expectations

**NEVER CANCEL these operations - allow full completion**:

- `npm install`: ~60 seconds (timeout: 120+ seconds)
- `npm run dev`: ~15 seconds startup (timeout: 60+ seconds)
- `npm run build` (astro-app): ~12 seconds (timeout: 30+ seconds)
- `npm run build` (studio): ~22 seconds (timeout: 60+ seconds)
- `npm run typegen`: ~5 seconds (timeout: 30+ seconds)

## Common Commands Reference

```bash
# Install dependencies
npm install

# Start development (both apps)
npm run dev

# Build Astro app
cd astro-app && npm run build

# Build Studio
cd studio && npm run build

# Generate types
npm run typegen

# Format code
npx prettier --write .

# Preview Astro build
cd astro-app && npm run preview

# Deploy Studio (requires auth)
cd studio && npm run deploy
```
