/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#282A3A",
        textPrimary: "#EDEDED",
      },
      fontFamily: {
        gideonRoman: ["'Gideon Roman'", "'serif'"],
        youngSerif: ["'Young Serif'", "'serif'"],
        openSans: ["'Open Sans'", "'sans-serif'"],
      },
    },
  },
  plugins: [],
};
