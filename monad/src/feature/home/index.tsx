"use client";
import { callAnimation } from "@/lib/gsap/home";
import { useEffect } from "react";
import { BoxCharacter } from "./components/box-character";
import { characters } from "./constant";

export const Home = () => {
  useEffect(() => {
    callAnimation();
  }, []);

  return (
    <div>
      <div className="first-box">
        <h1 className="text-white text-[96px] leading-9 -mt-8 mb-[100px] text-shadow-lg title">
          Welcome to Monad Lore
        </h1>
        <img
          src="/monad_logo_purple.png"
          width="350"
          height="350"
          alt="Monad logo"
          className="logo z-[100]"
        />
      </div>
      <div className="second-box">
        <div className="mid-width">
          <h2 className="subtitle"> What is Monad?</h2>
          <div className="description">
            <p id="bought_id" className="text-grey mt-5">
              Monad is an upcoming EVM-equivalent layer-1 blockchain offering
              10,000 tps. We offer the best of both worlds for app developers,
              portability, and extreme performance.
            </p>
          </div>
        </div>
        <div className="mid-width"></div>
      </div>
      <div className="third-box">
        <div className="mid-width"></div>
        <div className="mid-width">
          <h2 className="subtitle-bis">What is Monad’s Mission?</h2>
          <div className="description-bis">
            <p id="provider" className="text-gray text-[30px] mt-5">
              The value of decentralization has been demonstrated in the past
              years; what developers can accomplish with a permissionless
              development sandbox has the potential to leapfrog centralized
              solutions. The main challenge developers face is throughput and
              compute cost, Monad addresses these pain points to create the best
              development environment to trailblaze a new age of decentralized
              experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="fourth-box flex flex-col items-center h-screen w-screen bg-red">
        <div className="h-[350px]" />
        <h2 className="text-[72px] leading-[50px] text-white">
          Discover Monad Lore!
        </h2>
        <div className="max-w-[1200px] flex w-full justify-between mt-[100px]">
          {characters.map((character) => (
            <BoxCharacter content={character} />
          ))}
        </div>
        <div className="description-last">
          <p id="provider2"></p>
          <p id="token_amounts"></p>
          <p id="fees"></p>
          <p id="invariant"></p>
          <p id="token_supply"></p>
        </div>
      </div>
    </div>
  );
};
