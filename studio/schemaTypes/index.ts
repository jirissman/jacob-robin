import {type SchemaTypeDefinition} from 'sanity'
import {aboutType} from './aboutType'
import {blockContentType} from './blocks/blockContentType'
import {postType} from './documents/postType'
import {styleType, activeStyleType} from './styleType'

export const schemaTypes: {types: SchemaTypeDefinition[]} = {
  types: [aboutType, postType, blockContentType, styleType, activeStyleType],
}
