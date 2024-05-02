import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rowies", "sans-serif"],
        gramatika: ["Gramatika", "sans-serif"],
        "hoves-pro-bold": ["TT Hoves Pro DemiBold", "sans-serif"],
        "hoves-pro-medium": ["TT Hoves Pro Medium", "sans-serif"],
        "hoves-pro": ["TT Hoves Pro Regular", "sans-serif"],
        oswald: ["Oswald"],
        october: ["October"],
        bebas: ["Bebas Neue"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        rockstar: "url('/backgrounds/rockstar.png')",
        gradientUrl: "url('/backgrounds/gradient-r-light.png')",
        line: "url('/background.png')",
      },
      colors: {
        background: {
          purple: "#200052",
          "dark-purple": "#0d0021",
          "glass-purple": "rgba(32, 0, 82, 0.2)",
        },
        header: "#200052",
        "base-border": "rgba(255,255,255,0.05)",
        berry: "#A0055D",
        "berry-dark": "#b2387d",
        cyan: "#5FEDDF",
        "light-cyan": "#80f2e5",
        "font-black": {
          100: "rgba(0,0,0,0.95)",
        },
        60: "rgba(255,255,255,0.6)",
        80: "rgba(255,255,255,0.8)",
        90: "rgba(255,255,255,0.9)",
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
