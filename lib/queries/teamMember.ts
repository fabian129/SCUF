import { client } from '@/lib/sanity'

export interface TeamMember {
  _id: string
  name: string
  role: string
  bio?: string
  image?: any
  order?: number
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return client.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id, name, role, bio, image, order
    }`
  )
}
