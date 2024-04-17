import { Tilt } from "react-tilt";
import { MediumFont } from "./font";
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1200, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
  speed: 2000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export const Card = ({ content }) => {
  return (
    <Tilt
      options={defaultOptions}
      className="tiltcard shadow-2xl relative bg-background-purple flex justify-center items-center"
    >
      {/* <div className="h-full w-full bg-berry rounded-xl z-0 absolute" /> */}
      <div
        className="z-1 rounded-[10px]"
        style={{
          width: "calc(100% - 30px)",
          height: "calc(100% - 30px)",
          background: `url('/backgrounds/purple.png')`,
        }}
      >
        <div className="flex items-center justify-center h-full w-full mb-5 relative">
          <img
            className="rounded-md h-[320px] w-[280px]"
            height="450"
            width="300"
            src={content.image}
          />
          <div className="">
            <img
              className="h-[35px] w-[70px] absolute top-5 left-5"
              height="35"
              width="70"
              src="https://www.redditstatic.com/crypto-assets/v1/badge-legendary-bf5ff286ea.svg"
            />
            <img
              className="h-[35px] w-[35px] absolute top-5 right-5"
              height="35"
              width="70"
              src={content.logo}
            />
            <MediumFont className="text-white absolute uppercase bottom-5 left-1/2 -translate-x-1/2 font-gramatika font-bold ">
              {content.title}
            </MediumFont>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
