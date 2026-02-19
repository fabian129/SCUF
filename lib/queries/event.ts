import { client } from '@/lib/sanity'

export interface Event {
  _id: string
  title: string
  slug: { current: string }
  category: 'Läger' | 'Träff' | 'Resa' | 'Möte'
  date: string
  dateDisplay?: string   // Free-text override, e.g. "Sportlovet v.7"
  location: string
  price: string
  status?: 'Öppen anmälan' | 'Få platser kvar' | 'Fullbokad'
  image?: any
  description?: any[]
}

export async function getUpcomingEvents(): Promise<Event[]> {
  return client.fetch(
    `*[_type == "event"] | order(date asc) {
      _id, title, slug, category, date, dateDisplay, location, price, status, image
    }`
  )
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  return client.fetch(
    `*[_type == "event" && slug.current == $slug][0] {
      _id, title, slug, category, date, dateDisplay, location, price, status, image, description
    }`,
    { slug }
  )
}
