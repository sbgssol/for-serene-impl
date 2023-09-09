import { Typography, TypographyProps } from "@material-tailwind/react";
import Windows from "../../Windows";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Loves() {
  const navigate = useNavigate();
  const [topAnimation, settopAnimation] = useState(true);
  const [middleAnimation, setmiddleAnimation] = useState(false);
  const [bottomInAnimation, setbottomInAnimation] = useState(false);
  const [bottomOutAnimation, setbottomOutAnimation] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);

  let words = [
    { word: "Condition", color: "blue" },
    { word: "Limitation", color: "indigo" },
    { word: "Reservation", color: "teal" },
    { word: "Devotion", color: "deep-orange" },
    { word: "Affection", color: "red" },
    { word: "Emotion", color: "pink" },
  ];

  const handleNextClick = () => {
    console.log("Click: 1");
    if (!topAnimation) {
      settopAnimation((prev) => !prev);
      return;
    }
    console.log("Click: 2");
    if (!middleAnimation) {
      setmiddleAnimation((prev) => !prev);
      return;
    }
    console.log("Click: 3");
    if (!bottomInAnimation) {
      setbottomInAnimation((prev) => !prev);
      return;
    }

    console.log("Click: 4");
    if (!bottomOutAnimation) {
      setbottomOutAnimation((prev) => !prev);
      setTimeout(() => {
        setbottomInAnimation(true);
        setbottomOutAnimation(false);
        if (wordIdx < words.length - 1) {
          setWordIdx((prev) => prev + 1);
        }
      }, 400);
      return;
    }
    console.log("Click: 5");
    // if (bottomOutAnimation) {
    //   setbottomInAnimation(true);
    //   setbottomOutAnimation(false);
    //   return;
    // }
  };

  const firstTop = () => {
    return (
      <>
        i <span className="text-pink-600">love</span> you
      </>
    );
  };
  const secondTop = () => {
    return <>i ❤️ u</>;
  };
  const genTop = () => {
    let dynamicClasses = topAnimation
      ? "animate-TrackingInExpand"
      : "opacity-0";
    return (
      <>
        <Typography
          className={`text-7xl uppercase font-semibold font-patuaOne ${dynamicClasses}`}
        >
          {wordIdx < 3 ? firstTop() : secondTop()}
        </Typography>
      </>
    );
  };

  const genMiddle = () => {
    let dynamicClasses = middleAnimation ? "animate-flyInUp" : "opacity-0";
    return (
      <>
        <Typography className={`text-3xl ${dynamicClasses}`}>
          {wordIdx < 3 ? "without" : "with all my"}
        </Typography>
      </>
    );
  };

  const genBottom = () => {
    let dynamicClasses = bottomInAnimation ? "animate-flyInUp" : "opacity-0";
    dynamicClasses = bottomOutAnimation ? "animate-flyOutUp" : dynamicClasses;
    console.log("bottom: " + dynamicClasses);
    return (
      <>
        <Typography
          className={`text-8xl font-semibold font-righteous drop-shadow-md ${dynamicClasses}`}
          // color="red"
          color={words[wordIdx].color as TypographyProps["color"]}
          textGradient
        >
          {words[wordIdx].word}
        </Typography>
      </>
    );
  };
  return (
    <>
      <Windows
        prevClick={() => {
          navigate(-1);
        }}
        nextClick={handleNextClick}
      >
        <>
          <div className="relative top-1/2 -translate-y-1/2 h-1/2 flex flex-col justify-center">
            <div className="h-2/6 flex items-center justify-center">
              {genTop()}
            </div>
            <div className="h-1/6 relative left-0 flex items-center justify-center box-border ">
              {genMiddle()}
            </div>
            <div className="flex flex-col justify-center items-center">
              {genBottom()}
            </div>
          </div>
        </>
      </Windows>
    </>
  );
}
