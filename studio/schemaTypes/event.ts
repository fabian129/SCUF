import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Aktivitet / Läger',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Namn på aktiviteten',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Läger', value: 'Läger' },
          { title: 'Träff', value: 'Träff' },
          { title: 'Resa', value: 'Resa' },
          { title: 'Möte', value: 'Möte' },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'date',
      title: 'Datum',
      type: 'datetime',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'dateDisplay',
      title: 'Visningsdatum (fritext)',
      type: 'string',
      description: 'T.ex. "14-20 Juni" eller "Sportlovet v.7" — visas på kortet om ifyllt',
    }),
    defineField({
      name: 'location',
      title: 'Plats',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'price',
      title: 'Pris',
      type: 'string',
      description: 'T.ex. "500 kr" eller "Gratis"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Öppen anmälan', value: 'Öppen anmälan' },
          { title: 'Få platser kvar', value: 'Få platser kvar' },
          { title: 'Fullbokad', value: 'Fullbokad' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Beskrivning',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      date: 'date',
      media: 'image',
    },
    prepare({ title, category, date, media }) {
      const dateStr = date ? new Date(date).toLocaleDateString('sv-SE') : ''
      return {
        title,
        subtitle: `${category ?? ''} — ${dateStr}`,
        media,
      }
    },
  },
})
