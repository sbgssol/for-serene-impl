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
          '0%': { transform: 'translateX(-150px)', opacity: '0' },
          '100%': { opacity: '1' },
        },
        flyRight: {
          '0%': { transform: 'translateX(150px)', opacity: '0' },
          '100%': { opacity: '1' },
        },
        flyUp: {
          '0%': { transform: 'translateY(150px)', opacity: '0' },
          '100%': { opacity: '1' },
        },
        flyDown: {
          '0%': { transform: 'translateY(-150px)', opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomOut: {
          '0%': {transform: 'scale(0.5)'},
          '50%': {transform: 'scale(1.25)'},
          '100%': {transform: 'scale(1)'},
        },
      },
      animation: {
        flyLeft: 'flyLeft 500ms ease-out',
        flyRight: 'flyRight 500ms ease-out',
        flyUp: 'flyUp 500ms ease-out',
        flyDown: 'flyDown 500ms ease-out',
        zoomOut: 'zoomOut 500ms ease-out',
      },

      fontFamily: {
        'signika': ['"Signika Negative"'],
        'marmelad' : ['Marmelad']
      }
    },
  },
  plugins: [],
});

