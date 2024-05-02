import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const getAnimation = () => {
  gsap.fromTo(
    ".moving-right",
    {
      x: 150,
    },
    {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".container-box",
        start: "top 100%",
        end: "top 20%",

        toggleClass: "red",
        scrub: true,
        pinSpacing: true,
        toggleActions: "restart none none none",
      },
    }
  );
  gsap.fromTo(
    ".moving-right",
    {
      x: 0,
    },
    {
      x: 150,
      duration: 1,
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
  gsap.fromTo(
    ".moving-left",
    {
      x: -150,
    },
    {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".container-box",
        start: "top 100%",
        end: "top 20%",

        toggleClass: "red",
        scrub: true,
        pinSpacing: true,
        toggleActions: "restart none none none",
      },
    }
  );
  gsap.fromTo(
    ".moving-left",
    {
      x: 0,
    },
    {
      x: -150,
      duration: 1,
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
  gsap.fromTo(
    ".title",
    {
      opacity: 0,
      scale: 0.9,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".container-box",
        start: "top 100%",
        end: "top 20%",

        toggleClass: "red",
        scrub: true,
        pinSpacing: true,
        toggleActions: "restart none none none",
      },
    }
  );
};
