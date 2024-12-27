import recipes from "@/api/recipes.json";
import { Recipe } from "@/feature/recipe";

async function fetchAssetData({ params }) {
  const options = { method: "GET" };

  const test = recipes.recipes.find((entry) => entry.id === params.recipe[0]);

  return test;
}

export default async function RecipePage({ params }) {
  const data = await fetchAssetData({ params });

  return <Recipe data={data} />;
}
