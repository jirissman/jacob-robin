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
      group: 'globalStyles',
      initialValue: initialValues.primaryColor,
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'color',
      description: 'Secondary brand color for accents',
      group: 'globalStyles',
      initialValue: initialValues.secondaryColor,
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      description: 'Main background color',
      group: 'globalStyles',
      initialValue: initialValues.backgroundColor,
    }),
    defineField({
      name: 'surfaceColor',
      title: 'Surface Color',
      type: 'color',
      description: 'Color for elevated surfaces like cards, headers, etc.',
      group: 'globalStyles',
      initialValue: initialValues.surfaceColor,
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'color',
      description: 'Primary text color',
      group: 'globalStyles',
      initialValue: initialValues.textColor,
    }),
    defineField({
      name: 'borderColor',
      title: 'Border Color',
      type: 'color',
      description: 'Color for borders and dividers',
      group: 'globalStyles',
      initialValue: initialValues.borderColor,
    }),
    defineField({
      name: 'cardBorderColor',
      title: 'Card Border Color',
      type: 'color',
      description: 'Color for card borders',
      group: 'cardStyles',
    }),
    defineField({
      name: 'cardBackgroundColor',
      title: 'Card Background Color',
      type: 'color',
      description: 'Background color for cards',
      group: 'cardStyles',
    }),
    defineField({
      name: 'cardHoverColor',
      title: 'Card Hover Color',
      type: 'color',
      description: 'Background color for cards on hover',
      group: 'cardStyles',
    }),
    defineField({
      name: 'cardTextColor',
      title: 'Card Text Color',
      type: 'color',
      description: 'Text color for cards',
      group: 'cardStyles',
    }),
    defineField({
      name: 'cardTextHoverColor',
      title: 'Card Text Hover Color',
      type: 'color',
      description: 'Text color for cards on hover',
      group: 'cardStyles',
    }),
    defineField({
      name: 'cardImageBorderColor',
      title: 'Card Image Border Color',
      type: 'color',
      description: 'Border color for card images',
      group: 'cardStyles',
    }),
    defineField({
      name: 'headerBackgroundColor',
      title: 'Header Background Color',
      type: 'color',
      description: 'Background color for the header',
      group: 'headerStyles',
    }),
    defineField({
      name: 'headerBorderColor',
      title: 'Header Border Color',
      type: 'color',
      description: 'Border color for the header',
      group: 'headerStyles',
    }),
    defineField({
      name: 'titleTextColor',
      title: 'Title Text Color',
      type: 'color',
      description: 'Text color for the site title',
      group: 'headerStyles',
    }),
    defineField({
      name: 'navTextColor',
      title: 'Nav Text Color',
      type: 'color',
      description: 'Text color for navigation links (about/theme)',
      group: 'headerStyles',
    }),
    defineField({
      name: 'titleTextHoverColor',
      title: 'Title Text Hover Color',
      type: 'color',
      description: 'Text color for the site title on hover',
      group: 'headerStyles',
    }),
    defineField({
      name: 'navTextHoverColor',
      title: 'Nav Text Hover Color',
      type: 'color',
      description: 'Text color for navigation links on hover',
      group: 'headerStyles',
    }),
  ]
}
