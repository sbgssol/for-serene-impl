/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flyLeft: {
          "0%": { transform: "translateX(-150px)", opacity: "0" },
          "100%": { opacity: "1" },
        },
        flyRight: {
          "0%": { transform: "translateX(150px)", opacity: "0" },
          "100%": { opacity: "1" },
        },
        flyUp: {
          "0%": { transform: "translateY(150px)", opacity: "0" },
          "100%": { opacity: "1" },
        },
        flyDown: {
          "0%": { transform: "translateY(-150px)", opacity: "0" },
          "100%": { opacity: "1" },
        },
        zoomOut: {
          "0%": { transform: "scale(0.5)" },
          "50%": { transform: "scale(1.25)" },
          "100%": { transform: "scale(1)" },
        },
        animistaSlideInEllipticRight: {
          "0%": {
            transform: "translateX(800px) rotateY(-30deg) scale(0)",
            transformOrigin: "-100% 50%",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0) rotateY(0) scale(1)",
            transformOrigin: "-1800px 50%",
            opacity: "1",
          },
        },
        aniBounceInRight: {
          "0%": {
            transform: "translateX(300px)",
            animationTimingFunction: "ease-in",
            opacity: "0",
          },
          "38%": {
            transform: "translateX(0)",
            animationTimingFunction: "ease-out",
            opacity: "1",
          },
          "55%": {
            transform: "translateX(68px)",
            animationTimingFunction: "ease-in",
          },
          "72%": {
            transform: "translateX(0)",
            animationTimingFunction: "ease-out",
          },
          "81%": {
            transform: "translateX(32px)",
            animationTimingFunction: "ease-in",
          },
          "90%": {
            transform: "translateX(0)",
            animationTimingFunction: "ease-out",
          },
          "95%": {
            transform: "translateX(8px)",
            animationTimingFunction: "ease-in",
          },
          "100%": {
            transform: "translateX(0)",
            animationTimingFunction: "ease-out",
          },
        },
      },
      animation: {
        flyLeft: "flyLeft 500ms ease-out",
        flyRight: "flyRight 500ms ease-out",
        flyUp: "flyUp 500ms ease-out",
        flyDown: "flyDown 500ms ease-out",
        zoomOut: "zoomOut 500ms ease-out",
        aniBounceInRight: "aniBounceInRight 1.1s both",
        animistaSlideInEllipticRight:
          "animistaSlideInEllipticRight 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },

      fontFamily: {
        signika: ['"Signika Negative"'],
        marmelad: ["Marmelad"],
      },
    },
  },
  plugins: [],
});
