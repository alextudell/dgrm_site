import { defineCollection, z } from 'astro:content';

const legalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    effectiveDate: z.string(),
    lastUpdated: z.string(),
    version: z.string(),
  }),
});

export const collections = {
  legal: legalCollection,
};
