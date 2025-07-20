import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {schemaTypes} from './schemaTypes'
import {projectId, dataset} from './env'
import {structure} from './structure'

export default defineConfig({
  name: 'jacob-robin',
  title: 'Jacob Robin Studio',
  projectId,
  dataset,
  plugins: [structureTool({structure}), visionTool(), colorInput()],
  schema: schemaTypes,
})
