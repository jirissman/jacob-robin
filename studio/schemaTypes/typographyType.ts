import {defineType, defineField} from 'sanity'
import {TextIcon} from '@sanity/icons'
import {DEFAULT_TYPOGRAPHY, FONT_OPTIONS} from '../../shared/defaults'

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
      name: 'sansSerifFont',
      title: 'Sans-serif Font',
      type: 'string',
      options: {
        list: FONT_OPTIONS.sansSerif,
      },
    }),
    defineField({
      name: 'serifFont',
      title: 'Serif Font',
      type: 'string',
      options: {
        list: FONT_OPTIONS.serif,
      },
    }),
    defineField({
      name: 'monospaceFont',
      title: 'Monospace Font',
      type: 'string',
      options: {
        list: FONT_OPTIONS.monospace,
      },
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
          initialValue: DEFAULT_TYPOGRAPHY.fontSize.mobile,
          validation: (rule) => rule.min(12).max(24).required(),
        }),
        defineField({
          name: 'desktop',
          title: 'Desktop (px)',
          type: 'number',
          initialValue: DEFAULT_TYPOGRAPHY.fontSize.desktop,
          validation: (rule) => rule.min(14).max(28).required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lineHeight',
      title: 'Line Height',
      type: 'number',
      description: 'Line height multiplier (e.g., 1.5 for 150%)',
      initialValue: DEFAULT_TYPOGRAPHY.lineHeight,
      validation: (rule) => rule.min(1).max(3).precision(2),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      sansSerifFont: 'sansSerifFont',
      serifFont: 'serifFont',
      monospaceFont: 'monospaceFont',
    },
    prepare({title, sansSerifFont, serifFont, monospaceFont}) {
      const fonts = [sansSerifFont, serifFont, monospaceFont].filter(Boolean)
      const fontDisplay = fonts.length > 0 ? fonts.join(', ') : 'No fonts selected'

      return {
        title: title || 'Untitled Typography',
        subtitle: `Fonts: ${fontDisplay}`,
        media: TextIcon,
      }
    },
  },
})
