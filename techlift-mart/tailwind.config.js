/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      techliftBlue: "#033B5B",
      techliftBlack: "#151616",
      techliftWhite: "#FFFFFF",
    },
    fontFamily: {
      arizona: ["Arizonia", "cursive"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

