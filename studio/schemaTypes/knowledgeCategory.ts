import { defineField, defineType } from 'sanity'

export const knowledgeCategory = defineType({
  name: 'knowledgeCategory',
  title: 'Kunskapskategori',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beskrivning',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      description: 'Bestämmer länken, t.ex. "om-celiaki" → /kunskap/om-celiaki',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Ikon (namn)',
      type: 'string',
      description: 'Lucide-ikonnamn, t.ex. "BookOpen", "GraduationCap", "Plane", "Utensils", "Stethoscope", "HeartHandshake"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'colorTheme',
      title: 'Färgtema',
      type: 'string',
      options: {
        list: [
          { title: 'Blå', value: 'blue' },
          { title: 'Orange', value: 'orange' },
          { title: 'Grön (SCUF)', value: 'green' },
          { title: 'Gul (SCUF)', value: 'yellow' },
          { title: 'Lila', value: 'purple' },
          { title: 'Rosa', value: 'pink' },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'order',
      title: 'Sorteringsordning',
      type: 'number',
      description: 'Lägre nummer visas först',
      initialValue: 99,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
