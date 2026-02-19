import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Nyhet / Artikel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Nyhet', value: 'Nyhet' },
          { title: 'Läger', value: 'Läger' },
          { title: 'Recept', value: 'Recept' },
          { title: 'Tips', value: 'Tips' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publiceringsdatum',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Plats (valfritt, t.ex. för läger)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      title: 'Innehåll',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      tag: 'tag',
      media: 'image',
    },
    prepare({ title, tag, media }) {
      return {
        title,
        subtitle: tag,
        media,
      }
    },
  },
})
