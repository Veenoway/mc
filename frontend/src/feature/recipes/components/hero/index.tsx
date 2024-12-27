"use client";

import { FormEvent, useState } from "react";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Recherche pour:", searchQuery);
  };

  return (
    <div className="flex  h-full max-w-7xl mx-auto">
      <div className="flex flex-col justify-center">
        <h1 className="text-white text-5xl font-bold leading-tight">
          Find Recipes made by Nads <br />
          from all around the world
        </h1>
        <p className="text-slate-400 mt-5 font-normal max-w-[600px]">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore
          possimus omnis corrupti ad dolores cupiditate
        </p>
        <form onSubmit={handleSubmit} className="mt-10">
          <div className="flex items-center gap-5">
            <div className="bg-white h-[50px] flex w-[450px] text-black rounded-full border border-base-border">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-full w-full px-5 rounded-full outline-none placeholder:text-[rgba(0,0,0,0.8)]"
                placeholder="Search for recipes, an author etc.."
              />
              <button
                type="submit"
                className="bg-[#836EF9] h-full text-white w-fit px-8 rounded-full border border-base-border hover:opacity-90 transition-opacity"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <img src="/illustration/37.png" className="h-[420px] ml-auto mt-auto" />
    </div>
  );
}
