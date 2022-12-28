/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      akronim: ["'Akronim', cursive"],
      spartan: ["League Spartan', sans-serif"],
      sans: ["Open Sans', sans-serif"],
      playflair: ["Playfair Display', serif"],
      monoton:["'Monoton', cursive;"]
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["forest"],
  },
};
