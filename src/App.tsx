// import { useNavigate } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Windows from "./components/Windows";
// import { useGlobal } from "./context/useGlobal";

function App() {
  const [flyIn1, setFlyIn1] = useState(true);
  const [flyIn2, setFlyIn2] = useState(false);
  const [flyIn3, setFlyIn3] = useState(false);
  const [flyIn4, setFlyIn4] = useState(false);
  const [flyIn5, setFlyIn5] = useState(false);
  const [heartIn, setheartIn] = useState(false);
  const navigate = useNavigate();

  const handleNextClick = () => {
    console.log("App.Click 1");
    if (!flyIn1) {
      setFlyIn1(!flyIn1);
      return;
    }
    console.log("App.Click 2");
    if (!flyIn2) {
      setFlyIn2(!flyIn2);
      return;
    }
    console.log("App.Click 3");
    if (!flyIn3) {
      setFlyIn3(!flyIn3);
      return;
    }
    console.log("App.Click 4");
    if (!flyIn4) {
      setFlyIn4(!flyIn4);
      setTimeout(() => {
        setFlyIn5(!flyIn5);
      }, 500);
      return;
    }
    console.log("App.Click 5");
    // if (!flyIn5) {
    //   setFlyIn5(!flyIn5);
    //   return;
    // }
    console.log("App.Click 6");
    navigate("/for-serene-impl/2");
  };

  const genThanks = (msg: string) => {
    let dynamicClasses = flyIn1 ? "animate-flyLeft" : "opacity-0";
    return (
      <Typography
        variant="h2"
        className={`font-signika text-pink-100 pr-3 text-4xl ${dynamicClasses}`}
      >
        {msg}
      </Typography>
    );
  };

  const genPrincess = (msg: string) => {
    let classes = flyIn2 ? "animate-flyRight" : "opacity-0";
    return (
      <>
        <Typography
          variant="h2"
          className={`font-marmelad text-pink-300 bg-pink-50 text-6xl px-3 py-1 box-content rounded-md uppercase shadow-md shadow-pink-800/80 ${classes} `}
        >
          {msg}
        </Typography>
      </>
    );
  };
  const genHere = (msg: string) => {
    let classes = flyIn4 ? "animate-flyInUp" : "opacity-0";
    return (
      <>
        <Typography
          variant="h2"
          className={`font-marmelad text-pink-50 bg-pink-300 shadow-lg shadow-pink-600/80 text-6xl px-3 py-1 box-content rounded-md uppercase ${classes}`}
        >
          {msg}
        </Typography>
      </>
    );
  };
  const genHeart = (msg: string) => {
    let classes = flyIn5 ? "animate-scaleInCenter" : "opacity-0";
    if (flyIn5) {
      setTimeout(() => {
        setheartIn(true);
      }, 400);
    }
    if (heartIn) {
      classes = "animate-PulseMedium";
    }
    return (
      <>
        <Typography
          variant="h2"
          className={`text-6xl py-1 pl-2 text-primaryPink-500 ${classes}`}
        >
          {msg}
        </Typography>
      </>
    );
  };

  const genMine = (msg: string) => {
    let dynamicClasses = flyIn3 ? "animate-flyRight" : "opacity-0";
    return (
      <Typography
        variant="h2"
        className={`font-signika text-pink-300 text-4xl ${dynamicClasses}`}
      >
        {msg}
      </Typography>
    );
  };

  const genBecause = (msg: string) => {
    let dynamicClasses = flyIn3 ? "animate-flyRight" : "opacity-0";
    return (
      <Typography
        variant="h3"
        className={`font-signika text-pink-100 text-4xl ${dynamicClasses}`}
      >
        {msg}
      </Typography>
    );
  };

  return (
    <>
      <Windows prevDisabled nextClick={handleNextClick}>
        <div className="relative top-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="header flex justify-center place-items-baseline">
            {genThanks("Www ww ww")}
            <div className="sub-header flex flex-col items-start">
              <div className="flex">{genPrincess("G101 1101")}</div>
              {genMine("111 011")}
              <div className="flex justify-between w-full">
                <div className="text-center">{genBecause("10 11 00")}</div>
                <div className="w-full text-center flex ">
                  {genHere("0 011")}
                  {genHeart("❤")}
                  {/* {genHeart("❤")} */}
                  {/* {genHeart("❤️")} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Windows>
    </>
  );
}

export default App;
