import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#22DFF9",
        color2: "#212830",
        color3: "#74F922",
        color4: "#FF5934",
        color5: "#B4BAA7",
        color6: "#22E0FA",
        color7: "#727973",
        color8: "#4A5252",
        color9: "#222F38",
        color10: "",

      }
    }
  },
  plugins: [],
};
export default config;
