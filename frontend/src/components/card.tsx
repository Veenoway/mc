import { CharacterProps } from "@/feature/home/models";
import { cn } from "@/utils/cn";
import { MotionValue, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
gsap.registerPlugin(ScrollTrigger);

type CardProps = {
  content: CharacterProps;
  translate: MotionValue;
  position: string;
  delay: number;
};

export const Card = ({ content, translate, position, delay }: CardProps) => {
  const [isFliped, setIsFliped] = useState(false);
  const [turned, setTurned] = useState(false);

  const options = {
    glareEnable: true,
    glareMaxOpacity: 0.4,
    glareColor: "#ccc4fc",
    glarePosition: "all",
    glareBorderRadius: "40px",
    perspective: 1200,
    scale: 1.05,
    gyroscope: true,
    transitionSpeed: 2000,
    flipHorizontally: isFliped,
  };

  return (
    <motion.div style={{ [position]: translate }} transition={{ delay }}>
      <Tilt
        {...(options as any)}
        className={cn(
          "tiltcard bg-cover bg-top rounded-2xl relative parallax-effect-glare-scale "
        )}
      >
        <div
          className="w-full relative h-full flex justify-center items-center idd"
          // onClick={() => {
          //   setTurned(true);
          //   setIsFliped((prev) => !prev);
          //   setTimeout(() => setTurned(false), isFliped ? 1000 : 200);
          // }}
        >
          {isFliped && !turned ? (
            <div className="flex items-center justify-center h-full w-full mb-5 relative ">
              <div className="h-fit w-fit rounded-full shadow-xl inner-element">
                <img height="150px" width="150px" src={content.logo} />
              </div>
            </div>
          ) : (
            <div
              className="z-1 rounded-[40px]"
              style={{
                width: "calc(100% - 20px)",
                height: "calc(100% - 20px)",
                background: isFliped
                  ? ""
                  : `
          linear-gradient(rgba(32, 0, 82, 0.5), rgba(32, 0, 82, 0.5)),
          linear-gradient(rgba(32, 0, 82, 0.5), rgba(32, 0, 82, 0.5)),
          url('/cards/card-dark.png')
        `,
                backgroundSize: "contain,contain, contain",
              }}
            >
              <div className="flex h-[60px] px-2.5 pt-3 pb-[3px]">
                <div className="h-full w-full flex items-center justify-center relative ">
                  <p className="text-90 text-xl uppercase font-bold mt-0.5 absolute top-2.5 left-[18px]">
                    {content.rank}
                  </p>
                  <p className="uppercase text-90 text-xl font-bold mt-0.5">
                    {content.title}
                  </p>
                  <img
                    className="absolute top-3 right-3.5 "
                    height="25px"
                    width="25px"
                    src={content.logo || "/monad_logo_purple.png"}
                  />
                </div>
              </div>
              <div className="flex h-[280px]  px-[11px] pt-1.5 pb-[3px]">
                <div
                  className=" h-full w-full flex items-center justify-center bg-[rgba(0,0,0,0.25)]
           bg-cover rounded border-4 border-[#381c75]"
                >
                  <img
                    className="w-full h-full object-cover"
                    height="280px"
                    width="200px"
                    src={content.image}
                  />
                </div>
              </div>
              <div className="flex h-[25px] mt-[2px] mx-2.5 justify-between items-center">
                <div className=" h-full flex items-center rounded w-[150px] px-2.5">
                  <p className="text-[13px] font-normal text-90 mt-[1px]">
                    {content.rank_title}
                  </p>
                </div>
                <div className=" h-full flex items-center rounded w-[150px] px-2.5">
                  <p className="text-[13px] font-normal text-90 mt-[1px]">
                    {content.spell}
                  </p>
                </div>
              </div>
              <div className="flex h-[76px] px-2.5 pt-1.5 pb-[3px] mt-2.5 rounded-b-[28px] mx-2.5 p-2">
                <p className="text-[13px] text-80">{content.description}</p>
              </div>
            </div>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};
