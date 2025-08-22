# Jacob Robin

Personal website for Jacob Robin, a creative writer and storyteller. This site is built with [Astro](https://astro.build/) for the frontend and [Sanity Studio](https://www.sanity.io/) for content management, allowing for dynamic content creation and a customizable reading experience.

## Features

- **Creative Writing Blog**: Share articles, stories, and creative writing with a clean, customizable interface
- **Dynamic Content Management**: Create and manage content using the intuitive [Sanity Studio](https://www.sanity.io/docs/sanity-studio)
- **Customizable Themes**: Personalize colors, typography, and layout through the content management system
- **Rich Text Content**: Write with [Portable Text](https://www.sanity.io/docs/presenting-block-text) for flexible content formatting
- **Responsive Design**: Optimized reading experience across all devices
- **Fast Performance**: Built with [Astro](https://astro.build/) for optimal loading speeds

## Live Site

Visit the website at: [https://jacob-robin.vercel.app](https://jacob-robin.vercel.app)

## Development Setup

This project uses npm workspaces with two main applications: the Astro frontend (`astro-app`) and Sanity Studio (`studio`).

### Prerequisites

- Node.js 18+
- npm
- A Sanity project (for content management)

### Environment Setup

1. Clone this repository
2. Install dependencies:

   ```shell
   npm install
   ```

3. Create a `.env` file in the root directory with your Sanity project details:
   ```
   SANITY_STUDIO_DATASET=production
   SANITY_STUDIO_PROJECT_ID=your-project-id
   SANITY_STUDIO_STUDIO_HOST=your-studio-host
   PUBLIC_SANITY_PROJECT_ID=your-project-id
   PUBLIC_SANITY_DATASET=production
   ```

### Running Locally

Start both the Astro app and Studio concurrently:

```shell
npm run dev
```

This will start:

- Astro app at [http://localhost:4321](http://localhost:4321)
- Sanity Studio at [http://localhost:3333](http://localhost:3333)

You can also run them individually:

```shell
# Astro app only
cd astro-app && npm run dev

# Studio only
cd studio && npm run dev
```

### Building

Build both applications:

```shell
# Build Astro app
cd astro-app && npm run build

# Build Studio
cd studio && npm run build
```

### Content Management

Once you have the applications running:

1. **Access the Studio**: Navigate to [http://localhost:3333](http://localhost:3333) and sign in with your Sanity account
2. **Create Content**: Use the Studio interface to create blog posts, update the about page, and manage site settings
3. **Customize Themes**: Modify colors, typography, and layout settings through the Studio
4. **View Changes**: Your content will automatically appear on the Astro frontend at [http://localhost:4321](http://localhost:4321)

### Content Types

The site includes several content types:

- **Posts**: Blog articles and creative writing pieces
- **About**: Personal information and bio
- **Theme Settings**: Colors, typography, and layout customization
- **Categories & Tags**: Content organization

## Deployment

This website is deployed on Vercel with automatic deployments from the main branch.

### Deploying Studio

To deploy the Sanity Studio:

```shell
cd studio
npx sanity deploy
```

### Deploying Frontend

The Astro frontend is configured for Vercel deployment and will automatically deploy when changes are pushed to the main branch.

For manual deployment or other platforms:

1. Build the application: `cd astro-app && npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Ensure environment variables are configured in your hosting platform

### Environment Variables for Production

Make sure to set these environment variables in your deployment platform:

- `PUBLIC_SANITY_PROJECT_ID`
- `PUBLIC_SANITY_DATASET`
- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`
- `SANITY_STUDIO_STUDIO_HOST`

## Tech Stack

- **Frontend**: [Astro](https://astro.build/) - Static site generator with dynamic capabilities
- **CMS**: [Sanity](https://www.sanity.io/) - Headless content management system
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Deployment**: [Vercel](https://vercel.com/) - Serverless deployment platform
- **Content**: [Portable Text](https://www.sanity.io/docs/presenting-block-text) - Rich text format

## Resources

- [Sanity documentation](https://www.sanity.io/docs/)
- [Astro documentation](https://docs.astro.build/en/getting-started/)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
