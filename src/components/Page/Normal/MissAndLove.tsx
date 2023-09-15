import { Typography } from "@material-tailwind/react";
import Windows from "../../Windows";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MissAndLove() {
  const [textColor, setTextColor] = useState("text-pink-800");
  const [textFont, setTextFont] = useState("font-sarabun");
  const [pIdx, setPIdx] = useState(0);
  const [bgColor, setBgColor] = useState<string>("bg-[#333]");
  const [animation0, setAnimation0] = useState(true);
  const [animation1, setAnimation1] = useState(false);
  const [animation2, setAnimation2] = useState(false);
  const [animation3, setAnimation3] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const [slideOut, setSlideOut] = useState(false);

  const navigate = useNavigate();

  const myWords = [
    ["in every dream", "i ache", "for your", "presence"],
    ["with every breath", "my love", "for you", "deepens"],
  ];

  const handleNextClick = () => {
    if (!animation0) {
      setAnimation0((prev) => !prev);
      return;
    }
    // console.log(1);
    if (!animation1) {
      setAnimation1((prev) => !prev);
      return;
    }
    // console.log(2);
    if (!animation2) {
      setAnimation2((prev) => !prev);
      return;
    }
    // console.log(3);
    if (!animation3) {
      setAnimation3((prev) => !prev);
      return;
    }
    // console.log(4);
    if (!slideIn && pIdx == 0) {
      setSlideIn(true);
      setTimeout(() => {
        setAnimation0(false);
      }, 500);
      setTimeout(() => {
        setSlideIn(false);
        setPIdx((prev) => prev + 1);
        setAnimation0(true);
        setAnimation1(false);
        setAnimation2(false);
        setAnimation3(false);
        setBgColor("bg-[#FFE5E5]");
        setTextColor("text-pink-700");
        setTextFont("font-phuDu");
      }, 550);
      return;
    }
    // console.log(5);
    // if (pIdx < myWords.length - 1) {
    //   setSlideIn(false);
    //   setPIdx((prev) => prev + 1);
    //   setAnimation0(true);
    //   setAnimation1(false);
    //   setAnimation2(false);
    //   setAnimation3(false);
    //   setBgColor("bg-[#FFE5E5]");
    //   setTextColor("text-[#333]");
    //   setTextFont("font-phuDu");
    //   return;
    // }
    // console.log(6);
    setSlideOut(true);
    setTimeout(() => {
      navigate("/for-serene-impl/loves");
    }, 500);
  };

  const genRightTop = (msg: string) => {
    const dynamicClasses = animation1 ? "animate-slideInRight" : "opacity-0";
    return (
      <Typography
        className={`${dynamicClasses} ${textColor} ${textFont} tracking-wider relative pl-1 font-black uppercase text-8xl`}
      >
        {msg}
      </Typography>
    );
  };

  const genRightMiddle = (msg: string) => {
    const dynamicClasses = animation2 ? "animate-flyInUp" : "opacity-0";
    return (
      <Typography
        className={`${dynamicClasses} ${textColor} relative pl-3 font-normal uppercase text-xl`}
      >
        {msg}
      </Typography>
    );
  };

  const genRightBottom = (msg: string) => {
    const dynamicClasses = animation3 ? "animate-flyInUp" : "opacity-0";
    return (
      <Typography
        className={`${dynamicClasses} ${textColor} ${textFont} tracking-wider relative pl-1 right-0 font-black uppercase text-8xl `}
      >
        {msg}
      </Typography>
    );
  };

  const genLeft = (msg: string) => {
    // console.log("left: " + animation0);
    const dynamicClasses = animation0 ? "animate-flyLeft" : "opacity-0";
    return (
      <Typography
        className={`${textColor} ${dynamicClasses} relative top-1/2 -translate-y-1/2 text-right pr-1 right-0 font-light uppercase text-4xl `}
      >
        {msg}
      </Typography>
    );
  };

  const genSlide = () => {
    let dynamicClasses1 = "bg-[#FFE5E5] z-10 animate-scaleInTop";
    let dynamicClasses2 = "bg-[#FFE5E5] z-10 animate-scaleInBottom";
    if (slideOut) {
      // console.log("slide out");
      dynamicClasses1 = "z-10 bg-[#333] animate-scaleOutTopFromBottom";
      dynamicClasses2 = "z-10 bg-[#333] animate-scaleOutBottomFromTop";
    }
    if (slideIn || slideOut) {
      return (
        <>
          <div
            className={`absolute  w-full h-[51%] rounded-t-lg ${dynamicClasses1}`}
          ></div>
          <div
            className={`absolute w-full h-[50%] bottom-0 rounded-b-lg ${dynamicClasses2}`}
          ></div>
        </>
      );
    }
    return <></>;
    // return (
    //   <>
    //     <div
    //       className={`absolute  w-full h-[51%] rounded-t-lg ${dynamicClasses1}`}
    //     ></div>
    //     <div
    //       className={`absolute w-full h-[50%] bottom-0 rounded-b-lg ${dynamicClasses2}`}
    //     ></div>
    //   </>
    // );
  };

  return (
    <>
      <Windows
        bg={bgColor}
        prevClick={() => {
          navigate(-1);
        }}
        nextClick={handleNextClick}
      >
        <>
          {genSlide()}
          <div className="relative top-1/2 -translate-y-1/2 flex">
            <div className="h-60 w-3/7">
              <div className="h-2/5 flex items-center">
                {genLeft(myWords[pIdx][0])}
              </div>
              <div className="h-1/5"></div>
              <div className="h-2/5"></div>
            </div>
            <div className="w-full">
              <div className="h-2/5">{genRightTop(myWords[pIdx][1])}</div>
              <div className="h-1/5 flex items-center">
                {genRightMiddle(myWords[pIdx][2])}
              </div>
              <div className="h-2/5">{genRightBottom(myWords[pIdx][3])}</div>
            </div>
          </div>
        </>
      </Windows>
    </>
  );
}
