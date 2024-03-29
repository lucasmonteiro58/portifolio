/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        grayLight: "#e9ebec",
        blueLight: "#a1c4fd",
        blueDark: "#0c151d",
        grayText: "#575757",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
