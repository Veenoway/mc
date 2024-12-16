import { Button } from "@/components/button";
import { exempleRecipes } from "../home/constant";
import { RecipeCards } from "./components/cards";

export const Recipes = () => {
  return (
    <div className="">
      <div className="bg-[url('/backgrounds/gradient-dark.png')] bg-no-repeat bg-cover h-[500px]">
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex items-center h-full">
            <div className="flex flex-col justify-center">
              <h1 className="text-white text-7xl font-bold leading-tight">
                Find Recipe made <br />
                by Nads from <br />
                all around the world
              </h1>
              <p className="text-[rgba(255,255,255,0.7)] text-xl font-normal max-w-[800px] mt-[30px]">
                Your Go-To destination for Nourishing And Delicious Culinary
                Inspiration Your Go-To destination for Nourishing And Delicious
                Culinary Inspiration
              </p>
            </div>
            <img src="/monad_logo_purple.png" className="h-[300px] ml-auto" />
          </div>{" "}
          <div className="">
            <div className="w-full flex items-center my-5">
              <Button className="bg-[#37363c] rounded text-sm px-3">
                All Country{" "}
              </Button>
              <Button className="ml-5 bg-[#37363c] rounded text-sm px-3">
                All Difficulty
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-5">
              {exempleRecipes.map(
                (
                  { author, image, url, difficulty, title, flag, description },
                  i
                ) => (
                  <RecipeCards
                    key={i}
                    title={title}
                    flag={flag}
                    image={image}
                    description={description}
                    author={author}
                    difficulty={difficulty}
                  />
                )
              )}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
