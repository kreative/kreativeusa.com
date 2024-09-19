import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'season',
  title: 'Season',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'number',
      title: 'Season Number',
      type: 'number',
    }),
    defineField({
      name: 'sponsors',
      title: 'Sponsors',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'sponsor' }] }],
    }),
  ],
})
