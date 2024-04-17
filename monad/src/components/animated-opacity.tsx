import { gsap } from "gsap";
import { useEffect } from "react";

export const AnimateOpacity = ({ title, duration, delay, id }) => {
  const style =
    "text-[100px] text-white text-center m-0 leading-0 absolute font-gramatika mx-auto";

  useEffect(() => {
    gsap.to(`#${id}`, {
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
        <div
          id={id}
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            lineHeight: "25px",
            zIndex: 1000,
          }}
          className={`leading-none text-3xl opacity-element text-80 font-hoves-pro-bold 
           tracking-tighter pointer-events-none`}
        >
          {title}
        </div>
      </div>
    </div>
  );
};
