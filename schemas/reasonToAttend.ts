import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'reason_to_attend',
  title: 'Reason to Attend',
  type: 'document',
  fields: [
    defineField({
      name: 'reason',
      title: 'Reason',
      type: 'string',
    }),
  ],
})
