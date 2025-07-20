import {defineType, defineField} from 'sanity'
import {DashboardIcon} from '@sanity/icons'

export const layoutSettingsType = defineType({
  name: 'layoutSettings',
  title: 'Layout Settings',
  type: 'document',
  description: 'Layout configuration for the website',
  icon: DashboardIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Layout Name',
      type: 'string',
      description: 'Name for this layout configuration',
      validation: (rule) => rule.required(),
    }),
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
      description: 'Maximum width for main content area',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'customMaxWidth',
      title: 'Custom Max Width',
      type: 'string',
      description: "CSS width value (e.g., '1200px', '90rem')",
      hidden: ({parent}) => parent?.maxWidth !== 'custom',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      maxWidth: 'maxWidth',
    },
    prepare({title, maxWidth}) {
      return {
        title: title || 'Untitled Layout',
        subtitle: `Max width: ${maxWidth || '1280px'}`,
        media: DashboardIcon,
      }
    },
  },
})
