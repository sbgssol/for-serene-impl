// import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import RightIcon from "./assets/right.svg";
import LeftIcon from "./assets/left.svg";
import { useState } from "react";

function App() {
    // const navigate = useNavigate();
    const handlePrevClick = () => {
        alert("Prev clicked!");
    };

    const [flyIn1, setFlyIn1] = useState(false);
    const [flyIn2, setFlyIn2] = useState(false);
    const handleNextClick = () => {
        setFlyIn1(!flyIn1);
        if (flyIn1) {
            setFlyIn2(!flyIn2);
        }
    };

    const genHeader = () => {
        if (flyIn1) {
          return (
            <>
                <Typography
                    variant="h2"
                    className={`font-signika text-pink-300 z-10 uppercase opacity-0`}
                >
                    Oyng chAa
                </Typography>
                <div
                    className={`bg-pink-200 w-[200px] h-14 absolute z-0 top-[70px] right-[770px] ${
                        flyIn1 ? "animate-flyRight opacity-1" : ""
                    }`}
                ></div>
            </>
        );
        }
        if (flyIn2) {
            return (
                <>
                    <Typography
                        variant="h2"
                        className={`font-signika text-pink-300 z-10 uppercase ${
                            flyIn2 ? "animate-flyRight opacity-1" : ""
                        }`}
                    >
                        Oyng chAa
                    </Typography>
                    <div
                        className={`bg-pink-200 w-[200px] h-14 absolute z-0 top-[70px] right-[770px] ${
                            flyIn1 ? "animate-flyRight opacity-1" : ""
                        }`}
                    ></div>
                </>
            );
        }
    };

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="container mx-auto bg-[#333] w-[800px] h-[600px] mt-9 rounded-xl shadow-md shadow-pink-800/70">
                    <div className="header flex justify-center mt-10">
                        <Typography
                            variant="h2"
                            className="font-signika text-pink-100 animate-pulse pr-3"
                        >
                            Uwx pa mu
                        </Typography>
                        <div className="sub-header flex flex-col items-end">
                            <div className="flex">{genHeader()}</div>
                            <Typography
                                variant="h2"
                                className="font-signika text-pink-300"
                            >
                                TủQ snc
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="flex place-content-between w-[800px] mt-5">
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
