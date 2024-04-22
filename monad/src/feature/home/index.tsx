"use client";
import { fetchDiscordMemes } from "@/api/fetchDiscordMemes";
import { Card } from "@/components/card";
import { ExtraLargeFont, LargeFont, MediumFont } from "@/components/font";
import { HeroParallax } from "@/components/hero-parralax";
import { useQuery } from "@tanstack/react-query";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ScrollTrigger, gsap } from "gsap/all";
import { useEffect, useMemo } from "react";
import { ConnectPeople } from "./components/connect-people";
import { OddBox } from "./components/odd-box";
import { characters, infos } from "./constant";
gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    gsap.fromTo(
      ".moving-right",
      {
        x: 150,
      },
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".container-box",
          start: "top 100%",
          end: "top 20%",

          toggleClass: "red",
          scrub: true,
          pinSpacing: true,
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      ".moving-right",
      {
        x: 0,
      },
      {
        x: 150,
        duration: 1,
        scrollTrigger: {
          trigger: ".container-box",
          start: "bottom 60%",
          end: "bottom 0%",

          toggleClass: "red",
          scrub: true,
          pinSpacing: true,
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      ".moving-left",
      {
        x: -150,
      },
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".container-box",
          start: "top 100%",
          end: "top 20%",

          toggleClass: "red",
          scrub: true,
          pinSpacing: true,
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      ".moving-left",
      {
        x: 0,
      },
      {
        x: -150,
        duration: 1,
        scrollTrigger: {
          trigger: ".container-box",
          start: "bottom 60%",
          end: "bottom 0%",

          toggleClass: "red",
          scrub: true,
          pinSpacing: true,
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      ".title",
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".container-box",
          start: "top 100%",
          end: "top 20%",

          toggleClass: "red",
          scrub: true,
          pinSpacing: true,
          toggleActions: "restart none none none",
        },
      }
    );

    let stars = document.getElementById("stars");
    let moon = document.getElementById("moon");
    let mountains_back = document.getElementById("mountains_back");
    let mountains_front = document.getElementById("mountains_front");
    let btn = document.getElementById("btn-letsgo");
    let header = document.querySelector("header");

    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      stars.style.left = value * 0.25 + "px";
      moon.style.top = value * 1.05 + "px";
      mountains_back.style.top = value * 0.5 + "px";
      mountains_front.style.top = value * 0 + "px";
      btn.style.marginTop = value * 1 + "px";
      header.style.top = value * 0.5 + "px";
    });
  }, []);
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Calculez le décalage à appliquer à chaque image en fonction de la position de la souris
  const xOffset1 = useTransform(mouseX, [0, window.innerWidth], [-0, 0]);
  const yOffset1 = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

  const xOffset2 = useTransform(mouseX, [0, window.innerWidth], [30, -10]);
  const yOffset2 = useTransform(mouseY, [0, window.innerHeight], [20, -10]);

  const xOffset3 = useTransform(mouseX, [0, window.innerWidth], [10, -10]);
  const yOffset3 = useTransform(mouseY, [0, window.innerHeight], [10, -10]);

  const parallaxRangeScroll = [0, window.innerHeight * 0.5]; // Ajustez selon vos préférences

  // Calculer l'échelle en fonction du déplacement du scroll
  const scale = useTransform(scrollY, parallaxRangeScroll, [1, 1.1]);
  console.log("memememe", memesFormatted);

  return (
    <div className="relative bg-[url('https://web.archive.org/web/20211118123617/https://www.illuvium.io/images/backgrounds/1440x900.jpg')] bg-fixed bg-cover overflow-hidden">
      {/* <section className="home-section">
        <img
          src="https://raw.githubusercontent.com/Ryoley/moonlight-parallax/main/assets/images/stars.png"
          alt="Stars overlay"
          id="stars"
        />
        <img
          src="https://raw.githubusercontent.com/Ryoley/moonlight-parallax/main/assets/images/moon.png"
          alt="Moon"
          id="moon"
        />
        <img
          src="https://raw.githubusercontent.com/Ryoley/moonlight-parallax/main/assets/images/mountains_back.png"
          alt="Mountains back"
          id="mountains_back"
        />
        <ExtraLargeFont>Monad</ExtraLargeFont>
        <img
          src="https://raw.githubusercontent.com/Ryoley/moonlight-parallax/main/assets/images/mountains_front.png"
          alt="Mountains front"
          id="mountains_front"
        />
      </section> */}
      <div style={{ width: "100vw", height: "110vh" }}>
        {/* Conteneur pour limiter l'affichage des images */}
        <div
          style={{ width: "100%", height: "100%" }}
          onMouseMove={(event) => {
            mouseX.set(event.clientX);
            mouseY.set(event.clientY);
          }}
          className="relative"
        >
          <div className="flex flex-col absolute top-[10%] left-1/2 -translate-x-1/2 z-10">
            <ExtraLargeFont className="text-black text-center leading-[60px]">
              Embark on Your Legendary Journey
            </ExtraLargeFont>
            <MediumFont className="text-black text-center mt-5">
              Step into a realm of adventure and mystery, inspired by the
              legendary characters of Monad. Immerse yourself in this
              captivating universe where Chog, Moyaki, and Molandak come to
              life, leading you through exhilarating challenges and epic
              competitions.
            </MediumFont>{" "}
          </div>
          <motion.img
            src="/parralax/skycc.png"
            className="absolute z-0 top-0"
          />
          <motion.img
            src="/parralax/BG.png"
            className="absolute -bottom-[5vh]"
            style={{ x: xOffset3, y: yOffset3, scale }}
          />
          <motion.img
            src="/parralax/MG.png"
            className="absolute z-2 -bottom-[10vh]"
            style={{ x: xOffset2, y: yOffset2, scale }}
          />
          <motion.img
            src="/parralax/FGchog.png"
            className="absolute -bottom-[10vh] z-3 scale-105"
            style={{ x: xOffset1, y: yOffset1, scale }}
          />
        </div>
      </div>
      <div className="w-full max-w-7xl flex flex-col mx-auto my-[350px]">
        {infos.map((content, i) => (
          <OddBox content={content} odd={i % 2 === 1} />
        ))}
      </div>
      {/* <div className="h-screen w-screen flex items-center relative bg-red-400 overflow-hidden">
        <img src="/parralax/skycc.png" className=" absolute z-0 top-0" />
        <img src="/parralax/BG.png" className="absolute -bottom-[15vh]" />
        <img src="/parralax/MG.png" className=" absolute z-2 -bottom-[20vh]" />
        <img
          src="/parralax/FGchog.png"
          className=" absolute -bottom-[25vh] z-3"
        />

        <div className="flex flex-col absolute top-[10%] left-1/2 -translate-x-1/2">
          <ExtraLargeFont className="text-black text-center leading-[60px]">
            Embark on Your Legendary Journey
          </ExtraLargeFont>
          <MediumFont className="text-black text-center mt-5">
            Step into a realm of adventure and mystery, inspired by the
            legendary characters of Monad. Immerse yourself in this captivating
            universe where Chog, Moyaki, and Molandak come to life, leading you
            through exhilarating challenges and epic competitions.
          </MediumFont>{" "}
        </div>
      </div> */}
      {/* <div className="flex flex-col justify-center items-center h-screen w-screen ">
        {/* <div className="-mt-10">
          <AnimatedText
            title="Welcome to Monad Lore!"
            delay={1}
            bold={true}
            duration={0.2}
          />
          <AnimateOpacity
            title={
              <LargeFont>
                "Monad Lore has been created for and by Monad's community. "
              </LargeFont>
            }
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
        </div>{" "} */}
      {/* <LampContainer>
        </LampContainer> */}
      {/* <ExtraLargeFont className="z-10 pointer-events-none text-[100px] font-extrabold">
          Welcome to Monad Lore!
        </ExtraLargeFont>
      </div>  */}
      {/* bg-gradient-to-tr from-background-dark-purple to-background-purple */}
      <div className="flex flex-col justify-center items-center pt-[150px] pb-[200px]  w-screen">
        <LargeFont className="z-10 text-6xl font-bold pointer-events-none uppercase">
          Select your team now!
        </LargeFont>
        <MediumFont className="z-10 text-80 mt-10 pointer-events-none max-w-[700px] text-center">
          Select a character to begin with. By choosing a team you will be able
          to help this house to earn points by winning chess games!
        </MediumFont>

        <div className="max-w-[1200px] flex w-full justify-between mt-[100px] z-10">
          {characters.map((character, i) => (
            <Card key={character.title} content={character} />
          ))}
        </div>
      </div>
      <div className="w-screen bg-cover my-[300px] border-t border-b border-[rgba(255,255,255,0.1)] shadow-2xl flex justify-center items-center bg-[url('/backgrounds/gradient-dark.png')] h-[300px] z-10 bg-center relative overflow-hidden container-box">
        {/* <div className="bg-background-dark-purple z-10 h-[200px] w-[800px] absolute -rotate-[8deg] -top-[150px] -left-[150px] " />
        <div className="bg-background-dark-purple z-10 h-[200px] w-[800px] absolute rotate-[8deg] -top-[150px] -right-[150px]" />
        <div className="bg-background-dark-purple z-10 h-[200px] w-[800px] absolute rotate-[8deg] -bottom-[150px] -left-[150px]" />
        <div className="bg-background-dark-purple z-10 h-[200px] w-[800px] absolute -rotate-[8deg] -bottom-[150px] -right-[150px]" /> */}
        <div className="flex justify-between absolute w-full">
          <img
            className="moving-left -translate-x-full z-0"
            height="400"
            width="350"
            src="/mafia.webp"
          />
          <img
            className="scale-x-[-1] z-0 moving-right translate-x-full"
            height="400"
            width="350"
            src="/mafia.webp"
          />
        </div>
        <ExtraLargeFont className="title text-[100px] tracking-normal ">
          GMONAD
        </ExtraLargeFont>
      </div>
      {/* <div className="fixed top-0 z-1">
        <BackgroundGradientAnimation />
      </div> */}
      {isLoading ? null : <HeroParallax products={memesFormatted || []} />}
      <ConnectPeople />
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
