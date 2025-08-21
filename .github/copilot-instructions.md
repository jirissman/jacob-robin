# Jacob Robin - Astro + Sanity CMS Application

Jacob Robin is a modern web application built with Astro (frontend) and Sanity Studio (content management) using a monorepo structure with npm workspaces.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Install Dependencies

Bootstrap the repository with these commands:

```bash
npm install
```

**Timing:** Takes 5-60 seconds (depending on cache). NEVER CANCEL. Set timeout to 120+ seconds.

### Build Commands

Build both applications with these validated commands:

**Astro App Build:**

```bash
cd astro-app && npm run build
```

**Timing:** Takes 12 seconds. NEVER CANCEL. Set timeout to 60+ seconds.

**Studio Build:**

```bash
cd studio && npm run build
```

**Timing:** Takes 21 seconds. NEVER CANCEL. Set timeout to 60+ seconds.

**Note:** Builds succeed even without environment variables, but warnings will appear about missing Sanity configuration.

### Development Servers

**CRITICAL:** Both applications require environment variables to run properly. The applications will start but fail to function without proper configuration.

**Required Environment Variables:**

- Studio: `SANITY_STUDIO_DATASET`, `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_STUDIO_HOST`
- Astro: `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`

**Start Development Servers:**

```bash
# From root - starts both apps concurrently
npm run dev
```

**Note:** Without proper environment variables, this will fail. Studio runs on port 3333, Astro runs on port 4321.

**Start Individual Services:**

```bash
# Astro app only (from astro-app directory)
npm run dev

# Studio only (from studio directory)
npm run dev
```

### TypeScript Validation

**Studio TypeScript Check:**

```bash
cd studio && npx tsc --noEmit
```

**Timing:** Takes 3 seconds. Works correctly.

**Astro TypeScript Check:**
The `astro check` command (part of the build) is the recommended way to check TypeScript in Astro projects. Direct `tsc` command has issues with .astro file imports.

### Code Formatting and Style

**Prettier Formatting:**

```bash
# Check formatting
npx prettier --check .

# Fix formatting
npx prettier --write .
```

**Timing:** Takes 1-2 seconds. Includes .prettierignore to exclude build outputs and generated files.

**ESLint:**
⚠️ **KNOWN ISSUE:** ESLint configuration uses legacy .eslintrc format. ESLint v9 requires migration to eslint.config.js format. Current ESLint commands will fail.

### Type Generation

Generate Sanity types (requires environment variables):

```bash
npm run typegen
```

**Note:** This command requires valid Sanity environment variables and will fail without them.

## Validation

### Manual Validation Requirements

After making changes, ALWAYS perform these validation steps:

1. **Build Validation:**

   ```bash
   cd astro-app && npm run build
   cd ../studio && npm run build
   ```

2. **Format Validation:**

   ```bash
   npx prettier --check .
   ```

3. **TypeScript Validation:**
   ```bash
   cd studio && npx tsc --noEmit
   ```

### Manual Testing Scenarios

When making changes to the application:

- **Content Changes:** Test that content appears correctly in the Astro frontend
- **Schema Changes:** Verify Studio interface updates correctly after schema modifications
- **Style Changes:** Ensure both light and dark themes work correctly
- **Component Changes:** Test responsive behavior across different screen sizes

### Known Limitations

- **ESLint:** Currently not functional due to configuration format compatibility
- **Preview Mode:** `npm run preview` fails due to Vercel adapter limitations
- **Environment Setup:** Full functionality requires valid Sanity project credentials
- **TypeScript:** Direct `tsc` check on Astro app has .astro file import issues

## Project Structure

### Key Directories

- `/astro-app/` - Frontend Astro application
- `/studio/` - Sanity Studio CMS
- `/shared/` - Shared TypeScript types and utilities
- `/astro-app/src/pages/` - Astro pages (index, about, 404, articles)
- `/astro-app/src/components/` - Reusable Astro components
- `/studio/schemaTypes/` - Sanity schema definitions

### Important Files

- `package.json` - Root workspace configuration with `dev` and `typegen` scripts
- `astro-app/astro.config.mjs` - Astro configuration with Sanity integration
- `studio/sanity.config.ts` - Sanity Studio configuration
- `studio/env.ts` - Environment variable validation for Studio
- `shared/sanity.types.ts` - Generated TypeScript types from Sanity schema

### Workspace Scripts

**Root level:**

- `npm run dev` - Start both applications
- `npm run typegen` - Generate Sanity types

**Astro App:**

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Same as dev

**Studio:**

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run deploy` - Deploy to Sanity hosting
- `npm run typegen` - Generate types

## Common Tasks

### Adding New Content Types

1. Create schema in `/studio/schemaTypes/`
2. Add to `/studio/schemaTypes/index.ts`
3. Run `npm run typegen` to update types
4. Update Astro pages/components to use new types

### Modifying Styles

1. Edit TailwindCSS classes in Astro components
2. Verify changes in both light/dark themes
3. Test responsive behavior

### Working with Environment Variables

Create `.env` file in root with required variables for local development:

```bash
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_STUDIO_HOST=your-studio-host
PUBLIC_SANITY_PROJECT_ID=your-project-id
PUBLIC_SANITY_DATASET=production
```

**Note:** Use `.env.example` as a template. Never commit actual credentials to version control.
