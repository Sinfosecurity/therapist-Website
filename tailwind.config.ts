import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: "#FBF7F0",
          100: "#F4EDE1",
          200: "#E7DCC8",
          300: "#D4C3A6",
        },
        forest: {
          50: "#EEF3EF",
          100: "#D5E0D7",
          400: "#6E8B74",
          500: "#4A6B54",
          600: "#385442",
          700: "#2B4234",
          800: "#1E3126",
          900: "#14211A",
        },
        gold: {
          400: "#C4A46A",
          500: "#B08D57",
          600: "#8F7040",
        },
        clay: {
          400: "#D08A6C",
          500: "#C06A4A",
          600: "#A45338",
        },
        ink: {
          400: "#8A8274",
          500: "#6B6458",
          700: "#3C372F",
          800: "#2A261F",
          900: "#1A1814",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wideish: "0.14em",
      },
      maxWidth: {
        content: "74rem",
        prose: "40rem",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(26, 24, 20, 0.08)",
        lift: "0 30px 80px rgba(26, 24, 20, 0.12)",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.9s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
