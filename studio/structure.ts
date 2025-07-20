import type {StructureResolver} from 'sanity/structure'
import {UserIcon, DocumentIcon, CogIcon, ColorWheelIcon, DropIcon} from '@sanity/icons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .items([
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
      S.divider(),
      S.documentTypeListItem('styleConfig').title('Style Configurations').icon(DropIcon),
      S.listItem()
        .title('Active Style')
        .icon(CogIcon)
        .child(
          S.editor()
            .id('activeStyleEditor')
            .schemaType('activeStyle')
            .documentId('activeStyle')
            .title('Select Active Style Configuration'),
        ),
    ])
