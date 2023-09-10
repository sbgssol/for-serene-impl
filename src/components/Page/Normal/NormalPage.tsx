import { Button, Typography } from "@material-tailwind/react";
import RightIcon from "../../../assets/right.svg";
import LeftIcon from "../../../assets/left.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Normal() {
  const [animation1, setAnimation1] = useState(true);
  const [animation2, setAnimation2] = useState(false);
  const [animation3, setAnimation3] = useState(false);
  const [animation4, setAnimation4] = useState(false);
  const [animation5, setAnimation5] = useState(false);

  const genLeft = (msg: string) => {
    return (
      <Typography
        textGradient
        color="pink"
        className={`text-6xl font-signika uppercase font-black ${
          animation1 ? "animate-TrackingInContract" : "opacity-0"
        }`}
      >
        {msg}
      </Typography>
    );
  };

  const genRightTop = (msg: string) => {
    const dynamicClasses = animation3 ? "animate-ScaleInTopRight" : "opacity-0";
    return (
      <Typography
        className={`text-6xl font-marmelad font-medium ${dynamicClasses}`}
      >
        {msg}
      </Typography>
    );
  };

  const genRightCenter = (msg: string) => {
    const dynamicClasses = animation4 ? "animate-ScaleInRight" : "opacity-0";
    return (
      <Typography
        className={`text-6xl font-marmelad font-semibold ${dynamicClasses}`}
      >
        {msg}
      </Typography>
    );
  };

  const genRightBottom = (msg: string) => {
    const dynamicClasses = animation5
      ? "animate-ScaleInBottomRight"
      : "opacity-0";
    return (
      <Typography
        className={`text-7xl font-marmelad font-bold ${dynamicClasses}`}
      >
        {msg}
      </Typography>
    );
  };

  const genAllRight = () => {
    const dynamicClasses = animation2
      ? "animate-slideInBlurredRight"
      : "opacity-0";
    return (
      <div
        className={`space-y-5 border-l-4 border-pink-300  px-4 mx-4 ${dynamicClasses}`}
      >
        {genRightTop("Uja ok")}
        {genRightCenter("Qed xm")}
        {genRightBottom("Bgqynx rr")}
      </div>
    );
  };

  const handleNextClick = () => {
    if (!animation1) {
      setAnimation1(!animation1);
      return;
    }
    if (!animation2) {
      setAnimation2(!animation2);
      return;
    }
    if (!animation3) {
      setAnimation3(!animation3);
      return;
    }
    if (!animation4) {
      setAnimation4(!animation4);
      return;
    }
    if (!animation5) {
      setAnimation5(!animation5);
      return;
    }
    navigate("/for-serene-impl/4");
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container bg-[#333] w-[800px] h-[600px] mt-9 rounded-xl shadow-md shadow-pink-800/70">
          <div className="top-[50%] relative box-content -translate-y-[50%]">
            <div className="flex items-center justify-center">
              {genLeft("Hce")}
              {genAllRight()}
            </div>
          </div>
        </div>

        <div className="flex place-content-between w-80 md:w-[720px] lg:w-[800px] mt-5">
          <Button
            className="p-0 bg-transparent shadow-none hover:shadow-none transition-transform hover:scale-150 duration-150"
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={LeftIcon} alt="" />
          </Button>
          <Button
            className="p-0 bg-transparent shadow-none hover:shadow-none transition-transform hover:scale-150 duration-150"
            onClick={handleNextClick}
          >
            <img src={RightIcon} alt="" />
          </Button>
        </div>
      </div>
    </>
  );
}
