import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function CheckIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-3 w-3"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    );
}

export default function Normal() {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex justify-center bg-gray-500 h-screen">
                <Card
                    color="gray"
                    variant="gradient"
                    className="w-1/2 h-1/2 p-8 mt-3"
                >
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                    >
                        <Typography
                            variant="small"
                            color="white"
                            className="font-marmelad uppercase"
                        >
                            standard
                        </Typography>
                        <Typography
                            variant="h1"
                            color="white"
                            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                        >
                            <span className="mt-2 text-4xl">$</span>29{" "}
                            <span className="self-end text-4xl">/mo</span>
                        </Typography>
                    </CardHeader>
                    <CardBody className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                </span>
                                <Typography className="font-marmelad">
                                    5 team members
                                </Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                </span>
                                <Typography className="font-marmelad">
                                    200+ components
                                </Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                </span>
                                <Typography className="font-marmelad">
                                    40+ built-in pages
                                </Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                </span>
                                <Typography className="font-marmelad">
                                    1 year free updates
                                </Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                </span>
                                <Typography className="font-marmelad">
                                    Life time technical support
                                </Typography>
                            </li>
                        </ul>
                    </CardBody>
                    <CardFooter className="mt-12 p-0">
                        <Button
                            size="lg"
                            color="white"
                            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 active:bg-pink-100"
                            fullWidth={true}
                            ripple={false}
                            onClick={() => {navigate(-1)}}
                        >
                            Buy Now
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
