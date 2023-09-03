import { Button, Typography } from "@material-tailwind/react";
import RightIcon from "../../../assets/right.svg";
import LeftIcon from "../../../assets/left.svg";
import { useNavigate } from "react-router-dom";

const genLeft = (msg: string) => {
    return (
        <Typography textGradient color="pink" className="text-6xl font-marmelad">
            {msg}
        </Typography>
    );
};

const genRightTop = (msg: string) => {
    return <Typography className="text-5xl font-signika font-medium">{msg}</Typography>;
};

const genRightCenter = (msg: string) => {
    return <Typography className="text-6xl font-signika font-semibold">{msg}</Typography>;
};

const genRightBottom = (msg: string) => {
    return <Typography className="text-7xl font-signika font-bold">{msg}</Typography>;
};

export default function Normal() {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="container bg-[#333] w-[800px] h-[600px] mt-9 rounded-xl shadow-md shadow-pink-800/70">
                    <div className="top-[50%] relative box-content -translate-y-[50%]">
                        <div className="flex items-center justify-center">
                            {genLeft("Hce")}
                            <div className="border-l-4 border-pink-300 bg-pink-100 px-2 py-2 mx-2 rounded">
                                {genRightTop("Uja ok")}
                                {genRightCenter("Qed xm")}
                                {genRightBottom("Bgqynx rr")}
                            </div>
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
                        onClick={() => {}}
                    >
                        <img src={RightIcon} alt="" />
                    </Button>
                </div>
            </div>
        </>
    );
}
