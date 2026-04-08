import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // slate-900
        panel: "#111827",      // gray-900
        border: "#1f2937",
        accent: "#38bdf8",
      }
    },
  },
  plugins: [],
}