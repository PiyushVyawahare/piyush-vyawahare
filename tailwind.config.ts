import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0F",
        surface: "#111118",
        border: "rgba(255,255,255,0.07)",
        accent: "#6EE7B7",
        accent2: "#818CF8",
        muted: "#888898",
        subtle: "#444455",
      },
      fontFamily: {
        sans: ["Syne", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
