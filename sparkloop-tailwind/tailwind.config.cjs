/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
      colors: {

        'pink': '#F0E4FF',
        'lightPink': '#F9F5FD',
        'blue': '#723BFF',
        'bgWhite': '#FFFFFF',
        'darkPurpal': '#171130',
        'darkBlack': '#060919',
        'linkBlue': '#BAC4DF',

      },
      screens: {
        'md': '768px',

      },
    },
  },
  plugins: [],
}
