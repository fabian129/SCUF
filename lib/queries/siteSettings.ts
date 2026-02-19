import { client } from '@/lib/sanity'

export interface SiteSettings {
  memberCount?: string
  foundedYear?: string
  volunteerCount?: string
  campsPerYear?: string
  contactEmail?: string
  visitingAddress?: string
  orgNumber?: string
  bankgiroNumber?: string
  swishNumber?: string
  instagramUrl?: string
  facebookUrl?: string
  footerTagline?: string
}

// Fallback used when the siteSettings document hasn't been created yet in Studio
export const siteSettingsFallback: SiteSettings = {
  memberCount: '18 000+',
  foundedYear: '1975',
  volunteerCount: '100+',
  campsPerYear: '10+',
  contactEmail: 'info@scuf.se',
  visitingAddress: 'Tegelviksgatan 40\n116 41 Stockholm',
  orgNumber: '815201-3861',
  bankgiroNumber: '5770-1732',
  swishNumber: '123 588 56 45',
  footerTagline: 'Tillsammans gör vi vardagen med celiaki lite lättare.',
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await client.fetch(
    `*[_type == "siteSettings"][0] {
      memberCount, foundedYear, volunteerCount, campsPerYear,
      contactEmail, visitingAddress, orgNumber, bankgiroNumber, swishNumber,
      instagramUrl, facebookUrl, footerTagline
    }`
  )
  // If the document doesn't exist yet, fall back to hardcoded defaults
  return data ?? siteSettingsFallback
}
