import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'schedule_item',
  title: 'ScheduleItem',
  type: 'object',
  fields: [
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],
})
