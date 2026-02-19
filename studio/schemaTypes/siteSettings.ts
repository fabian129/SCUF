import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Sidinställningar',
  type: 'document',
  fields: [
    // Stats (used in AboutStats on Om SCUF page)
    defineField({
      name: 'memberCount',
      title: 'Antal medlemmar (visas på sidan)',
      type: 'string',
      description: 'T.ex. "18 000+" — visas i statistiksektionen',
      initialValue: '18 000+',
    }),
    defineField({
      name: 'foundedYear',
      title: 'Grundades år',
      type: 'string',
      initialValue: '1975',
    }),
    defineField({
      name: 'volunteerCount',
      title: 'Antal ideella',
      type: 'string',
      description: 'T.ex. "100+"',
      initialValue: '100+',
    }),
    defineField({
      name: 'campsPerYear',
      title: 'Läger per år',
      type: 'string',
      description: 'T.ex. "10+"',
      initialValue: '10+',
    }),

    // Contact info (used in ContactSection on Om SCUF page)
    defineField({
      name: 'contactEmail',
      title: 'E-postadress',
      type: 'string',
      initialValue: 'info@scuf.se',
    }),
    defineField({
      name: 'visitingAddress',
      title: 'Besöksadress',
      type: 'text',
      rows: 2,
      description: 'T.ex. "Tegelviksgatan 40\\n116 41 Stockholm"',
      initialValue: 'Tegelviksgatan 40\n116 41 Stockholm',
    }),
    defineField({
      name: 'orgNumber',
      title: 'Organisationsnummer',
      type: 'string',
      initialValue: '815201-3861',
    }),
    defineField({
      name: 'bankgiroNumber',
      title: 'Bankgironummer',
      type: 'string',
      initialValue: '5770-1732',
    }),
    defineField({
      name: 'swishNumber',
      title: 'Swishnummer',
      type: 'string',
      initialValue: '123 588 56 45',
    }),

    // Social links (used in Footer)
    defineField({
      name: 'instagramUrl',
      title: 'Instagram-länk',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook-länk',
      type: 'url',
    }),

    // Footer
    defineField({
      name: 'footerTagline',
      title: 'Footer-tagline',
      type: 'string',
      description: 'Kort text under logotypen i footern',
      initialValue: 'Tillsammans gör vi vardagen med celiaki lite lättare.',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Sidinställningar' }
    },
  },
})
