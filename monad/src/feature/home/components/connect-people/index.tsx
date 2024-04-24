"use client";
import { MediumFont } from "@/components/font";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { getArcs } from "./constant";

const World = dynamic(
  () => import("../../../../components/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export function ConnectPeople() {
  const firstTitleRef = useRef(null);
  const secTitleRef = useRef(null);
  const scrollFirst = useScroll({
    target: firstTitleRef,
    offset: ["0 1.5", "5 1"],
  });
  const scrollSec = useScroll({
    target: secTitleRef,
    offset: ["0 1", "5 1"],
  });

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

  const slideProgess = useTransform(
    scrollFirst.scrollYProgress,
    [0, 1],
    ["-50%", "0%"]
  );
  const opacityProgress = useTransform(
    scrollFirst.scrollYProgress,
    [0, 1],
    [0, 1]
  );
  const slideProgessSec = useTransform(
    scrollSec.scrollYProgress,
    [0, 1],
    ["-40%", "0%"]
  );
  const opacityProgressSec = useTransform(
    scrollSec.scrollYProgress,
    [0, 1],
    [0, 1]
  );

  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen relative w-full connect-container">
      <div className="max-w-7xl mx-auto w-full relative h-full px-4 flex items-center">
        <div className="w-2/4 slide-title">
          <motion.h2
            style={{
              translateX: slideProgess,
              opacity: opacityProgress,
            }}
            ref={firstTitleRef}
            className="font-gramatika text-[72px] uppercase font-bold text-black dark:text-white max-w-2/4 leading-[70px] slide-title"
          >
            Monad is
          </motion.h2>
          <motion.h2
            style={{
              translateX: slideProgessSec,
              opacity: opacityProgressSec,
            }}
            ref={secTitleRef}
            className="font-gramatika text-[72px] uppercase font-bold text-black dark:text-white max-w-2/4 leading-[70px] slide-title"
          >
            worldwide
          </motion.h2>

          <MediumFont className="max-w-[90%] text-80 mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis soluta quas, quos, sequi omnis quaerat fugit
            consectetur qui rerum quisquam quae non ea facilis, quia pariatur
            assumenda distinctio quod accusamus?
          </MediumFont>
        </div>
        <div className="w-2/4 h-[600px]">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
