import {defineType} from 'sanity'
import {DropIcon} from '@sanity/icons'
import {themeColorFields} from './blocks/themeColorFields'
import {DEFAULT_COLORS} from '../../shared/defaults'

export const lightThemeType = defineType({
  name: 'lightTheme',
  title: 'Light Theme Colors',
  type: 'document',
  description: 'Color configuration for light theme',
  icon: DropIcon,
  groups: [
    {
      name: 'globalStyles',
      title: 'Global Colors',
    },
    {
      name: 'cardStyles',
      title: 'Card Colors',
    },
    {
      name: 'headerStyles',
      title: 'Header Colors',
    },
    {
      name: 'footerStyles',
      title: 'Footer Colors',
    },
    {
      name: 'articleStyles',
      title: 'Article Colors',
    },
  ],
  fields: themeColorFields({
    textHoverColor: DEFAULT_COLORS.light.textHoverColor,
    secondaryColor: DEFAULT_COLORS.light.secondaryColor,
    backgroundColor: DEFAULT_COLORS.light.backgroundColor,
    surfaceColor: DEFAULT_COLORS.light.surfaceColor,
    textColor: DEFAULT_COLORS.light.textColor,
    borderColor: DEFAULT_COLORS.light.borderColor,
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
  groups: [
    {
      name: 'globalStyles',
      title: 'Global Colors',
    },
    {
      name: 'headerStyles',
      title: 'Header Colors',
    },
    {
      name: 'footerStyles',
      title: 'Footer Colors',
    },
    {
      name: 'cardStyles',
      title: 'Card Colors',
    },
    {
      name: 'articleStyles',
      title: 'Article Colors',
    },
  ],
  fields: themeColorFields({
    textHoverColor: DEFAULT_COLORS.dark.textHoverColor,
    secondaryColor: DEFAULT_COLORS.dark.secondaryColor,
    backgroundColor: DEFAULT_COLORS.dark.backgroundColor,
    surfaceColor: DEFAULT_COLORS.dark.surfaceColor,
    textColor: DEFAULT_COLORS.dark.textColor,
    borderColor: DEFAULT_COLORS.dark.borderColor,
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
