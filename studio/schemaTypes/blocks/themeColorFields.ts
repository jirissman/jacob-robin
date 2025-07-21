import {defineField} from 'sanity'

// Shared theme color fields that both light and dark themes will use
export function themeColorFields(initialValues: {
  primaryColor: string
  secondaryColor: string
  backgroundColor: string
  surfaceColor: string
  textColor: string
  borderColor: string
}) {
  return [
    defineField({
      name: 'title',
      title: 'Theme Name',
      type: 'string',
      description: 'Name for this theme configuration (e.g. "Summer Vibes")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'color',
      description: 'Main brand color used throughout the site',
      initialValue: initialValues.primaryColor,
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'color',
      description: 'Secondary brand color for accents',
      initialValue: initialValues.secondaryColor,
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      description: 'Main background color',
      initialValue: initialValues.backgroundColor,
    }),
    defineField({
      name: 'surfaceColor',
      title: 'Surface Color',
      type: 'color',
      description: 'Color for elevated surfaces like cards, headers, etc.',
      initialValue: initialValues.surfaceColor,
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'color',
      description: 'Primary text color',
      initialValue: initialValues.textColor,
    }),
    defineField({
      name: 'borderColor',
      title: 'Border Color',
      type: 'color',
      description: 'Color for borders and dividers',
      initialValue: initialValues.borderColor,
    }),
  ]
}
