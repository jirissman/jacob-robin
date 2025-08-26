# Jacob Robin - Astro + Sanity CMS Application

Jacob Robin is a modern web application built with Astro (frontend) and Sanity Studio (content management) using a monorepo structure with npm workspaces. The application features a dynamic theming system, custom content schemas, and full-stack type safety through generated TypeScript types.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Architecture Overview

### Core Data Flow

1. **Content Creation**: Sanity Studio (`/studio/`) → Schema definitions → Generated TypeScript types
2. **Data Fetching**: Astro pages → GROQ queries via `sanityClient` → Rendered components
3. **Theming**: Sanity CMS manages theme configurations → CSS custom properties → Dynamic theme switching

### Key Integration Points

- **Type Safety**: Sanity schema auto-generates comprehensive TypeScript types in `/shared/sanity.types.ts` covering all content types and GROQ query results
- **Theme System**: `ThemeManager.astro` handles client-side theme switching with CSS custom properties
- **Content Rendering**: `PortableText.astro` renders rich content with custom components (`Block.astro`, `PortableTextImage.astro`)
- **Studio Structure**: Custom Studio layout defined in `/studio/structure.ts` with organized content sections

### Schema Architecture

Sanity schemas are modular with clear separation:

- `/studio/schemaTypes/documents/` - Main content types (posts, about)
- `/studio/schemaTypes/blocks/` - Reusable content blocks and references
- Theme configs stored as documents (`activeStyle`, `lightTheme`, `darkTheme`)

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
- `astro-app/astro.config.mjs` - Astro configuration with Sanity integration and Vercel adapter
- `studio/sanity.config.ts` - Sanity Studio configuration with custom structure
- `studio/env.ts` - Environment variable validation for Studio (throws errors if missing)
- `shared/sanity.types.ts` - Generated TypeScript types from Sanity schema
- `astro-app/src/utils/sanity.ts` - GROQ queries and Sanity client configuration
- `studio/structure.ts` - Custom Studio navigation and content organization

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

1. Create schema in `/studio/schemaTypes/` (follow existing patterns: `postType.ts`, `aboutType.ts`)
2. Add to `/studio/schemaTypes/index.ts` exports array
3. Run `npm run typegen` to regenerate TypeScript types in `/shared/sanity.types.ts`
4. Update `/studio/structure.ts` to add to Studio navigation (optional)
5. Create GROQ queries in `/astro-app/src/utils/sanity.ts` following existing patterns
6. Update Astro pages/components to use new types from shared directory

### Working with Themes

The theming system uses a three-layer approach:

1. **Sanity Schemas**: `themeColorsType.ts` defines color fields for light/dark themes
2. **CSS Custom Properties**: `ThemeManager.astro` applies theme colors as CSS variables
3. **Component Styling**: Components use `var(--property-name)` for dynamic theming

**Key Files:**

- `/studio/schemaTypes/themeColorsType.ts` - Theme color definitions
- `/astro-app/src/components/ThemeManager.astro` - Client-side theme management
- `/astro-app/src/utils/sanity.ts` - Theme data fetching (DARK_THEME_QUERY, LIGHT_THEME_QUERY)

### Modifying Content Schemas

When changing schema fields:

1. Update schema files in `/studio/schemaTypes/`
2. Run `npm run typegen` to update TypeScript types
3. Update any GROQ queries in `/astro-app/src/utils/sanity.ts`
4. Update components that consume the changed data

**Important**: Schema changes may require Studio restart (`npm run dev` in studio workspace)

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
