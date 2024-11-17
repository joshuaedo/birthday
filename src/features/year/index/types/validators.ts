import { z } from 'zod';

export const AllReviewsValidator = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  author: z.object({
    name: z.string(),
  }),
  date: z.string(),
  excerpt: z.string(),
  coverImage: z.object({
    url: z.string(),
    id: z.string(),
  }),
});

export const SingleReviewValidator = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  author: z.object({
    name: z.string(),
    picture: z.object({
      url: z.string(),
    }),
  }),
  content: z.object({
    raw: z.any(),
  }),
  date: z.string(),
  updatedAt: z.string(),
  excerpt: z.string(),
  coverImage: z.object({
    url: z.string(),
    id: z.string(),
  }),
});

export type AllReviewsType = z.infer<typeof AllReviewsValidator>;

export type SingleReviewType = z.infer<typeof SingleReviewValidator>;
