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
    };

    const genThanks = () => {
        if (!flyIn1) {
            return (
                <Typography
                    variant="h2"
                    className="font-signika text-pink-100 pr-3 opacity-0"
                >
                    Cảm ơn em
                </Typography>
            );
        } else {
            return (
                <Typography
                    variant="h2"
                    className="font-signika text-pink-100 pr-3 animate-flyLeft"
                >
                    Cảm ơn em
                </Typography>
            );
        }
    };

    const genHeader = () => {
        if (flyIn2) {
            return (
                <>
                    <Typography
                        variant="h2"
                        className={`font-signika text-pink-300 bg-pink-50 text-6xl px-3 py-1 box-content rounded-md uppercase animate-flyRight`}
                    >
                        Công chúa
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
                        Công chúa
                    </Typography>
                </>
            );
        }
    };

    const genMine = () => {
        if (!flyIn3) {
            return (
                <Typography variant="h2" className="font-signika text-pink-300 opacity-0">
                    của anh
                </Typography>
            );
        } else {
            return (
                <Typography variant="h2" className="font-signika text-pink-300 animate-flyTop">
                    của anh
                </Typography>
            );
        }
    };

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="container flex items-center justify-center mx-auto bg-[#333] w-[800px] h-[600px] mt-9 rounded-xl shadow-md shadow-pink-800/70">
                    <div className="header flex justify-center mt-10 place-items-baseline">
                        {genThanks()}
                        <div className="sub-header flex flex-col items-start">
                            <div className="flex">{genHeader()}</div>
                            {genMine()}
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
