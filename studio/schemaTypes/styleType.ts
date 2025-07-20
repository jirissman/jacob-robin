import {defineType, defineField} from 'sanity'
import {ColorWheelIcon, CogIcon} from '@sanity/icons'

// Style Configuration Document
export const styleConfigType = defineType({
  name: 'styleConfig',
  title: 'Style Configuration',
  type: 'document',
  description: 'A style configuration that can be applied to the website',
  fields: [
    defineField({
      name: 'title',
      title: 'Configuration Name',
      type: 'string',
      description: 'Name for this style configuration',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'theme',
      title: 'Theme Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'colorScheme',
          title: 'Color Scheme',
          type: 'string',
          options: {
            list: [
              {title: 'Light', value: 'light'},
              {title: 'Dark', value: 'dark'},
              {title: 'Auto', value: 'auto'},
            ],
          },
          initialValue: 'light',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'primaryColor',
          title: 'Primary Color',
          type: 'color',
          description: 'Main brand color used throughout the site',
        }),
        defineField({
          name: 'secondaryColor',
          title: 'Secondary Color',
          type: 'color',
          description: 'Secondary brand color for accents',
        }),
        defineField({
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'color',
          description: 'Main background color',
        }),
        defineField({
          name: 'textColor',
          title: 'Text Color',
          type: 'color',
          description: 'Primary text color',
        }),
      ],
    }),
    defineField({
      name: 'typography',
      title: 'Typography',
      type: 'object',
      fields: [
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
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'customFontFamily',
          title: 'Custom Font Family',
          type: 'string',
          description: "CSS font-family value (only used if 'Custom' is selected above)",
          hidden: ({parent}) => parent?.fontFamily !== 'custom',
        }),
        defineField({
          name: 'fontSize',
          title: 'Base Font Size',
          type: 'object',
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
          validation: (rule) => rule.min(1).max(3).precision(1),
        }),
      ],
    }),
    defineField({
      name: 'layout',
      title: 'Layout Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'maxWidth',
          title: 'Maximum Content Width',
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
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'customMaxWidth',
          title: 'Custom Max Width',
          type: 'string',
          description: "CSS width value (e.g., '1200px', '90rem')",
          hidden: ({parent}) => parent?.maxWidth !== 'custom',
        }),
        defineField({
          name: 'spacing',
          title: 'Spacing Scale',
          type: 'object',
          fields: [
            defineField({
              name: 'small',
              title: 'Small Spacing (rem)',
              type: 'number',
              initialValue: 0.5,
              validation: (rule) => rule.min(0.25).max(2),
            }),
            defineField({
              name: 'medium',
              title: 'Medium Spacing (rem)',
              type: 'number',
              initialValue: 1,
              validation: (rule) => rule.min(0.5).max(4),
            }),
            defineField({
              name: 'large',
              title: 'Large Spacing (rem)',
              type: 'number',
              initialValue: 2,
              validation: (rule) => rule.min(1).max(8),
            }),
            defineField({
              name: 'extraLarge',
              title: 'Extra Large Spacing (rem)',
              type: 'number',
              initialValue: 4,
              validation: (rule) => rule.min(2).max(16),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'components',
      title: 'Component Styles',
      type: 'object',
      fields: [
        defineField({
          name: 'buttons',
          title: 'Button Styles',
          type: 'object',
          fields: [
            defineField({
              name: 'borderRadius',
              title: 'Border Radius',
              type: 'string',
              options: {
                list: [
                  {title: 'None', value: '0'},
                  {title: 'Small', value: '4px'},
                  {title: 'Medium', value: '8px'},
                  {title: 'Large', value: '12px'},
                  {title: 'Full', value: '9999px'},
                ],
              },
              initialValue: '8px',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'padding',
              title: 'Button Padding',
              type: 'object',
              fields: [
                defineField({
                  name: 'vertical',
                  title: 'Vertical (rem)',
                  type: 'number',
                  initialValue: 0.75,
                }),
                defineField({
                  name: 'horizontal',
                  title: 'Horizontal (rem)',
                  type: 'number',
                  initialValue: 1.5,
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'cards',
          title: 'Card Styles',
          type: 'object',
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
            defineField({
              name: 'backgroundColor',
              title: 'Navigation Background',
              type: 'color',
              description: 'Background color for navigation bar',
            }),
            defineField({
              name: 'linkSpacing',
              title: 'Link Spacing (rem)',
              type: 'number',
              initialValue: 1.5,
              validation: (rule) => rule.min(0.5).max(4),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'customCSS',
      title: 'Custom CSS',
      type: 'text',
      description: 'Additional CSS to inject into the site (use sparingly)',
      rows: 10,
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
  title: 'Active Style',
  type: 'document',
  description: 'Select which style configuration is currently active',
  fields: [
    defineField({
      name: 'title',
      title: 'Settings Title',
      type: 'string',
      initialValue: 'Active Style Configuration',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'activeConfig',
      title: 'Active Style Configuration',
      type: 'reference',
      to: [{type: 'styleConfig'}],
      description: 'Select which style configuration should be applied to the website',
      validation: (rule) => rule.required(),
      options: {
        filter: () => ({
          filter: "_type == 'styleConfig'",
        }),
      },
    }),
  ],
  preview: {
    select: {
      activeConfigTitle: 'activeConfig.title',
      activeConfigTheme: 'activeConfig.theme.colorScheme',
    },
    prepare({activeConfigTitle, activeConfigTheme}) {
      return {
        title: 'Active Style Configuration',
        subtitle: activeConfigTitle
          ? `Currently using: ${activeConfigTitle} (${activeConfigTheme || 'light'} theme)`
          : 'No active configuration selected',
        media: CogIcon,
      }
    },
  },
})

// Export both types
export const styleType = styleConfigType
