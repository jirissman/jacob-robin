import {defineType, defineField} from 'sanity'
import {TextIcon} from '@sanity/icons'

export const typographyType = defineType({
  name: 'typography',
  title: 'Typography',
  type: 'document',
  description: 'Typography configuration for the website',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Typography Name',
      type: 'string',
      description: 'Name for this typography configuration',
      validation: (rule) => rule.required(),
    }),
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
      description:
        'CSS font-family value (see https://www.w3.org/Style/Examples/007/fonts.en.html for examples)',
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
  preview: {
    select: {
      title: 'title',
      fontFamily: 'fontFamily',
    },
    prepare({title, fontFamily}) {
      return {
        title: title || 'Untitled Typography',
        subtitle: `Font: ${fontFamily || 'system-ui'}`,
        media: TextIcon,
      }
    },
  },
})
