/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        glyphic: ["Faculty Glyphic"],
        sora: ["Sora"],
        noto: ["Noto Serif Display", "serif"],
      },
      colors: {
        "custom-brown": "#553922",
        "custom-brown2": "#C3824E",
      },
    },
  },
  plugins: [],
};
