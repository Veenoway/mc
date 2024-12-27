"use client";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import authorData from "./author.json";
import recipeData from "./recipes.json";

const RecipeReviewSchema = z.object({
  authorID: z.string(),
  date: z.number(),
  rating: z.number().min(1).max(5),
  comment: z.string(),
  images: z.array(z.string()),
});

const RatingSchema = z.object({
  average: z.number(),
  total_reviews: z.number(),
  reviews: z.array(RecipeReviewSchema),
});

const RecipeSchema = z.object({
  id: z.string(),
  name: z.string(),
  authorID: z.string(),
  rating: RatingSchema,
  description: z.string(),
  country: z.string(),
  categories: z.array(z.string()),
  created_at: z.number(),
  images: z.array(z.string()),
  duration: z.string(),
  difficulty: z.string(),
  recipe: z.string(),
});

const RecipesSchema = z.object({
  recipes: z.array(RecipeSchema),
});

const AuthorSchema = z.object({
  authorID: z.string(),
  username: z.string(),
  email: z.string(),
  avatar: z.string(),
  bio: z.string(),
  created_at: z.number(),
  grade: z.string(),
  badges: z.array(z.string()),
  stats: z.object({
    recipes_count: z.number(),
    followers_count: z.number(),
    following_count: z.number(),
  }),
  specialties: z.array(z.string()),
  verified: z.boolean(),
  location: z.object({
    city: z.string(),
    country: z.string(),
  }),
});

const AuthorsSchema = z.object({
  authors: z.array(AuthorSchema),
});

export type Recipe = z.infer<typeof RecipeSchema>;
export type Recipes = z.infer<typeof RecipesSchema>;
export type Author = z.infer<typeof AuthorSchema>;
export type Authors = z.infer<typeof AuthorsSchema>;

export function useRecipes() {
  return useQuery<Recipes["recipes"]>({
    queryKey: ["recipes"],
    queryFn: () => Promise.resolve(recipeData.recipes),
  });
}

export function useAuthor() {
  return useQuery<Authors["authors"]>({
    queryKey: ["authors"],
    queryFn: () => Promise.resolve(authorData.authors),
  });
}

export function useSpecificAuthor(authorId: string) {
  const { data: authors } = useAuthor();
  return useQuery<Author | undefined>({
    queryKey: ["authors", authorId],
    queryFn: () =>
      Promise.resolve(authors?.find((author) => author.authorID === authorId)),
    enabled: !!authors && !!authorId,
  });
}
