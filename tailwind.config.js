/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flyLeft: {
          '0%': { transform: 'translateX(-400px)', opacity: '0' },
          '100%': { opacity: '1' },
        },
        flyRight: {
          '0%': { transform: 'translateX(400px)', opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        flyLeft: 'flyLeft 500ms ease-out',
        flyRight: 'flyRight 500ms ease-out',
        flyRightDelay1s: 'flyRight 500ms ease-out 1 1s',
      },

      fontFamily: {
        'signika': ['"Signika Negative"'],
        'marmelad' : ['Marmelad']
      }
    },
  },
  plugins: [],
});

