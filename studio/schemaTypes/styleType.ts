import {defineType, defineField} from 'sanity'
import {ColorWheelIcon, CogIcon, TextIcon, DashboardIcon, StackIcon, DropIcon} from '@sanity/icons'

// Style Configuration Document
export const styleConfigType = defineType({
  name: 'styleConfig',
  title: 'Style Configuration',
  type: 'document',
  description: 'A style configuration that can be applied to the website',
  groups: [
    {
      name: 'theme',
      title: 'Theme and Colors',
      icon: DropIcon,
    },
    {
      name: 'typography',
      title: 'Typography',
      icon: TextIcon,
    },
    {
      name: 'layout',
      title: 'Layout Settings',
      icon: DashboardIcon,
    },
    {
      name: 'components',
      title: 'Component Styles',
      icon: StackIcon,
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Configuration Name',
      type: 'string',
      description: 'Name for this style configuration',
      validation: (rule) => rule.required(),
    }),
    // Theme and Color Settings
    defineField({
      name: 'colorScheme',
      title: 'Color Scheme',
      type: 'string',
      options: {
        list: [
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
        ],
      },
      initialValue: 'light',
      group: 'theme',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'color',
      description: 'Main brand color used throughout the site',
      group: 'theme',
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'color',
      description: 'Secondary brand color for accents',
      group: 'theme',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      description: 'Main background color',
      group: 'theme',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'color',
      description: 'Primary text color',
      group: 'theme',
    }),
    // Typography Settings
    defineField({
      name: 'fontFamily',
      title: 'Font Family',
      type: 'string',
      options: {
        list: [
          {title: 'System Default', value: 'system-ui'},
          {title: 'Inter', value: 'Inter'},
          {title: 'Roboto', value: 'Roboto'},
          {title: 'Open Sans', value: 'Open Sans'},
          {title: 'Poppins', value: 'Poppins'},
          {title: 'Merriweather', value: 'Merriweather'},
          {title: 'Playfair Display', value: 'Playfair Display'},
          {title: 'Custom', value: 'custom'},
        ],
      },
      initialValue: 'system-ui',
      group: 'typography',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'customFontFamily',
      title: 'Custom Font Family',
      type: 'string',
      description:
        'CSS font-family value (see https://www.w3.org/Style/Examples/007/fonts.en.html for examples)',
      group: 'typography',
      hidden: ({parent}) => parent?.fontFamily !== 'custom',
    }),
    defineField({
      name: 'fontSize',
      title: 'Base Font Size',
      type: 'object',
      group: 'typography',
      fields: [
        defineField({
          name: 'mobile',
          title: 'Mobile (px)',
          type: 'number',
          initialValue: 16,
          validation: (rule) => rule.min(12).max(24),
        }),
        defineField({
          name: 'desktop',
          title: 'Desktop (px)',
          type: 'number',
          initialValue: 18,
          validation: (rule) => rule.min(14).max(28),
        }),
      ],
    }),
    defineField({
      name: 'lineHeight',
      title: 'Line Height',
      type: 'number',
      description: 'Line height multiplier (e.g., 1.5 for 150%)',
      initialValue: 1.6,
      group: 'typography',
      validation: (rule) => rule.min(1).max(3).precision(1),
    }),
    // Layout Settings
    defineField({
      name: 'maxWidth',
      title: 'Maximum Width',
      type: 'string',
      options: {
        list: [
          {title: 'Small (768px)', value: '768px'},
          {title: 'Medium (1024px)', value: '1024px'},
          {title: 'Large (1280px)', value: '1280px'},
          {title: 'Extra Large (1536px)', value: '1536px'},
          {title: 'Full Width', value: '100%'},
          {title: 'Custom', value: 'custom'},
        ],
      },
      initialValue: '1280px',
      group: 'layout',
      description: 'Maximum width for main content area',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'customMaxWidth',
      title: 'Custom Max Width',
      type: 'string',
      description: "CSS width value (e.g., '1200px', '90rem')",
      group: 'layout',
      hidden: ({parent}) => parent?.maxWidth !== 'custom',
    }),
    // Component Styles
    defineField({
      name: 'cards',
      title: 'Card Styles',
      type: 'object',
      group: 'components',
      description: 'Styles for article card component on the homepage',
      fields: [
        defineField({
          name: 'borderRadius',
          title: 'Border Radius',
          type: 'string',
          options: {
            list: [
              {title: 'None', value: '0'},
              {title: 'Small', value: '8px'},
              {title: 'Medium', value: '16px'},
              {title: 'Large', value: '24px'},
            ],
          },
          initialValue: '16px',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'shadow',
          title: 'Card Shadow',
          type: 'string',
          options: {
            list: [
              {title: 'None', value: 'none'},
              {title: 'Small', value: '0 1px 3px rgba(0,0,0,0.1)'},
              {title: 'Medium', value: '0 4px 6px rgba(0,0,0,0.1)'},
              {title: 'Large', value: '0 10px 15px rgba(0,0,0,0.1)'},
              {title: 'Extra Large', value: '0 20px 25px rgba(0,0,0,0.1)'},
            ],
          },
          initialValue: '0 4px 6px rgba(0,0,0,0.1)',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation Styles',
      type: 'object',
      group: 'components',
      description: 'Styles for the main navigation bar',
      fields: [
        defineField({
          name: 'position',
          title: 'Navigation Position',
          type: 'string',
          options: {
            list: [
              {title: 'Static', value: 'static'},
              {title: 'Fixed Top', value: 'fixed-top'},
              {title: 'Sticky Top', value: 'sticky-top'},
            ],
          },
          initialValue: 'static',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      colorScheme: 'theme.colorScheme',
      primaryColor: 'theme.primaryColor',
    },
    prepare({title, colorScheme, primaryColor}) {
      return {
        title: title || 'Untitled Style Configuration',
        subtitle: `${colorScheme || 'light'} theme`,
        media: ColorWheelIcon,
      }
    },
  },
})

// Active Style Selector (Singleton)
export const activeStyleType = defineType({
  name: 'activeStyle',
  title: 'Active Themes',
  type: 'document',
  description: 'Select which theme configurations are currently active',
  fields: [
    defineField({
      name: 'title',
      title: 'Settings Title',
      type: 'string',
      initialValue: 'Active Theme Configurations',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'activeConfigLight',
      title: 'Light Theme',
      type: 'reference',
      to: [{type: 'styleConfig'}],
      validation: (rule) => rule.required(),
      options: {
        filter: () => ({
          filter: "_type == 'styleConfig' && theme.colorScheme == 'light'",
        }),
      },
    }),
    defineField({
      name: 'activeConfigDark',
      title: 'Dark Theme',
      type: 'reference',
      to: [{type: 'styleConfig'}],
      validation: (rule) => rule.required(),
      options: {
        filter: () => ({
          filter: "_type == 'styleConfig' && theme.colorScheme == 'dark'",
        }),
      },
    }),
  ],
})

// Export both types
export const styleType = styleConfigType
