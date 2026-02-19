import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

// Fail loudly in development if env vars are missing.
// A silent undefined here causes a white screen with no useful error.
if (!projectId || !dataset) {
  throw new Error(
    'Missing Sanity environment variables.\n' +
    'Add NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET to your .env.local file.'
  )
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  // useCdn: false — let Next.js revalidate control caching instead.
  // useCdn: true can serve stale content for up to 60s after a publish,
  // which makes clients think their changes are not working.
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
