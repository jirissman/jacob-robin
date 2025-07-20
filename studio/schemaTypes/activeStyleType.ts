import {defineType, defineField} from 'sanity'

// Active Style Selector (Singleton)
export const activeStyleType = defineType({
  name: 'activeStyle',
  title: 'Active Style and Theme Configuration',
  type: 'document',
  description: 'Select which style and theme configurations are currently active',
  fields: [
    defineField({
      name: 'title',
      title: 'Settings Title',
      type: 'string',
      initialValue: 'Active Style and Theme Configurations',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'activeConfigLight',
      title: 'Light Theme Colors',
      type: 'reference',
      to: [{type: 'lightTheme'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'activeConfigDark',
      title: 'Dark Theme Colors',
      type: 'reference',
      to: [{type: 'darkTheme'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'activeTypography',
      title: 'Typography',
      type: 'reference',
      to: [{type: 'typography'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'activeLayout',
      title: 'Layout Settings',
      type: 'reference',
      to: [{type: 'layoutSettings'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
