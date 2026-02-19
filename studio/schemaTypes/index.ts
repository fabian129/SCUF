import { post } from './post'
import { event } from './event'
import { teamMember } from './teamMember'
import { knowledgeCategory } from './knowledgeCategory'
import { siteSettings } from './siteSettings'
import { homePage } from './homePage'

export const schemaTypes = [
  // Documents (lists — client adds/removes these)
  post,
  event,
  teamMember,
  knowledgeCategory,

  // Singletons (one per type — client edits these in place)
  homePage,
  siteSettings,
]
