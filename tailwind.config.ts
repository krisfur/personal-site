import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Catppuccin Mocha theme colors
        base: "#1e1e2e",
        text: "#cdd6f4",
        subtext: "#a6adc8",
        surface0: "#313244",
        surface1: "#45475a",
        mauve: "#cba6f7",
        lavender: "#b4befe",
      },
    },
  },
  plugins: [],
};

export default config;
