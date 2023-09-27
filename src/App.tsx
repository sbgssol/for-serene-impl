// import { useNavigate } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Windows from "./components/Windows";
// import { useGlobal } from "./context/useGlobal";

function ThanksBae() {
  const [flyIn1, setFlyIn1] = useState(true);
  const [flyIn2, setFlyIn2] = useState(false);
  const [flyIn3, setFlyIn3] = useState(false);
  const [flyIn3b, setFlyIn3b] = useState(false);
  const [flyIn4, setFlyIn4] = useState(false);
  const [flyIn5, setFlyIn5] = useState(false);
  const [heartIn, setheartIn] = useState(false);
  const navigate = useNavigate();

  const bigFont = "font-marmelad";

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
    console.log("App.Click 3b");
    if (!flyIn3b) {
      setFlyIn3b(!flyIn3b);
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
    navigate("/for-serene-impl/health");
  };

  const commonTextColor = "text-[#FF8FA3]";

  const genThanks = (msg: string) => {
    const dynamicClasses = flyIn1 ? "animate-flyLeft" : "opacity-0";
    return (
      <Typography
        variant="h2"
        className={`relative font-signika ${commonTextColor} pr-3 text-4xl ${dynamicClasses}`}
      >
        {msg}
      </Typography>
    );
  };

  const genPrincess = (msg: string) => {
    const classes = flyIn2 ? "animate-flyRight" : "opacity-0";
    return (
      <>
        <Typography
          variant="h2"
          className={`${bigFont} text-[#FF4D6D] bg-pink-50 text-7xl px-3 py-1
           box-content rounded-md uppercase ${classes} `}
          style={{
            boxShadow: "4px 4px 0px 0px #FF8FA3",
          }}
        >
          {msg}
        </Typography>
      </>
    );
  };
  const genHere = (msg: string) => {
    const classes = flyIn4 ? "animate-flyInUp" : "opacity-0";
    return (
      <>
        <Typography
          variant="h2"
          className={`${bigFont} w-full text-pink-50 bg-[#FF4D6D] text-7xl 
          px-3 py-1 box-content rounded-md uppercase ${classes}`}
          style={{
            boxShadow: "4px 4px 0px 0px #800F2F",
          }}
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
          className={`flex items-center text-7xl pl-4 text-primaryPink-500 ${classes}`}
        >
          {msg}
        </Typography>
      </>
    );
  };

  const genMine = (msg: string) => {
    const dynamicClasses = flyIn3 ? "animate-flyRight" : "opacity-0";
    return (
      <Typography
        variant="h2"
        className={`font-signika text-primaryPink-500 text-4xl ${dynamicClasses}`}
      >
        {msg}
      </Typography>
    );
  };

  const genBecause = (msg: string) => {
    const dynamicClasses = flyIn3b ? "animate-flyRight" : "opacity-0";
    return (
      <Typography
        variant="h2"
        className={`font-signika ${commonTextColor} text-4xl ${dynamicClasses}`}
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
            {genThanks("Cảm ơn em,")}
            <div className="sub-header flex flex-col items-start">
              <div className="flex">{genPrincess("công chúa")}</div>
              <div className="flex space-x-4">
                {genMine("của anh, ")}
                {genBecause("vì em đã")}
              </div>
              <div className="flex justify-between w-full">
                {/* <div className="text-center">{genBecause("vì em đã")}</div> */}
                <div className="w-full text-center flex ">
                  {genHere("ở đây")}
                  {/* {genHeart("❤️")} */}
                  {genHeart("❤")}
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

export default ThanksBae;
