"use client";
import { useSpecificAuthor } from "@/api/fakeFetch";
import { Recipe } from "@/models/api";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function RecipeCards({ recipe }: Recipe) {
  const { data: author } = useSpecificAuthor(recipe.authorID);
  const router = useRouter();
  return (
    <div
      className="max-w-xs w-full group/card"
      onClick={() => router.push(`/recipe/${recipe.id}`)}
    >
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-50"
        )}
        style={{
          backgroundImage: `url(${recipe.images[0]})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={`/flag/${recipe.country}`}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {author?.username}
            </p>
            <p className="text-sm text-gray-400">{recipe.difficulty}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {recipe.name}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {recipe.description}
          </p>
        </div>
      </div>
    </div>
  );
}
