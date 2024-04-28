"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef } from "react";
import { getArcs } from "./constant";

const World = dynamic(
  () => import("../../../../components/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export function ConnectPeople() {
  const firstTitleRef = useRef<HTMLHeadingElement>(null);
  const secTitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { scrollYProgress: scrollFirst } = useScroll({
    target: firstTitleRef,
    offset: ["2 1", "3 1"],
  });
  const { scrollYProgress: scrollSec } = useScroll({
    target: secTitleRef,
    offset: ["2.5 1", "3.5 1"],
  });

  const { scrollYProgress: scrollDescription } = useScroll({
    target: descriptionRef,
    offset: ["1.33 1", "2 1"],
  });
  const { scrollYProgress: scrollBtn } = useScroll({
    target: buttonRef,
    offset: ["1.5 1", "2 1"],
  });

  const slideProgress = useTransform(scrollFirst, [0, 1], ["-50%", "0%"]);
  const slideProgressSec = useTransform(scrollFirst, [0, 1], ["-50%", "0%"]);

  const globeConfig = {
    pointSize: 10,
    globeColor: "#836EF9",
    showAtmosphere: true,
    atmosphereColor: "#b5a8fa",
    atmosphereAltitude: 0.15,
    emissive: "#836EF9",
    emissiveIntensity: 0.05,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.8)",
    ambientLight: "#fff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#A0055D",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.4,
  };
  const colors = ["#5FEDDF", "#80f2e5", "#bff7f2"];
  const sampleArcs = getArcs(colors);

  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen relative w-full connect-container">
      <div className="max-w-7xl mx-auto w-full relative h-full px-4 flex items-center">
        <div className="w-2/4 slide-title">
          <motion.h2
            style={{
              opacity: scrollFirst,
              y: slideProgress,
            }}
            ref={firstTitleRef}
            className="font-gramatika text-[72px] uppercase font-bold text-black dark:text-white max-w-2/4 leading-[70px] slide-title"
          >
            Monad is
          </motion.h2>
          <motion.h2
            style={{
              opacity: scrollSec,
              y: slideProgress,
            }}
            ref={secTitleRef}
            className="font-gramatika text-[72px] uppercase font-bold text-black dark:text-white max-w-2/4 leading-[70px] slide-title"
          >
            worldwide
          </motion.h2>
          <motion.p
            style={{ opacity: scrollDescription, y: slideProgressSec }}
            ref={descriptionRef}
            className="max-w-[90%] text-80 mt-5 text-lg font-hoves-pro-bold"
          >
            Monad unifies the community worldwide. Wherever you are on the map,
            you are an integral part of a movement that transcends borders and
            cultural differences. Join Monad in this adventure where each
            individual brings their own unique contribution to our community
            fabric. Together, we form a vibrant and diverse global network.
          </motion.p>

          <motion.button
            ref={buttonRef}
            style={{ opacity: scrollBtn }}
            className="mt-8 text-white font-bold flex rounded-md h-11 animate-shimmer font-hoves-pro-bold items-center justify-center border border-base-border bg-[linear-gradient(110deg,#836EF9,45%,#b5a8fa,55%,#836EF9)] 
            bg-[length:200%_100%]  border-[#b5a8fa] w-[180px] focus:outline-none focus:ring-2  focus:ring-offset-2 transition-all duration-500 hover:tracking-wide"
          >
            <Link
              href="https://discord.com/invite/monad"
              target="_blank"
              rel="noopener norefferer"
            >
              Join the discord
            </Link>
          </motion.button>
        </div>
        <div className="w-2/4 h-[600px]">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
