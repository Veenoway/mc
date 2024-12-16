"use client";
import { ParralaxContentProps } from "@/feature/home/models";
import { getRandom } from "@/utils/random";
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type HeroParallaxProps = {
  memes: ParralaxContentProps[];
};

export const HeroParallax = ({ memes }: HeroParallaxProps) => {
  const firstRow = memes.slice(0, 5);
  const secondRow = memes.slice(5, 10);
  const thirdRow = memes.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 100]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[230vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
          {firstRow.map((meme) => (
            <MemeCard meme={meme} translate={translateX} key={meme.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 space-x-20 ">
          {secondRow.map((meme) => (
            <MemeCard
              meme={meme}
              translate={translateXReverse}
              key={meme.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((meme) => (
            <MemeCard meme={meme} translate={translateX} key={meme.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full z-10 left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-white font-gramatika">
        Discover Arts & Meme <br /> made by community
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-white font-hoves-pro-bold">
        Explore a curated selection of creative artworks and memes, all crafted
        by our vibrant community. Immerse yourself in a world of creativity and
        humor where everyone brings their own unique touch.
      </p>
    </div>
  );
};

export const MemeCard = ({
  meme,
  translate,
}: {
  meme: ParralaxContentProps;
  translate: MotionValue<number>;
}) => {
  const [hasError, setHasError] = useState(false);
  const images = [
    "/community/1.jpg",
    "/community/2.png",
    "/community/3.jpeg",
    "/community/4.jpeg",
    "/community/5.jpeg",
    "/community/6.jpeg",
    "/community/9.jpeg",
    "/community/8.jpeg",
    "/community/7.jpeg",
    "/community/10.png",
    "/community/11.png",
    "/community/12.png",
  ];
  const errorImage = getRandom(images);
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={meme.title}
      className="group/product h-[405px] w-[25rem] relative flex-shrink-0"
    >
      <Link href={meme.url} className="block group-hover/product:shadow-2xl ">
        <div className="flex flex-col backdrop-filter backdrop-blur-lg w-[450px] bg-line bg-cover bg-center shadow-2xl rounded-xl border-2 border-base-border object-cover object-left-top absolute inset-0">
          <Image
            width="200"
            height="200"
            className={`mx-auto object-cover rounded-t-xl w-[450px] h-[350px]`}
            src={hasError ? errorImage : meme.image}
            alt={`${meme.title} image`}
            onError={() => setHasError(true)}
          />
          <div className="flex items-center justify-center px-5 py-3">
            <h3 className="text-white text-xl text-center font-bold font-gramatika">
              {meme.title}
            </h3>
          </div>
        </div>
      </Link>
      {/* <div className="absolute inset-0 h-full p-5 w-full opacity-0 group-hover/product:opacity-80 bg-background-dark-purple pointer-events-none rounded-2xl transition-all duration-300"></div> */}
      {/* <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white max-w-[90%] text-base font-gramatika">
        {meme.title}
      </h2> */}
    </motion.div>
  );
};
