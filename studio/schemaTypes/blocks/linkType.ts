import {defineType, defineField} from 'sanity'

export const linkType = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Display Title',
      type: 'string',
      description: 'The text that will be displayed for this link',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'The web address this link should point to',
      validation: (rule) =>
        rule.required().uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
    },
  },
})
