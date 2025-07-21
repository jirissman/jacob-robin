import {type SchemaTypeDefinition} from 'sanity'
import {aboutType} from './aboutType'
import {blockContentType} from './blocks/blockContentType'
import {tagType} from './blocks/tagType'
import {categoryType} from './blocks/categoryType'
import {postType} from './documents/postType'
import {activeStyleType} from './activeStyleType'
import {lightThemeType, darkThemeType} from './themeColorsType'
import {typographyType} from './typographyType'
import {layoutSettingsType} from './layoutSettingsType'

export const schemaTypes: {types: SchemaTypeDefinition[]} = {
  types: [
    aboutType,
    postType,
    blockContentType,
    tagType,
    categoryType,
    activeStyleType,
    lightThemeType,
    darkThemeType,
    typographyType,
    layoutSettingsType,
  ],
}
