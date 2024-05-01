"use client";
import { Card } from "@/components/card";
import { ExtraLargeFont, LargeFont, MediumFont } from "@/components/font";
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
import { useRef } from "react";
import { ConnectPeople } from "./components/connect-people";
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
  const machinRef = useRef(null);

  const { scrollYProgress: scrollYFirst } = useScroll({
    target: machinRef,
    offset: ["0 1", "0.5 1"],
  });
  const { scrollYProgress: scrollYSec } = useScroll({
    target: machinRef,
    offset: ["0.15 1", "0.65 1"],
  });
  const { scrollYProgress: scrollYThird } = useScroll({
    target: machinRef,
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

  // const AnimationProps = z.object({
  //   position: z.string(),
  //   translate: MotionValue,
  //   delay: z.number(),
  // });

  // type AnimationType = z.infer<typeof AnimationProps>;

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
    <div className="relative bg-[url('https://web.archive.org/web/20211118123617/https://www.illuvium.io/images/backgrounds/1440x900.jpg')] bg-fixed bg-cover">
      <div style={{ width: "100vw", height: "110vh" }}>
        <div
          style={{ width: "100%", height: "100%" }}
          onMouseMove={(event) => {
            mouseX.set(event.clientX);
            mouseY.set(event.clientY);
          }}
          className="relative overflow-x-hidden"
        >
          <div className="flex items-center absolute top-[16%] left-1/2 -translate-x-1/2 z-10 w-full justify-center">
            {/* <ExtraLargeFont className="shadowText text-white text-center leading-[60px] text-7xl">
              MONAD X DEMASK
            </ExtraLargeFont> */}
            <img
              src="https://cdn.galxe.com/galaxy/a52ff36ea62544e9aac470ceaedddf3e/.jpeg_thumbnail.webp"
              height="80"
              width="80"
              className="rounded-full border border-base-border shadow-2xl mr-5"
            />
            <ExtraLargeFont className="shadowText text-white text-center leading-[60px] text-7xl">
              DEMASK
            </ExtraLargeFont>
            <ExtraLargeFont className="shadowText mx-5 text-white text-center leading-[60px] text-7xl">
              x
            </ExtraLargeFont>
            <ExtraLargeFont className="shadowText text-white text-center leading-[60px] text-7xl">
              MONADIANS
            </ExtraLargeFont>
            <img
              src="https://pbs.twimg.com/profile_images/1739215796738326528/XxFqmbpF_400x400.jpg"
              height="80"
              width="80"
              className="rounded-full  ml-5 border border-base-border shadow-2xl"
            />
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

      <div className=" flex flex-col mx-auto mt-[350px] mb-[100px] relative">
        <div className="flex flex-col w-full items-center">
          <LargeFont className="font-gramatika text-[100px] uppercase font-bold text-black dark:text-white max-w-2/4 leading-[95px] slide-title">
            Embark on Your
          </LargeFont>
          <LargeFont className="font-gramatika text-[100px] uppercase font-bold text-black dark:text-white max-w-2/4 leading-[95px] slide-title">
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
          <div className="sticky top-0  left-0 flex items-center h-[screen] overflow-hidden ">
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
          Select your team now!
        </LargeFont>
        <MediumFont className="z-10 text-80 mt-10 pointer-events-none max-w-[700px] text-center">
          Select a character to begin with. By choosing a team you will be able
          to help this house to earn points by winning chess games!
        </MediumFont>
        <motion.div
          className="max-w-[1200px] flex w-full justify-between pt-[100px] z-10"
          ref={machinRef}
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
      <ConnectPeople />
    </div>
  );
};
