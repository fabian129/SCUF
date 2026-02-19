import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './studio/schemaTypes'

export default defineConfig({
  name: 'scuf',
  title: 'SCUF',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
