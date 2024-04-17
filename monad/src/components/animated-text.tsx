import { gsap } from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

export const AnimatedText = ({ title, delay, bold, duration }) => {
  const style =
    "text-[100px] text-white text-center m-0 leading-0 absolute font-gramatika mx-auto";

  useEffect(() => {
    const splitTitle = new SplitType(".title-animated");
    gsap.from(".title-animated", {
      y: 0,
      stagger: 0.05,
      delay,
      duration,
      opacity: 100,
    });
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay,
      duration,
      opacity: 100,
    });
  }, []);

  return (
    <div className="container z-10 mb-8">
      <div className="flex justify-center items-center">
        <h1
          id="title"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            lineHeight: bold ? "80px" : "25px",
            zIndex: 1000,
          }}
          className={` leading-none title-animated ${
            bold
              ? "font-bold text-[100px] text-white font-gramatika"
              : "text-3xl text-80 font-hoves-pro-bold "
          } tracking-tighter pointer-events-none `}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};
