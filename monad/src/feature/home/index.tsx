"use client";
import { fetchDiscordMemes } from "@/api/fetchDiscordMemes";
import { AnimateOpacity } from "@/components/animated-opacity";
import { AnimatedText } from "@/components/animated-text";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { LargeFont } from "@/components/font";
import { HeroParallax } from "@/components/hero-parralax";
import { LampContainer } from "@/components/lamp-effect";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { characters } from "./constant";

export const Home = () => {
  const { data: memes, isLoading } = useQuery({
    queryFn: async () => fetchDiscordMemes(),
    queryKey: ["discord-memes"],
  });

  console.log("meme", memes);
  const memesFormatted = useMemo(() => {
    return memes
      ?.filter((_, i) => i < 20)
      ?.map((meme) => {
        return {
          title: meme.author?.global_name || meme.author?.username,
          url: "/",
          image: meme.attachments?.[0]?.url,
        };
      });
  }, [memes]);

  console.log("memememe", memesFormatted);

  return (
    <div className="relative bg-gradient-to-br ">
      <div className="flex flex-col justify-center items-center h-screen w-screen ">
        <LampContainer>
          <div className="-mt-10">
            <AnimatedText
              title="Welcome to Monad Lore!"
              delay={1}
              bold={true}
              duration={0.2}
            />
            <AnimateOpacity
              title="Monad Lore has been created for and by Monad's community"
              delay={1.8}
              duration={0.4}
              id="subtitle-el"
            />
            <AnimateOpacity
              title={<Button className="z-10 mt-10">Join Community</Button>}
              delay={2.6}
              duration={0.4}
              id="button-el"
            />
          </div>
        </LampContainer>
        {/* <ExtraLargeFont className="z-10 pointer-events-none text-[100px] font-extrabold">
          Welcome to Monad Lore!
        </ExtraLargeFont> */}
      </div>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <LargeFont className="z-10 text-6xl font-bold pointer-events-none">
          Select your team now!
        </LargeFont>
        <LargeFont className="z-10 text-80 mt-10 pointer-events-none max-w-[1000px] text-center">
          Select a character to begin with. By choosing a team you will be able
          to help this house to earn points by winning chess games!
        </LargeFont>

        <div className="max-w-[1200px] flex w-full justify-between mt-[100px] z-10">
          {characters
            .filter((_, i) => i < 3)
            .map((character) => (
              <Card key={character.title} content={character} />
            ))}
        </div>
      </div>
      <div className="flex justify-center"></div>
      {/* <div className="fixed top-0 z-1">
        <BackgroundGradientAnimation />
      </div> */}

      {isLoading ? null : <HeroParallax products={memesFormatted || []} />}

      {/* // <GeminiEffect pathLengths={pathLengths} />
    // <div>

    //   {/* <div className="first-box">
    //     <h1 className="text-white text-[96px] leading-9 -mt-8 mb-[100px] text-shadow-lg title">
    Welcome to Monad Lore
    //     </h1>
    //     <img
    //       src="/monad_logo_purple.png"
    //       width="350"
    //       height="350"
    //       alt="Monad logo"
    //       className="logo z-[100]"
    //     />
    //   </div>
    //   <div className="second-box">
    //     <div className="mid-width">
    //       <h2 className="subtitle"> What is Monad?</h2>
    //       <div className="description">
    //         <p id="bought_id" className="text-grey mt-5">
    //           Monad is an upcoming EVM-equivalent layer-1 blockchain offering
    //           10,000 tps. We offer the best of both worlds for app developers,
    //           portability, and extreme performance.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="mid-width"></div>
    //   </div>
    //   <div className="third-box">
    //     <div className="mid-width"></div>
    //     <div className="mid-width">
    //       <h2 className="subtitle-bis">What is Monad’s Mission?</h2>
    //       <div className="description-bis">
    //         <p id="provider" className="text-gray text-[30px] mt-5">
    //           The value of decentralization has been demonstrated in the past
    //           years; what developers can accomplish with a permissionless
    //           development sandbox has the potential to leapfrog centralized
    //           solutions. The main challenge developers face is throughput and
    //           compute cost, Monad addresses these pain points to create the best
    //           development environment to trailblaze a new age of decentralized
    //           experiences.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="fourth-box flex flex-col items-center w-screen bg-red">
    //     <div className="h-[350px]" />
    //     <h2 className="text-[72px] leading-[50px] text-white">
    //       Discover Monad Lore!
    //     </h2>
    //     <div className="max-w-[1200px] flex w-full justify-between mt-[100px]">
    //       {characters.map((character) => (
    //         <BoxCharacter content={character} />
    //       ))}
    //     </div>

    //     <div className="description-last">
    //       <p id="provider2"></p>
    //       <p id="token_amounts"></p>
    //       <p id="fees"></p>
    //       <p id="invariant"></p>
    //       <p id="token_supply"></p>
    //     </div>
    //   </div> 
   </div> */}
    </div>
  );
};
