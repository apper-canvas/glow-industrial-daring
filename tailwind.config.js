/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#64748b",
        accent: "#f59e0b",
        surface: "#f8fafc",
        background: "#ffffff"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}