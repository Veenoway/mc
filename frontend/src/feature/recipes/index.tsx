"use client";
import { useRecipes } from "@/api/fakeFetch";
import { Button } from "@/components/button";
import { RecipeCards } from "./components/cards";
import Hero from "./components/hero";

export const Recipes = () => {
  const { data: recipes, isLoading, error } = useRecipes();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="">
      <div className="bg-[url('/backgrounds/gradient-dark.png')] bg-no-repeat bg-cover h-[500px]">
        <div className="max-w-7xl mx-auto h-full">
          <Hero />
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <div className="w-full flex items-center my-5">
                <Button className="bg-[rgba(255,255,255,0.2)] rounded-lg h-[30px] text-sm px-3.5">
                  All Country{" "}
                </Button>
                <Button className="ml-2.5 bg-[rgba(255,255,255,0.2)] rounded-lg h-[30px] text-sm px-3.5">
                  All Difficulty
                </Button>
                <Button className="ml-2.5 bg-[rgba(255,255,255,0.2)] rounded-lg h-[30px] text-sm px-3.5">
                  Sort by rating
                </Button>
              </div>{" "}
              <Button className="ml-5 bg-[#836EF9] rounded-lg h-[30px] text-sm w-[150px] px-3.5">
                Create Recipe +
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-5">
              {recipes?.map((recipe) => (
                <RecipeCards key={recipe.id} recipe={recipe} />
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
