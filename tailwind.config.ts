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
        cream: {
          50: "#FBF8F2",
          100: "#F4EFE4",
          200: "#E8DFCC",
          300: "#D6C8AB",
        },
        sage: {
          50: "#F1F5F1",
          100: "#DEE8DE",
          200: "#B9CDB9",
          300: "#8AAB8C",
          400: "#5E8A62",
          500: "#3F6A46",
          600: "#32563A",
          700: "#274530",
          800: "#1E3526",
          900: "#15241B",
        },
        clay: {
          400: "#D08A6C",
          500: "#C06A4A",
          600: "#A45338",
        },
        ink: {
          50: "#F6F4F0",
          100: "#E7E3DB",
          400: "#8A8376",
          600: "#5C564C",
          800: "#2F2C27",
          900: "#1C1A16",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wideish: "0.08em",
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(44, 42, 38, 0.08)",
        lift: "0 24px 60px rgba(44, 42, 38, 0.12)",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
