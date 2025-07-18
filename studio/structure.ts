import type {StructureResolver} from 'sanity/structure'
import {UserIcon, DocumentIcon} from '@sanity/icons'

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
    ])
