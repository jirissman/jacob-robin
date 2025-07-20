import {defineType} from 'sanity'
import {DropIcon} from '@sanity/icons'
import {themeColorFields} from './blocks/themeColorFields'

export const lightThemeType = defineType({
  name: 'lightTheme',
  title: 'Light Theme Colors',
  type: 'document',
  description: 'Color configuration for light theme',
  icon: DropIcon,
  fields: themeColorFields({
    primaryColor: '#2563eb', // Default light primary color
    secondaryColor: '#f59e0b', // Default light secondary color
    backgroundColor: '#ffffff', // Default light background color
    textColor: '#111827', // Default light text color
  }),
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled Light Theme',
        media: DropIcon,
      }
    },
  },
})

export const darkThemeType = defineType({
  name: 'darkTheme',
  title: 'Dark Theme Colors',
  type: 'document',
  description: 'Color configuration for dark theme',
  icon: DropIcon,
  fields: themeColorFields({
    primaryColor: '#2563eb', // Default dark primary color
    secondaryColor: '#f59e0b', // Default dark secondary color
    backgroundColor: '#111827', // Default dark background color
    textColor: '#f9fafb', // Default dark text color
  }),
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled Dark Theme',
        media: DropIcon,
      }
    },
  },
})
