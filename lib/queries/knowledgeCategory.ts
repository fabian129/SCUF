import { client } from '@/lib/sanity'

export interface KnowledgeCategory {
  _id: string
  title: string
  description: string
  slug: { current: string }
  icon: string
  colorTheme: 'blue' | 'orange' | 'green' | 'yellow' | 'purple' | 'pink'
  order?: number
}

export async function getKnowledgeCategories(): Promise<KnowledgeCategory[]> {
  return client.fetch(
    `*[_type == "knowledgeCategory"] | order(order asc) {
      _id, title, description, slug, icon, colorTheme, order
    }`
  )
}
