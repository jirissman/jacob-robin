import {type SchemaTypeDefinition} from 'sanity'
import {aboutType} from './aboutType'
import {blockContentType} from './blocks/blockContentType'
import {postType} from './documents/postType'
import {activeStyleType} from './styleType'
import {lightThemeType, darkThemeType} from './themeColorsType'
import {typographyType} from './typographyType'
import {layoutSettingsType} from './layoutSettingsType'

export const schemaTypes: {types: SchemaTypeDefinition[]} = {
  types: [
    aboutType,
    postType,
    blockContentType,
    activeStyleType,
    lightThemeType,
    darkThemeType,
    typographyType,
    layoutSettingsType,
  ],
}
