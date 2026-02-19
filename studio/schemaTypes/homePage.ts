import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Startsida',
  type: 'document',
  fields: [
    // Hero section
    defineField({
      name: 'heroHeadline',
      title: 'Hero — Rubrik',
      type: 'string',
      description: 'Den stora rubriken i hero-sektionen',
      initialValue: 'Tillsammans gör vi vardagen lite lättare',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero — Brödtext',
      type: 'text',
      rows: 3,
      initialValue: 'Svenska Celiakiungdomsförbundet är gemenskapen för dig mellan 0–29 år. Vi skapar mötesplatser, sprider kunskap och kämpar för att ingen ska behöva avstå mat eller aktiviteter.',
    }),
    defineField({
      name: 'heroPrimaryLabel',
      title: 'Hero — Primär knapp (text)',
      type: 'string',
      initialValue: 'Bli medlem gratis',
    }),
    defineField({
      name: 'heroPrimaryLink',
      title: 'Hero — Primär knapp (länk)',
      type: 'string',
      description: 'T.ex. "/bli-medlem"',
      initialValue: '/bli-medlem',
    }),
    defineField({
      name: 'heroSecondaryLabel',
      title: 'Hero — Sekundär knapp (text)',
      type: 'string',
      initialValue: 'Läs mer om oss',
    }),
    defineField({
      name: 'heroSecondaryLink',
      title: 'Hero — Sekundär knapp (länk)',
      type: 'string',
      initialValue: '/om-scuf',
    }),

    // About section (on homepage)
    defineField({
      name: 'aboutBadge',
      title: 'Om-sektion — Badge-text',
      type: 'string',
      description: 'Den lilla etiketten ovanför rubriken, t.ex. "Vad gör vi?"',
      initialValue: 'Vad gör vi?',
    }),
    defineField({
      name: 'aboutHeadline',
      title: 'Om-sektion — Rubrik',
      type: 'string',
      initialValue: 'Vi finns här för dig – hela vägen',
    }),
    defineField({
      name: 'aboutBody',
      title: 'Om-sektion — Brödtext',
      type: 'text',
      rows: 4,
      initialValue: 'Svenska Celiakiungdomsförbundet (SCUF) är en ideell organisation som drivs av och för unga. Vi vet hur det är att leva med celiaki, och vi vet att det blir både roligare och lättare när man gör det tillsammans.',
    }),
    defineField({
      name: 'aboutBullets',
      title: 'Om-sektion — Punktlista',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Raderna i punktlistan under brödtexten',
      initialValue: [
        'Ingen medlemsavgift (0 kr)',
        'För alla mellan 0 och 29 år',
        'Aktiviteter över hela Sverige',
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Startsida' }
    },
  },
})
