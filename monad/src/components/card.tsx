import { cn } from "@/utils/cn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
gsap.registerPlugin(ScrollTrigger);

export const Card = ({ content }) => {
  const [isFliped, setIsFliped] = useState(false);
  const [turned, setTurned] = useState(false);
  const tiltRef = useRef(null);
  const options = {
    glareEnable: true,
    glareMaxOpacity: 0.4,
    glareColor: "#ccc4fc",
    glarePosition: "all",
    glareBorderRadius: "40px",
    perspective: 1200,
    scale: 1.1,
    gyroscope: true,
    transitionSpeed: 2000,
    flipHorizontally: isFliped,
  };

  useEffect(() => {
    if (tiltRef?.current) {
      gsap.utils
        .toArray(".parallax-effect-glare-scale")
        .forEach((element, index) => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: ".title",
              start: "bottom 60%",
              end: "bottom -10%",
              scrub: true,
              pinSpacing: true,
              toggleActions: "restart none none none",
              onUpdate: () => {
                console.log(`Element ${index} triggered`);
              },
            },
          });
        });
    }
  }, [tiltRef]);

  return (
    <Tilt
      {...options}
      className={cn(
        "tiltcard bg-cover rounded-2xl relative parallax-effect-glare-scale "
      )}
      ref={tiltRef}
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
            <div
              className="flex h-[60px] px-2.5 pt-3 pb-[3px]"
              //   style={{
              //     backdropFilter: "brightness(50%) saturate(220%) hue-rotate(220deg)",
              //   }}
            >
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
            <div
              className="flex h-[280px]  px-[11px] pt-1.5 pb-[3px]"
              //   style={{
              //     backdropFilter: "brightness(50%) saturate(220%) hue-rotate(220deg)",
              //   }}
            >
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
            <div
              className="flex h-[25px] mt-[2px] mx-2.5 justify-between items-center"
              //   style={{
              //     backdropFilter: "brightness(50%) saturate(220%) hue-rotate(220deg)",
              //   }}
            >
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
            {/* <div
          className="flex items-center justify-center h-full w-full mb-5 relative "
          //   style={{
          //     backdropFilter: "brightness(50%) saturate(220%) hue-rotate(220deg)",
          //   }}
        >
          <div className="">
            <img
              className="absolute top-5 left-5"
              height="35px"
              width="70px"
              src="https://www.redditstatic.com/crypto-assets/v1/badge-legendary-bf5ff286ea.svg"
            />
            <img
              className="absolute top-5 right-5"
              height="35px"
              width="35px"
              src={content.logo}
            />
            <MediumFont className="text-white absolute uppercase bottom-5 left-1/2 -translate-x-1/2 font-gramatika font-bold ">
              {content.title}
            </MediumFont>
          </div>
        </div> */}
            {/* )} */}
          </div>
        )}
        {/* <div className="h-full w-full bg-berry rounded-xl z-0 absolute" /> */}
      </div>
    </Tilt>
  );
};
