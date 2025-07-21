import {defineType, defineField} from 'sanity'
import {DashboardIcon} from '@sanity/icons'
import {DEFAULT_LAYOUT, LAYOUT_WIDTH_OPTIONS} from '../../shared/defaults'

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
        list: LAYOUT_WIDTH_OPTIONS,
      },
      initialValue: DEFAULT_LAYOUT.maxWidth,
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
        subtitle: `Max width: ${maxWidth || DEFAULT_LAYOUT.maxWidth}`,
        media: DashboardIcon,
      }
    },
  },
})
