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
        flyInUp: {
          "0%": { transform: "translateY(150px)", opacity: "0" },
          "100%": { opacity: "1" },
        },
        flyOutUp: {
          "0%": { opacity: "1" },
          "100%": { transform: "translateY(-150px)", opacity: "0" },
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
            transform: "translateX(400px) rotateY(-30deg) scale(0)",
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
            transform: "translateX(200px)",
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
        slideInBlurredRight: {
          "0%": {
            transform: "translateX(100px) scaleX(1.5) scaleY(0.2)",
            transformOrigin: "0% 50%",
            filter: "blur(40px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0) scaleY(1) scaleX(1)",
            transformOrigin: "50% 50%",
            filter: "blur(0)",
            opacity: "1",
          },
        },
        TrackingInExpand: {
          "0%": {
            letterSpacing: "-0.5em",
            opacity: "0",
          },
          "40%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
          },
        },
        TrackingInContract: {
          "0%": {
            letterSpacing: "1em",
            opacity: "0",
          },
          "40%": {
            opacity: "0.6",
          },
          "100%": {
            letterSpacing: "normal",
            opacity: "1",
          },
        },

        PulseSmall: {
          "0%": {},
          "50%": { transform: "scale(1.02)" },
          "100%": {},
        },
        PulseMedium: {
          "0%": {},
          "50%": { transform: "scale(1.2)" },
          "100%": {},
        },
        ScaleInTopRight: {
          "0%": {
            transform: "scale(0)",
            transformOrigin: "100% 0%",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            transformOrigin: "100% 0%",
            opacity: "1",
          },
        },
        ScaleInRight: {
          "0%": {
            transform: "scale(0)",
            transformOrigin: "100% 50%",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            transformOrigin: "100% 50%",
            opacity: "1",
          },
        },
        ScaleInBottomRight: {
          "0%": {
            transform: "scale(0)",
            transformOrigin: "100% 100%",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            transformOrigin: "100% 100%",
            opacity: "1",
          },
        },
        bounceInBottom: {
          "0%": {
            transform: "translateY(200px)",
            animationTimingFunction: "ease-in",
            opacity: "0",
          },
          "38%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease-out",
            opacity: "1",
          },
          "55%": {
            transform: "translateY(65px)",
            animationTimingFunction: "ease-in",
          },
          "72%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease-out",
          },
          "81%": {
            transform: "translateY(28px)",
            animationTimingFunction: "ease-in",
          },
          "90%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease-out",
          },
          "95%": {
            transform: "translateY(8px)",
            animationTimingFunction: "ease-in",
          },
          "100%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease-out",
          },
        },
        bounceInRight: {
          "0%": {
            transform: "translateX(600px)",
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
        slideInRight: {
          "0%": {
            transform: "translateX(100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideOutTop: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-100px)",
            opacity: "0",
          },
        },
        slideOutBottom: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(100px)",
            opacity: "0",
          },
        },
        scaleOutTop: {
          "0%": {
            transform: "scaleY(1)",
            transformOrigin: "100% 0%",
            opacity: "1",
          },
          "100%": {
            transform: "scaleY(0)",
            transformOrigin: "100% 0%",
            opacity: "1",
          },
        },
        scaleOutBottom: {
          "0%": {
            transform: "scaleY(1)",
            transformOrigin: "0% 100%",
            opacity: "1",
          },
          "100%": {
            transform: "scaleY(0)",
            transformOrigin: "0% 100%",
            opacity: "1",
          },
        },
        scaleOutTopFromBottom: {
          "0%": {
            transform: "scaleY(0)",
            transformOrigin: "0% 100%",
            opacity: "1",
          },
          "100%": {
            transform: "scaleY(1)",
            transformOrigin: "0% 100%",
            opacity: "1",
          },
        },
        scaleOutBottomFromTop: {
          "0%": {
            transform: "scaleY(0)",
            transformOrigin: "100% 0%",
            opacity: "1",
          },
          "100%": {
            transform: "scaleY(1)",
            transformOrigin: "100% 0%",
            opacity: "1",
          },
        },
        scaleInTop: {
          "0%": {
            transform: "scaleY(0)",
            transformOrigin: "100% 0%",
            opacity: "1",
          },
          "100%": {
            transform: "scaleY(1)",
            transformOrigin: "100% 0%",
            opacity: "1",
          },
        },
        scaleInBottom: {
          "0%": {
            transform: "scaleY(0)",
            transformOrigin: "0% 100%",
            opacity: "1",
          },
          "100%": {
            transform: "scaleY(1)",
            transformOrigin: "0% 100%",
            opacity: "1",
          },
        },
        puffInCenter: {
          "0%": {
            transform: "scale(1.2)",
            filter: "blur(4px)",
            opacity: "0",
          },
          // "25%": {
          //   transform: "scale(0.8)",
          //   filter: "blur(0px)",
          //   opacity: "0.25",
          // },
          // "75%": {
          //   transform: "scale(1.4)",
          //   filter: "blur(0px)",
          //   opacity: "0.75",
          // },
          "100%": {
            transform: "scale(1)",
            filter: "blur(0px)",
            opacity: "1",
          },
        },
        puffOutCenter: {
          "0%": {
            transform: "scale(1)",
            filter: "blur(0px)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1.2)",
            filter: "blur(4px)",
            opacity: "0",
          },
        },
        scaleInCenter: {
          "0%": {
            transform: "scale(0)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        swirlInForward: {
          "0%": {
            transform: "rotate(-540deg) scale(0)",
            opacity: "0",
          },
          "100%": {
            transform: "rotate(0) scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        flyLeft: "flyLeft 500ms ease-out",
        flyRight: "flyRight 500ms ease-out",
        flyInUp: "flyInUp 500ms ease-out",
        flyOutUp: "flyOutUp 500ms ease-out",
        flyDown: "flyDown 500ms ease-out",
        zoomOut: "zoomOut 500ms ease-out",
        aniBounceInRight: "aniBounceInRight 1.1s both",
        animistaSlideInEllipticRight:
          "animistaSlideInEllipticRight 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        slideInBlurredRight:
          "slideInBlurredRight 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
        TrackingInExpand:
          "TrackingInExpand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
        TrackingInContract:
          "TrackingInContract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
        PulseSmall: "PulseSmall 1000ms ease-out infinite",
        PulseMedium: "PulseMedium 1000ms ease-out infinite",
        ScaleInTopRight:
          "ScaleInTopRight 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        ScaleInRight:
          "ScaleInRight 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        ScaleInBottomRight:
          "ScaleInBottomRight 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        bounceInBottom: "bounceInBottom 1000ms both",
        bounceInRight: "bounceInRight 1000ms both",
        slideInRight:
          "slideInRight 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        slideOutTop:
          "slideOutTop 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        slideOutBottom:
          "slideOutBottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        scaleOutTop:
          "scaleOutTop 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        scaleOutBottom:
          "scaleOutBottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        scaleOutTopFromBottom:
          "scaleOutTopFromBottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        scaleOutBottomFromTop:
          "scaleOutBottomFromTop 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        scaleInTop:
          "scaleInTop 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        scaleInBottom:
          "scaleInBottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        puffInCenter:
          "puffInCenter 0.4s cubic-bezier(0.470, 0.000, 0.745, 0.715) both",
        puffOutCenter:
          "puffOutCenter 0.4s cubic-bezier(0.470, 0.000, 0.745, 0.715) both",
        scaleInCenter:
          "scaleInCenter 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        swirlInForward: "swirlInForward 500ms ease-out both",
      },

      fontFamily: {
        signika: ['"Signika Negative"'],
        marmelad: ["Marmelad"],
        lobster: ['"Lobster"'],
        paytoneOne: ['"Paytone One"'],
        bungee: ['"Bungee"'],
        bungeeInline: ['"Bungee Inline"'],
        bungeeShade: ['"Bungee Shade"'],
        alfaSlabOne: ['"Alfa Slab One"'],
        lalezar: ['"Lalezar"'],
        phuDu: ['"Phudu"'],
        sarabun: ['"Sarabun"'],
        lilitaOne: ['"Lilita One"'],
        righteous: ['"Righteous"'],
        patuaOne: ['"Patua One"'],
      },
    },
  },
  plugins: [],
});
