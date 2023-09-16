import { Typography } from "@material-tailwind/react";
import Windows from "../../Windows";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BorderedShadownedText from "../../BorderedShadowedText";

export default function Loves() {
  const navigate = useNavigate();
  const [topAnimation, settopAnimation] = useState(true);
  const [middleAnimation, setmiddleAnimation] = useState(false);
  const [bottomInAnimation, setbottomInAnimation] = useState(false);
  const [bottomOutAnimation, setbottomOutAnimation] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);
  const [textColor, settextColor] = useState("text-pink-200");
  const [windowColor, setwindowColor] = useState("bg-[#333]");
  const [textFont, setTextFont] = useState("font-nunito");
  const [fontSize, setfontSize] = useState("text-8xl");
  const [inAnimation, setinAnimation] = useState("animate-flyInUp");
  const [outAnimation, setOutAnimation] = useState("animate-flyOutUp");
  const [stateChanged, setstateChanged] = useState(false);
  const [needCover, setneedCover] = useState(false);
  const [strokeColor, setstrokeColor] = useState("#C9184A");

  useEffect(() => {
    console.log("word idx changed: " + wordIdx);
    if (wordIdx > 2) {
      settextColor("text-pink-600");
      setTextFont("font-lilitaOne");
      setfontSize("text-9xl");
      setinAnimation("animate-puffInCenter");
      setOutAnimation("animate-puffOutCenter");
      if (!stateChanged) {
        setneedCover(true);
        settopAnimation(false);
        setmiddleAnimation(false);
        setbottomInAnimation(false);
        setbottomOutAnimation(false);
        setstateChanged((prev) => !prev);
        setstrokeColor("#333");
      }
    }
  }, [wordIdx, stateChanged]);

  const words = [
    { word: "Condition", color: "#FAE0E4" },
    { word: "Limitation", color: "#FAE0E4" },
    { word: "Reservation", color: "#FAE0E4" },
    { word: "beliefs", color: "#FF4D6D" },
    { word: "life", color: "#FF4D6D" },
    { word: "heart", color: "#FF4D6D" },
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

    // navigate('/for-serene-impl/health')
    console.log("Click: 5");
  };

  const firstTop = () => {
    return (
      <>
        i <span className="text-pink-600">love</span> you
        {/* hello */}
      </>
    );
  };
  const secondTop = () => {
    // return <>i ❤ u</>;
    return (
      <BorderedShadownedText
        className={`pt-2 uppercase ${textFont} tracking-wide`}
        shadowBlur="0px"
        shadowColor="#FFFFFF"
        shadowWidth="0px"
        str="i ❤ u"
        strokeColor={strokeColor}
        strokeWidth="1px"
        textFill={words[wordIdx].color}
      />
    );
  };
  const genTop = () => {
    const dynamicClasses = topAnimation
      ? "animate-TrackingInExpand"
      : "opacity-0";
    return (
      <>
        <Typography
          className={`text-7xl uppercase font-semibold ${textFont} ${textColor} ${dynamicClasses}`}
        >
          {wordIdx < 3 ? firstTop() : secondTop()}
        </Typography>
      </>
    );
  };

  const genMiddle = () => {
    const dynamicClasses = middleAnimation ? "animate-flyInUp" : "opacity-0";
    return (
      <>
        <Typography
          className={`text-3xl ${textFont} ${textColor} ${dynamicClasses}`}
        >
          {wordIdx < 3 ? "without any" : "with all of my"}
        </Typography>
      </>
    );
  };

  const genBottom = () => {
    let dynamicClasses = bottomInAnimation ? inAnimation : "opacity-0";
    dynamicClasses = bottomOutAnimation ? outAnimation : dynamicClasses;
    console.log("bottom: " + dynamicClasses);
    return (
      <>
        <BorderedShadownedText
          className={`pt-2 uppercase ${textFont} tracking-wider ${dynamicClasses} ${fontSize}`}
          shadowBlur="1px"
          shadowColor="#FF99AC"
          shadowWidth="8px"
          str={words[wordIdx].word}
          strokeColor={strokeColor}
          strokeWidth="3px"
          textFill={words[wordIdx].color}
        />
      </>
    );
  };

  const genCover = () => {
    if (needCover) {
      setTimeout(() => {
        setneedCover(false);
        setwindowColor("bg-[#FFE5E5]");
        settopAnimation(true);
      }, 500);
      return (
        <>
          <div className="bg-[#FFE5E5] animate-scaleInCenter w-full h-full">
            <div className="relative top-1/2 -translate-y-1/2 h-1/2 flex flex-col justify-center">
              <div className="h-2/6 flex items-center justify-center"></div>
              <div className="h-1/6 relative left-0 flex items-center justify-center box-border "></div>
              <div className="flex flex-col justify-center items-center"></div>
            </div>
          </div>
        </>
      );
    } else {
      return (
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
      );
    }
  };

  return (
    <>
      <Windows
        prevClick={() => {
          navigate(-1);
        }}
        nextClick={handleNextClick}
        bg={windowColor}
        // className={`transition-colors duration-150 ease-out`}
      >
        {genCover()}
      </Windows>
    </>
  );
}
