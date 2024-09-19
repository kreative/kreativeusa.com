import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'logo_cld_id',
      title: 'Logo Cloudinary ID',
      type: 'string',
    }),
    defineField({
      name: 'logo_alt',
      title: 'Logo Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'logo_width',
      title: 'Logo Width',
      type: 'number',
    }),
    defineField({
      name: 'logo_height',
      title: 'Logo Height',
      type: 'number',
    }),
  ],
})
