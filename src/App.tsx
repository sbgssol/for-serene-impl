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
    const [flyIn3, setFlyIn3] = useState(false);
    const [flyIn4, setFlyIn4] = useState(false);

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
        if (flyIn2) {
            return (
                <>
                    <Typography
                        variant="h2"
                        className={`font-signika text-pink-300 bg-pink-50 text-6xl px-3 py-1 box-content rounded-md uppercase animate-flyRight`}
                    >
                        {msg}
                    </Typography>
                </>
            );
        } else {
            return (
                <>
                    <Typography
                        variant="h2"
                        className="font-signika text-pink-300 bg-pink-50 text-6xl px-3 box-content uppercase opacity-0"
                    >
                        {msg}
                    </Typography>
                </>
            );
        }
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
                    className="font-signika text-pink-300 animate-flyUp"
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
                    className="font-signika text-pink-100 animate-flyDown "
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
            <div className="flex flex-col items-center">
                <div className="container flex items-center justify-center mx-auto bg-[#333] w-[800px] h-[600px] mt-9 rounded-xl shadow-md shadow-pink-800/70">
                    <div className="header flex justify-center mt-10 place-items-baseline">
                        {genThanks("Tud ak wm")}
                        <div className="sub-header flex flex-col items-start">
                            <div className="flex">{genHeader("Ysdc lter")}</div>
                            {genMine("Prv Kvf")}
                            <div className="md:w-[330px] flex flex-col">
                              {genBecause("Kt Nv Wz")}
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
