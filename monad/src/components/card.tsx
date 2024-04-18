import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { MediumFont, SmallFont } from "./font";
// const defaultOptions = {
//   reverse: false, // reverse the tilt direction
//   max: 35, // max tilt rotation (degrees)
//   perspective: 1200, // Transform perspective, the lower the more extreme the tilt gets.
//   scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
//   speed: 2000, // Speed of the enter/exit transition
//   transition: true, // Set a transition on enter/exit.
//   axis: null, // What axis should be disabled. Can be X or Y.
//   reset: true, // If the tilt effect has to be reset on exit.
//   easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
// };

export const Card = ({ content }) => {
  const [isFliped, setIsFliped] = useState(false);
  return (
    <Tilt
      //   options={defaultOptions}
      glareEnable={true}
      glareMaxOpacity={0.4}
      glareColor="#ccc4fc"
      glarePosition="all"
      glareBorderRadius="40px"
      perspective={1200}
      scale={1.05}
      gyroscope={true}
      transitionSpeed={2000}
      flipHorizontally={isFliped}
      className="tiltcard shadow-2xl border bg-cover border-background-dark-purple rounded-2xl relative parallax-effect-glare-scale"
    >
      {/* <div className="h-full w-full bg-berry rounded-xl z-0 absolute" /> */}
      <div
        onClick={() => setIsFliped((prev) => !prev)}
        className="z-1  rounded-[40px]"
        style={{
          width: "calc(100% - 30px)",
          height: "calc(100% - 30px)",
          background: `
          linear-gradient(rgba(32, 0, 82, 0.5), rgba(32, 0, 82, 0.5)),
          linear-gradient(rgba(32, 0, 82, 0.5), rgba(32, 0, 82, 0.5)),
          url('https://uploads.codesandbox.io/uploads/user/85dbbc7c-600c-43e5-a118-06cc9f285d5e/2PKb-overlay.png')
        `,
          backgroundSize: "cover, contain",
        }}
      >
        {/* {isFliped ? (
          <div className="flex items-center justify-center h-full w-full mb-5 relative ">
            <div className="h-fit w-fit rounded-full shadow-xl inner-element">
              <img height="150px" width="150px" src={content.logo} />
            </div>
          </div>
        ) : ( */}

        <div
          className="flex h-[60px] px-2.5 pt-2.5 pb-[3px]"
          //   style={{
          //     backdropFilter: "brightness(50%) saturate(220%) hue-rotate(220deg)",
          //   }}
        >
          <div className="h-full w-full flex items-center justify-center relative ">
            <MediumFont className="text-90 uppercase font-gramatika font-bold mt-0.5">
              {content.title}
            </MediumFont>
            <img
              className="absolute top-2.5 right-[9px] "
              height="30px"
              width="30px"
              src={content.logo}
            />
          </div>
        </div>
        <div
          className="flex h-[260px]  px-2.5 pt-1.5 pb-[3px]"
          //   style={{
          //     backdropFilter: "brightness(50%) saturate(220%) hue-rotate(220deg)",
          //   }}
        >
          <div
            className=" h-full w-full flex items-center justify-center bg-[rgba(0,0,0,0.25)]
           bg-cover rounded"
          >
            <img
              className="rounded-md"
              height="250px"
              width="200px"
              src={content.image}
            />
          </div>
        </div>
        <div
          className="flex h-[25px] mt-[13px] mx-2.5 justify-between items-center"
          //   style={{
          //     backdropFilter: "brightness(50%) saturate(220%) hue-rotate(220deg)",
          //   }}
        >
          <div className=" h-full flex items-center rounded w-[150px] px-2.5">
            <SmallFont>{content.title}</SmallFont>
          </div>
          <div className=" h-full flex items-center rounded w-[150px] px-2.5">
            <SmallFont>{content.title}</SmallFont>
          </div>
        </div>
        <div className="flex h-[76px] px-2.5 pt-1.5 pb-[3px] mt-2.5 rounded-b-[28px] mx-2.5 p-2">
          <SmallFont>{content.description}</SmallFont>
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
    </Tilt>
  );
};
