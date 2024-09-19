import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'judge',
  title: 'Judge',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'headshot_cld_id',
      title: 'Headshot Cloudinary ID',
      type: 'string',
    }),
  ],
})
