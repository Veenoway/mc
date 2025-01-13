"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import { FileUpload } from "@/components/upload-file";
import { countries } from "@/constants/country";
import { useAuthStore } from "@/hooks/useAuth";
import { calculateDigest } from "@/utils/signature";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface RecipeIngredient {
  id: string;
  name: string;
  quantity: string;
  unit: string;
}

type RecipeInfoType = {
  name: string;
  images: File[];
  categories: string[];
  description: string;
  difficulty: string;
  duration: string;
  country: string;
  recipe: string;
  ingredients: RecipeIngredient[];
};

export default function CreateRecipe() {
  const router = useRouter();
  const { walletAddress, isConnected, connectWallet, calculateSignature } =
    useAuthStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [recipeInfo, setRecipeInfo] = useState<RecipeInfoType>({
    name: "",
    images: [],
    categories: [],
    description: "",
    difficulty: "",
    duration: "",
    country: "",
    recipe: "",
    ingredients: [] as RecipeIngredient[],
  });

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.push("/");
  //   }
  // }, [isAuthenticated, router]);

  console.log("isauth;", walletAddress);

  const uploadImages = async (images: File[]) => {
    try {
      const formData = new FormData();

      if (!walletAddress) {
        throw new Error("Wallet not connected");
      }

      images.forEach((image) => {
        formData.append("files", image);
      });

      formData.append("walletAddress", walletAddress);

      const timestamp = Date.now();
      const signature = await calculateDigest(
        null,
        "/api/upload",
        timestamp,
        true
      );

      const response = await fetch("http://localhost:3030/api/upload", {
        method: "POST",
        headers: {
          signature,
          timestamp: timestamp.toString(),
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload images");
      }

      const data = await response.json();
      console.log("data", data);
      return data.urls;
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!walletAddress) {
      throw new Error("Wallet not connected");
    }

    setLoading(true);
    setError("");

    try {
      // Upload images d'abord
      const imageUrls = await uploadImages(recipeInfo.images);

      // Préparer les données
      const recipeData = {
        walletAddress,
        title: recipeInfo.name,
        description: recipeInfo.description,
        country: recipeInfo.country,
        categories: recipeInfo.categories,
        images: imageUrls,
        duration: recipeInfo.duration,
        difficulty: recipeInfo.difficulty,
        ingredients: recipeInfo.ingredients.map((ing) => ({
          name: ing.name,
          quantity: ing.quantity,
          unit: ing.unit,
        })),
        instructions: recipeInfo.recipe,
      };

      // Obtenir la signature et le timestamp
      const timestamp = Date.now();
      const signature = await calculateDigest(
        recipeData,
        "/api/recipes",
        timestamp
      );

      // Envoyer la requête
      const response = await fetch("http://localhost:3030/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          signature,
          timestamp: timestamp.toString(),
        },
        body: JSON.stringify(recipeData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create recipe");
      }

      const newRecipe = await response.json();

      router.push(`/recipe/${newRecipe.recipe_id}`);
    } catch (err) {
      console.error("Error:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setRecipeInfo({
      ...recipeInfo,
      [e.target.name]: e.target.value,
    });
  };

  const addIngredient = () => {
    setRecipeInfo({
      ...recipeInfo,
      ingredients: [
        ...recipeInfo.ingredients,
        { id: crypto.randomUUID(), name: "", quantity: "", unit: "" },
      ],
    });
  };

  const removeIngredient = (id: string) => {
    setRecipeInfo({
      ...recipeInfo,
      ingredients: recipeInfo.ingredients.filter((ing) => ing.id !== id),
    });
  };

  const updateIngredient = (
    id: string,
    field: keyof RecipeIngredient,
    value: string
  ) => {
    setRecipeInfo({
      ...recipeInfo,
      ingredients: recipeInfo.ingredients.map((ing) =>
        ing.id === id ? { ...ing, [field]: value } : ing
      ),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl text-white mx-auto p-6 pt-[60px] space-y-6"
    >
      <h1 className="text-white font-bold text-3xl">Register your recipe</h1>
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Recipe name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={recipeInfo.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-800 bg-[rgba(255,255,255,0.1)] rounded-md shadow-sm focus:ring-none focus:border-none"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-white"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={recipeInfo.description}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border border-gray-800 bg-[rgba(255,255,255,0.1)] rounded-md shadow-sm focus:ring-none focus:border-none"
          required
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-white"
          >
            Difficulty
          </label>

          <Popover>
            <PopoverTrigger asChild>
              <button className="w-full p-2 border bg-[rgba(255,255,255,0.1)] border-gray-800 rounded-md shadow-sm focus:ring-none focus:border-none">
                {recipeInfo.difficulty || "Choose a difficulty"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 max-h-[400px] overflow-scroll z-100">
              {["Easy", "Medium", "Difficult"].map((difficulty) => (
                <button
                  key={difficulty}
                  className="p-2 px-4 hover:bg-[#836EF9]  transition-colors duration-200 ease-in-out w-full text-start text-white text-sm"
                  onClick={() =>
                    setRecipeInfo((prev) => ({ ...prev, difficulty }))
                  }
                >
                  {difficulty}
                </button>
              ))}
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-white"
          >
            Durée
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={recipeInfo.duration}
            onChange={handleChange}
            placeholder="ex: 1h30"
            className="w-full p-2 border bg-[rgba(255,255,255,0.1)] border-gray-800 rounded-md shadow-sm focus:ring-none focus:border-none"
            required
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-white"
          >
            Country
          </label>

          <Popover>
            <PopoverTrigger asChild>
              <button className="w-full p-2 border bg-[rgba(255,255,255,0.1)] border-gray-800 rounded-md shadow-sm focus:ring-none focus:border-none">
                {recipeInfo.country || "Choose a country"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 max-h-[400px] overflow-scroll z-100">
              <input
                placeholder="Search"
                className="w-full h-[40px] px-4 border-b border-base-border"
                onChange={(e) => setSearchCountry(e.target.value)}
              />
              {countries
                ?.filter((entry) =>
                  entry
                    .toLowerCase()
                    ?.split(" ")
                    ?.join()
                    .includes(searchCountry)
                )
                .map((country) => (
                  <button
                    key={country}
                    className="p-2 px-4 hover:bg-[#836EF9]  transition-colors duration-200 ease-in-out w-full text-start text-white text-sm"
                    onClick={() =>
                      setRecipeInfo((prev) => ({ ...prev, country }))
                    }
                  >
                    {country}
                  </button>
                ))}
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="block text-sm font-medium text-white">
            Ingrédients
          </label>
          <button
            type="button"
            onClick={addIngredient}
            className="px-2 py-1.5 bg-[#836EF9] text-white rounded-md  hover:opacity-90"
          >
            + Ajouter un ingrédient
          </button>
        </div>

        <div className="space-y-3">
          {recipeInfo.ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className="flex gap-2 items-center bg-[rgba(255,255,255,0.05)] p-4 rounded-md"
            >
              <input
                type="text"
                placeholder="Nom"
                value={ingredient.name}
                onChange={(e) =>
                  updateIngredient(ingredient.id, "name", e.target.value)
                }
                className="flex-grow p-2 border border-gray-800 bg-[rgba(255,255,255,0.1)] rounded-md focus:ring-none focus:border-none"
              />
              <input
                type="number"
                placeholder="Quantité"
                value={ingredient.quantity}
                onChange={(e) =>
                  updateIngredient(ingredient.id, "quantity", e.target.value)
                }
                className="w-24 p-2 border border-gray-800 bg-[rgba(255,255,255,0.07)] rounded-md focus:ring-none focus:border-none"
              />
              <select
                value={ingredient.unit}
                onChange={(e) =>
                  updateIngredient(ingredient.id, "unit", e.target.value)
                }
                className="w-24 p-2 border border-gray-800 bg-[rgba(255,255,255,0.07)] rounded-md focus:ring-none focus:border-none"
              >
                <option value="">Unité</option>
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="ml">ml</option>
                <option value="L">L</option>
                <option value="c. à soupe">c. à soupe</option>
                <option value="c. à café">c. à café</option>
                <option value="pièce">piece</option>
              </select>
              <button
                type="button"
                onClick={() => removeIngredient(ingredient.id)}
                className="p-2 text-red-500 hover:text-red-400"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {recipeInfo.ingredients.length === 0 && (
          <p className="text-gray-400 text-sm text-center py-4 bg-[rgba(255,255,255,0.1)] rounded-md">
            No ingredient has been add
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-white">Images</label>
        <FileUpload
          onChange={(file) =>
            setRecipeInfo((prev) => ({
              ...prev,
              images: file,
            }))
          }
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-white">
          Catégories
        </label>
        <div className="flex gap-2 flex-wrap">
          {[
            "Entrée",
            "Plat principal",
            "Dessert",
            "Végétarien",
            "Poisson",
            "Viande",
          ].map((category) => (
            <label key={category} className="inline-flex items-center">
              <input
                type="checkbox"
                value={category}
                onChange={(e) => {
                  const newCategories = e.target.checked
                    ? [...recipeInfo.categories, category]
                    : recipeInfo.categories.filter((c) => c !== category);
                  setRecipeInfo({ ...recipeInfo, categories: newCategories });
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-800 rounded"
              />
              <span className="ml-2 text-sm text-white">{category}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="recipe"
          className="block text-sm font-medium text-white"
        >
          Recipe
        </label>
        <textarea
          id="recipe"
          name="recipe"
          value={recipeInfo.recipe}
          onChange={handleChange}
          rows={7}
          className="w-full p-2 border border-gray-800 bg-[rgba(255,255,255,0.1)] rounded-md shadow-sm focus:ring-none focus:border-none"
          required
        />
      </div>
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-[#836EF9] text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Recipe
        </button>
      </div>
    </form>
  );
}
