import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Styrelsemedlem',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Namn',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'role',
      title: 'Roll / Titel',
      type: 'string',
      description: 'T.ex. "Ordförande" eller "Vice ordförande"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Kort beskrivning',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Porträttbild',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Sorteringsordning',
      type: 'number',
      description: 'Lägre nummer visas först. T.ex. Ordförande = 1',
      initialValue: 99,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})
