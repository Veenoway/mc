import { z } from "zod";

const RecipeReviewSchema = z.object({
  authorID: z.string(),
  date: z.number(),
  rating: z
    .number()
    .min(1)
    .max(5)
    .refine((val) => val % 0.5 === 0, {
      message: "must be multiple of 0.5",
    }),
  comment: z
    .string()
    .min(1, "Comment can't be empty")
    .max(500, "Comment too long"),
  images: z.array(z.string().url()).optional().default([]),
});

const RecipeRatingSchema = z.object({
  average: z
    .number()
    .min(0)
    .max(5)
    .refine((val) => val % 0.1 === 0, {
      message: "must rounded to a decimal",
    }),
  total_reviews: z.number().min(0),
  reviews: z.array(RecipeReviewSchema),
});

const RecipeSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  authorID: z.string(),
  rating: RecipeRatingSchema,
  description: z.string().min(10),
  country: z.string(),
  categories: z.array(z.string()),
  created_at: z.number(),
  images: z.array(z.string()),
  duration: z.string(),
  difficulty: z.enum(["Easy", "Intermediate", "Difficult"]),
  recipe: z.string().min(1),
});

const RecipesSchema = z.object({
  recipes: z.array(RecipeSchema),
});

export type RecipeReview = z.infer<typeof RecipeReviewSchema>;
export type Recipe = z.infer<typeof RecipeSchema>;
export type Recipes = z.infer<typeof RecipesSchema>;
