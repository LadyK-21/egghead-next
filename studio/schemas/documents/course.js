/* eslint-disable import/no-anonymous-default-export */
import {nanoid} from 'nanoid'
export default {
  name: 'course',
  type: 'document',
  title: 'Course',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      description: 'unique slug for the course, this will go in the URL',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'sharedId',
      type: 'string',
      title: 'Shared ID',
      validation: (Rule) => Rule.required(),
      initialValue: () => nanoid(),
    },
    {
      name: 'productionProcessState',
      title: 'Production Process State',
      type: 'productionProcessState',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Description',
      description: 'A full description of the course.',
    },
    {
      name: 'summary',
      description: 'Short description, like for a tweet',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(180),
      options: {
        maxLength: 180,
      },
    },
    {
      name: 'byline',
      description:
        'Metadata to display on cards (e.g. "Kent C. Dodds • 2h 29m • Course")',
      title: 'Byline',
      type: 'string',
      validation: (Rule) => Rule.max(90),
      options: {
        maxLength: 90,
      },
    },
    {
      name: 'publishedAt',
      description: 'The date this course was published',
      title: 'Published At',
      type: 'date',
    },
    {
      name: 'updatedAt',
      description: 'The last time this resource was meaningfully updated',
      title: 'Updated At',
      type: 'date',
    },
    {
      name: 'image',
      description: 'Links to a full-sized primary image/illustration',
      title: 'Image/Illustration Url',
      type: 'url',
    },
    {
      name: 'softwareLibraries',
      description: 'Versioned Software Libraries',
      title: 'NPM or other Dependencies',
      type: 'array',
      of: [
        {
          type: 'versioned-software-library',
        },
      ],
    },
    {
      name: 'collaborators',
      description:
        'Humans that worked on this resource and get credit for the effort.',
      title: 'Collaborators',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'collaborator'}],
        },
      ],
    },
    {
      name: 'imageIllustrator',
      description: 'Human that illustrated the course cover image',
      title: 'Image Illustrator',
      type: 'reference',
      to: [{type: 'collaborator'}],
    },
    {
      name: 'resources',
      description:
        'Sections or the individual lessons that make up this course',
      title: 'Resources',
      type: 'array',
      of: [
        {
          title: 'Sections and Lessons',
          type: 'reference',
          to: [
            {title: 'Section', type: 'section'},
            {title: 'Lesson', type: 'lesson'},
          ],
        },
      ],
    },

    {
      title: 'Access Level',
      description:
        'Does this course require Pro access or is it a community resource?',
      name: 'accessLevel',
      type: 'string',
      options: {
        list: [
          {title: 'Free', value: 'free'},
          {title: 'Pro', value: 'pro'},
        ],
        layout: 'radio',
      },
      initialValue: 'pro',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Search Indexing State',
      description: 'Is this course ready to be indexed for search?',
      name: 'searchIndexingState',
      type: 'string',
      options: {
        list: [
          {title: 'Hidden', value: 'hidden'},
          {title: 'Indexed', value: 'indexed'},
        ],
        layout: 'radio',
      },
      initialValue: 'hidden',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Rails Course ID',
      description: 'Rails course id',
      name: 'railsCourseId',
      type: 'number',
    },
    {
      title: 'Duration (minutes)',
      description: 'How many minutes does the course take to complete?',
      name: 'durationInMinutes',
      type: 'number',
    },
    {
      name: 'related',
      description:
        'Any content that pairs well with this course (for now just Courses and Resources, but could be Articles, Podcasts, etc.).',
      title: 'Related Resources',
      type: 'array',
      of: [
        {
          type: 'reference',
          title: 'Course/Resource Refs',
          to: [{type: 'resource'}, {type: 'course'}],
        },
      ],
    },
  ],
}
