import type {StructureResolver} from 'sanity/structure'
import {
  UserIcon,
  DocumentIcon,
  CogIcon,
  SunIcon,
  MoonIcon,
  TextIcon,
  DashboardIcon,
} from '@sanity/icons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .items([
      S.divider().title('Content'),
      S.documentTypeListItem('post').title('Articles').icon(DocumentIcon),
      S.documentTypeListItem('about')
        .title('About')
        .icon(UserIcon)
        .child(
          S.editor()
            .id('aboutEditor')
            .schemaType('about')
            .documentId('about')
            .title('Edit About Page'),
        ),
      S.divider().title('Style and Theme Settings'),
      S.documentTypeListItem('lightTheme').title('Light Themes').icon(SunIcon),
      S.documentTypeListItem('darkTheme').title('Dark Themes').icon(MoonIcon),
      S.documentTypeListItem('typography').title('Typography Settings').icon(TextIcon),
      S.documentTypeListItem('layoutSettings').title('Layout Settings').icon(DashboardIcon),
      S.listItem()
        .title('Active Style Configuration')
        .icon(CogIcon)
        .child(
          S.editor()
            .id('activeStyleEditor')
            .schemaType('activeStyle')
            .documentId('activeStyle')
            .title('Theme and Style Configuration'),
        ),
    ])
