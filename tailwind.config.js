/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      fontFamily: {
        "principal": ['"Roboto Flex"', 'sans-serif']
      },

      colors: {
        "tomato": "hsl(4, 100%, 67%)",
        "dark-Slate-Grey": "hsl(234, 29%, 20%)",
        "Charcoal-Grey": "hsl(235, 18%, 26%)",
        "Grey": "hsl(231, 7%, 60%)",
        "White": "hsl(0, 0%, 100%)",
      },

      boxShadow: {
        'xl':
          "tw-shadow", "0 20px 25px -5px rgba(255, 98, 0, 0.788)"
         
      },
    },
    plugins: [],
  }