import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: {
        include: '**/*',
        exclude: ['**/articles/**'],
      },
    }),
    articles: defineCollection({
      type: 'page',
      source: {
        include: 'articles/**/*',
      },
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),
        tags: z.array(z.string()).optional(),
        published: z.boolean().default(true),
      }),
    }),
  },
})
