import { client } from '@/lib/sanity'

export interface HomePage {
  heroHeadline?: string
  heroSubtext?: string
  heroPrimaryLabel?: string
  heroPrimaryLink?: string
  heroSecondaryLabel?: string
  heroSecondaryLink?: string
  aboutBadge?: string
  aboutHeadline?: string
  aboutBody?: string
  aboutBullets?: string[]
}

// Fallback used when the homePage document hasn't been created yet in Studio
export const homePageFallback: HomePage = {
  heroHeadline: 'Tillsammans gör vi vardagen lite lättare',
  heroSubtext: 'Svenska Celiakiungdomsförbundet är gemenskapen för dig mellan 0–29 år. Vi skapar mötesplatser, sprider kunskap och kämpar för att ingen ska behöva avstå mat eller aktiviteter.',
  heroPrimaryLabel: 'Bli medlem gratis',
  heroPrimaryLink: '/bli-medlem',
  heroSecondaryLabel: 'Läs mer om oss',
  heroSecondaryLink: '/om-scuf',
  aboutBadge: 'Vad gör vi?',
  aboutHeadline: 'Vi finns här för dig – hela vägen',
  aboutBody: 'Svenska Celiakiungdomsförbundet (SCUF) är en ideell organisation som drivs av och för unga. Vi vet hur det är att leva med celiaki, och vi vet att det blir både roligare och lättare när man gör det tillsammans.',
  aboutBullets: [
    'Ingen medlemsavgift (0 kr)',
    'För alla mellan 0 och 29 år',
    'Aktiviteter över hela Sverige',
  ],
}

export async function getHomePage(): Promise<HomePage> {
  const data = await client.fetch(
    `*[_type == "homePage"][0] {
      heroHeadline, heroSubtext,
      heroPrimaryLabel, heroPrimaryLink,
      heroSecondaryLabel, heroSecondaryLink,
      aboutBadge, aboutHeadline, aboutBody, aboutBullets
    }`
  )
  return data ?? homePageFallback
}
