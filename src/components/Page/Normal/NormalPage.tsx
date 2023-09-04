import { Button, Typography } from "@material-tailwind/react";
import RightIcon from "../../../assets/right.svg";
import LeftIcon from "../../../assets/left.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TypingText from "../../Texts/Typing";

export default function Normal() {
  const [animation1, setAnimation1] = useState(true);
  const [animation2, setAnimation2] = useState(false);
  const [animation3, setAnimation3] = useState(false);
  const [animation4, setAnimation4] = useState(false);
  const [animation5, setAnimation5] = useState(false);

  const genLeft = (msg: string) => {
    if (animation1) {
      return (
        <Typography
          textGradient
          color="pink"
          className="text-6xl font-signika animate-zoomOut"
        >
          {msg}
        </Typography>
      );
    } else {
      return (
        <Typography
          textGradient
          color="pink"
          className="text-6xl font-signika opacity-0"
        >
          {msg}
        </Typography>
      );
    }
  };

  const genRightTop = (msg: string) => {
    if (animation3) {
      return (
        // <Typography className="text-6xl font-marmelad font-medium">
        //     {msg}
        // </Typography>
        <TypingText
          msg={msg}
          style="text-6xl font-marmelad font-medium text-pink-400"
        ></TypingText>
      );
    } else {
      return (
        <Typography className="text-6xl font-marmelad font-medium opacity-0">
          {msg}
        </Typography>
      );
    }
  };

  const genRightCenter = (msg: string) => {
    if (animation4) {
      return (
        <Typography className="text-6xl font-marmelad font-semibold animate-aniBounceInRight">
          {msg}
        </Typography>
      );
    } else {
      return (
        <Typography className="text-6xl font-marmelad font-semibold opacity-0">
          {msg}
        </Typography>
      );
    }
  };

  const genRightBottom = (msg: string) => {
    if (animation5) {
      return (
        <Typography className="text-7xl font-marmelad font-bold">
          {msg}
        </Typography>
      );
    } else {
      return (
        <Typography className="text-7xl font-marmelad font-bold opacity-0">
          {msg}
        </Typography>
      );
    }
  };

  const genAllRight = () => {
    if (animation2) {
      return (
        <div className="space-y-5 border-l-8 border-pink-300 bg-pink-100 px-2 py-4 mx-2 animate-animistaSlideInEllipticRight">
          {genRightTop("Uja ok")}
          {genRightCenter("Qed xm")}
          {genRightBottom("Bgqynx rr")}
        </div>
      );
    } else {
      return (
        <div className="space-y-5 border-l-8 border-pink-300 bg-pink-100 px-2 py-4 mx-2 opacity-0">
          {genRightTop("Uja ok")}
          {genRightCenter("Qed xm")}
          {genRightBottom("Bgqynx rr")}
        </div>
      );
    }
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
