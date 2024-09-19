import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { value: 'general', title: 'General' },
          { value: 'travel_grants', title: 'Kreative Travel Grants' },
          { value: 'labs', title: 'Kreative Horizon Labs' },
          { value: 'events', title: 'Events' },
          { value: 'hackathons', title: 'Hackathons' },
          { value: 'datathons', title: 'Datathons' },
          { value: 'design_jams', title: 'Design Jams' },
          { value: 'pitch_offs', title: 'Pitch Offs' },
        ],
        layout: 'radio',
      },
    })
  ],
})
