import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlighted_text',
      title: 'Highlighted Text',
      type: 'text',
      description: 'This is the text that will be highlighted in the testimonial',
    }),
    defineField({
      name: 'fullName',
      title: 'Full name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
      description: 'University name, school name, or company name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: "Major or Position",
      type: 'string',
      description: 'Major or position at the organization or school',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Student', value: 'student' },
          { title: 'Sponsor', value: 'sponsor' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [
          { title: '1 star', value: 1 },
          { title: '2 stars', value: 2 },
          { title: '3 stars', value: 3 },
          { title: '4 stars', value: 4 },
          { title: '5 stars', value: 5 },
        ],
        layout: 'dropdown', // or 'radio' for radio buttons
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      description: "This is used for larger photos",
      options: {
        accept: 'image/*',
      },
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      description: "This is used for small profile picture like photos",
      options: {
        accept: 'image/*',
      },
    }),
  ],
})
