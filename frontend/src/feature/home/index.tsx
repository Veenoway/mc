"use client";
import { Card } from "@/components/card";
import { LargeFont, MediumFont } from "@/components/font";
import { BackgroundGradientAnimation } from "@/components/gradient-background";
import { HeroParallax } from "@/components/hero-parralax";
import {
  MotionValue,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Lenis from "lenis";
import Link from "next/link";
import { useRef } from "react";
import { OddBox } from "./components/odd-box";
import { characters, infos } from "./constant";
import { ParralaxContentProps } from "./models";

type HomeProps = { memes: ParralaxContentProps[] };

export const Home = ({ memes }: HomeProps) => {
  const { scrollY } = useScroll();
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const xOffset1 = useTransform(mouseX, [0, window.innerWidth], [-0, 0]);
  const yOffset1 = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

  const xOffset2 = useTransform(mouseX, [0, window.innerWidth], [30, -10]);
  const yOffset2 = useTransform(mouseY, [0, window.innerHeight], [20, -10]);

  const xOffset3 = useTransform(mouseX, [0, window.innerWidth], [10, -10]);
  const yOffset3 = useTransform(mouseY, [0, window.innerHeight], [10, -10]);

  const parallaxRangeScroll = [0, window.innerHeight * 0.5];
  const scale = useTransform(scrollY, parallaxRangeScroll, [1, 1.1]);
  const springConfig = { stiffness: 100, damping: 10, bounce: 0 };
  const cardRef = useRef(null);

  const { scrollYProgress: scrollYFirst } = useScroll({
    target: cardRef,
    offset: ["0 1", "0.5 1"],
  });
  const { scrollYProgress: scrollYSec } = useScroll({
    target: cardRef,
    offset: ["0.15 1", "0.65 1"],
  });
  const { scrollYProgress: scrollYThird } = useScroll({
    target: cardRef,
    offset: ["0.30 1", "0.8 1"],
  });

  const translateYFirst = useSpring(
    useTransform(scrollYFirst, [0, 1], [150, 0]),
    springConfig
  );

  const translateYSec = useSpring(
    useTransform(scrollYSec, [0, 1], [150, 0]),
    springConfig
  );
  const translateYThird = useSpring(
    useTransform(scrollYThird, [0, 1], [150, 0]),
    springConfig
  );

  type AnimationStyle = {
    position: string;
    translate: MotionValue;
    delay: number;
  };

  const getAnimationStyle = (i: number): AnimationStyle => {
    if (i === 0)
      return {
        position: "translateY",
        translate: translateYFirst,
        delay: 0,
      };
    else if (i === 1)
      return {
        position: "translateY",
        translate: translateYSec,
        delay: 0.5,
      };
    return {
      position: "translateY",
      translate: translateYThird,
      delay: 1,
    };
  };
  const sliderRef = useRef(null);
  const newRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sliderRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-66%"]);

  return (
    <div className="relative">
      <div className="relative h-screen w-screen ">
        <div className="absolute pointer-events-none z-[100] left-1/2 text-center -translate-x-1/2 -translate-y-1/2 top-1/2">
          <LargeFont className=" font-gramatika text-[80px] uppercase font-bold text-black dark:text-white max-w-[90%] leading-[75px] ">
            Welcome to Monad!
          </LargeFont>
          <MediumFont className="text-white text-center mt-9 max-w-[1400px] w-[95%]">
            Step into a realm of adventure and mystery, inspired by the
            legendary characters of Monad. Immerse yourself in this captivating
            universe where Chog, Moyaki, and Molandak come to life, leading you
            through exhilarating challenges and epic competitions.
          </MediumFont>{" "}
          {/* <img src="/backgrounds/t.png" className="h-[600px] min-w-[1450px]" /> */}
          <div className="flex items-center mt-[50px] mx-auto">
            <motion.button
              className="mt-8 text-white font-bold flex rounded-md h-11 animate-shimmer font-hoves-pro-bold items-center justify-center border border-base-border bg-[linear-gradient(110deg,#836EF9,45%,#b5a8fa,55%,#836EF9)] 
            bg-[length:200%_100%]  border-[#b5a8fa] w-[120px] focus:outline-none focus:ring-2  focus:ring-offset-2 transition-all duration-500 hover:tracking-wide"
            >
              <Link
                href="https://discord.com/invite/monad"
                target="_blank"
                rel="noopener norefferer"
              >
                Join
              </Link>
            </motion.button>
          </div>
        </div>

        <BackgroundGradientAnimation />
      </div>
      <div className=" flex flex-col mx-auto mt-[150px] mb-[100px] relative">
        <div className="flex flex-col w-full items-center">
          <LargeFont className="font-gramatika text-[80px] uppercase font-bold text-black dark:text-white max-w-2/4 leading-[95px] slide-title">
            Embark on Your
          </LargeFont>
          <LargeFont className="font-gramatika text-[80px] uppercase font-bold text-black dark:text-white max-w-2/4 leading-[95px] slide-title">
            Legendary Journey
          </LargeFont>
          <MediumFont className="text-white text-center mt-9 max-w-4xl w-[95%]">
            Step into a realm of adventure and mystery, inspired by the
            legendary characters of Monad. Immerse yourself in this captivating
            universe where Chog, Moyaki, and Molandak come to life, leading you
            through exhilarating challenges and epic competitions.
          </MediumFont>{" "}
        </div>
        <div ref={sliderRef} className="h-[250vh] relative">
          <div className="sticky top-0 left-0 flex items-center h-[screen] overflow-hidden ">
            <motion.div style={{ x }} className="flex relative">
              {infos.map((content, i) => (
                <OddBox key={i} content={content} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pb-[300px]  w-screen">
        <LargeFont className="z-10 text-6xl font-bold pointer-events-none uppercase">
          Discover Monad Characters!
        </LargeFont>
        <MediumFont className="z-10 text-80 mt-10 pointer-events-none max-w-[700px] text-center">
          Select a character to begin with. By choosing a team you will be able
          to help this house to earn points by winning chess games!
        </MediumFont>
        <motion.div
          className="max-w-[1200px] flex w-full justify-between pt-[100px] z-10"
          ref={cardRef}
        >
          {characters.map((character, i) => {
            const { translate, position, delay } = getAnimationStyle(i);
            return (
              <Card
                key={character.title}
                content={character}
                translate={translate}
                position={position}
                delay={delay}
              />
            );
          })}
        </motion.div>
      </div>
      <HeroParallax memes={memes || []} />
      {/* <ConnectPeople /> */}
    </div>
  );
};
