import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FFFFFF",
          bg2: "#F7F7F8",
          surface: "#F7F8FA",
          surface2: "#F0F1F4",
          border: "#E4E6EB",
          accent: "#3D63DD",
          accent2: "#0E9F6E",
          gold: "#B08A4E",
          text: "#101317",
          muted: "#6B7280",
        },
      },
      borderRadius: { xl2: "1.25rem" },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 85%), repeating-linear-gradient(90deg, rgba(107,114,128,0.08) 0px, rgba(107,114,128,0.08) 1px, transparent 1px, transparent 64px), repeating-linear-gradient(0deg, rgba(107,114,128,0.08) 0px, rgba(107,114,128,0.08) 1px, transparent 1px, transparent 64px)",
      },
      keyframes: { marquee: { to: { transform: "translateX(-50%)" } } },
      animation: { marquee: "marquee 25s linear infinite" },
    },
  },
  plugins: [],
};
export default config;