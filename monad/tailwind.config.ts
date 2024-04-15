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
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: {
          purple: "#200052",
          "dark-purple": "#0d0021",
        },
        header: "#200052",
        "base-border": "rgba(255,255,255,0.05)",
        berry: "#A0055D",
        "berry-dark": "#b2387d",
        60: "rgba(255,255,255,0.6)",
        80: "rgba(255,255,255,0.8)",
        90: "rgba(255,255,255,0.9)",
      },
    },
  },
  plugins: [],
};
export default config;
