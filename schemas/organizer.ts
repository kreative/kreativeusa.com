import { defineField, defineType } from "sanity";

export default defineType({
  name: 'organizer',
  title: 'Organizer',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Organizer Name',
      type: 'string'
    }),
    defineField({
      name: 'logo',
      title: 'Organizer Logo (Cloudinary ID)',
      type: 'string',
      description: "Please use a square logo, uploaded to Cloudinary."
    }),
  ]
})