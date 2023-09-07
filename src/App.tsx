// import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import RightIcon from "./assets/right.svg";
import LeftIcon from "./assets/left.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  // const navigate = useNavigate();
  const handlePrevClick = () => {
    alert("Prev clicked!");
  };

  const [flyIn1, setFlyIn1] = useState(true);
  const [flyIn2, setFlyIn2] = useState(false);
  const [flyIn3, setFlyIn3] = useState(false);
  const [flyIn4, setFlyIn4] = useState(false);
  const [flyIn5, setFlyIn5] = useState(false);
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (!flyIn1) {
      setFlyIn1(!flyIn1);
      return;
    }
    if (!flyIn2) {
      setFlyIn2(!flyIn2);
      return;
    }
    if (!flyIn3) {
      setFlyIn3(!flyIn3);
      return;
    }
    if (!flyIn4) {
      setFlyIn4(!flyIn4);
      return;
    }
    if (!flyIn5) {
      setFlyIn5(!flyIn5);
      return;
    }
    navigate("/for-serene-impl/2");
  };

  const genThanks = (msg: string) => {
    if (!flyIn1) {
      return (
        <Typography
          variant="h2"
          className="font-signika text-pink-100 pr-3 opacity-0"
        >
          {msg}
        </Typography>
      );
    } else {
      return (
        <Typography
          variant="h2"
          className="font-signika text-pink-100 pr-3 animate-flyLeft"
        >
          {msg}
        </Typography>
      );
    }
  };

  const genHeader = (msg: string) => {
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
  const genHead = (msg: string) => {
    let classes = flyIn5 ? "animate-flyUp" : "opacity-0";
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
    let classes = flyIn5 ? "animate-Pulse" : "opacity-0";
    return (
      <>
        <Typography variant="h2" className={`text-6xl py-1  ${classes}`}>
          {msg}
        </Typography>
      </>
    );
  };

  const genMine = (msg: string) => {
    if (!flyIn3) {
      return (
        <Typography
          variant="h2"
          className="font-signika text-pink-300 opacity-0"
        >
          {msg}
        </Typography>
      );
    } else {
      return (
        <Typography
          variant="h2"
          className="font-signika text-pink-300 animate-flyRight"
        >
          {msg}
        </Typography>
      );
    }
  };

  const genBecause = (msg: string) => {
    if (!flyIn4) {
      return (
        <Typography
          variant="h3"
          className="font-signika text-pink-100 opacity-0"
        >
          {msg}
        </Typography>
      );
    } else {
      return (
        <Typography
          variant="h3"
          className="font-signika text-pink-100 animate-flyRight "
        >
          {msg}
        </Typography>
      );
    }
  };

  // const genHere = (msg: string) => {

  // };

  return (
    <>
      <div className="flex flex-col items-center select-none">
        <div className="container flex items-center justify-center bg-[#333] w-[800px] h-[600px] mt-9 rounded-xl shadow-lg drop-shadow-lg shadow-pink-800/80">
          <div className="flex flex-col items-center">
            <div className="header flex justify-center mt-10 place-items-baseline">
              {genThanks("Cảm ơn em,")}
              <div className="sub-header flex flex-col items-start">
                <div className="flex">{genHeader("Công chúa")}</div>
                {genMine("của anh")}
                <div className="flex justify-between w-full">
                  <div className="text-center">{genBecause("vì em còn ")}</div>
                  <div className="w-full text-center flex ">
                    {genHead("Ở đây")}
                    {genHeart("❤️")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex place-content-between w-80 md:w-[720px] lg:w-[800px] mt-5">
          <Button
            className="p-0 bg-transparent shadow-none hover:shadow-none transition-transform hover:scale-150 duration-150"
            disabled
            onClick={handlePrevClick}
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

export default App;
