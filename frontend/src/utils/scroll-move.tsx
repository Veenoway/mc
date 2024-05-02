import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const handleSlideAnimation = (
  className: string,
  x: number,
  delay: number
) => {
  gsap.fromTo(
    className,
    {
      opacity: 0,
      x,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay,
      scrollTrigger: {
        trigger: ".container-box",
        start: "top 100%",
        end: "top 30%",
        toggleClass: "red",
        scrub: true,
        pinSpacing: true,
        toggleActions: "restart none none none",
      },
    }
  );
  gsap.fromTo(
    className,
    {
      opacity: 1,
      x: 0,
    },
    {
      opacity: 0,
      x,
      duration: 1,
      delay,
      scrollTrigger: {
        trigger: ".container-box",
        start: "bottom 60%",
        end: "bottom 0%",
        toggleClass: "red",
        scrub: true,
        pinSpacing: true,
        toggleActions: "restart none none none",
      },
    }
  );
};
