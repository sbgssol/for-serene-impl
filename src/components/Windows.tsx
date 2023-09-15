import { Button } from "@material-tailwind/react";
import RightIcon from "../assets/right.svg";
import LeftIcon from "../assets/left.svg";
import { ReactElement } from "react";

export default function Windows(props: {
  prevDisabled?: boolean;
  prevClick?: () => void;
  nextDisabled?: boolean;
  nextClick?: () => void;
  children: ReactElement | ReactElement[];
  bg?: string;
  className?: string;
}) {
  const dynamicClasses =
    "p-0 bg-transparent shadow-none hover:shadow-none transition-transform hover:scale-125 duration-200 active:scale-75";
  return (
    <>
      <div
        className={`${
          props.bg === undefined ? "bg-[#333]" : props.bg
        } container mx-auto w-[800px] h-[600px] mt-9 rounded-xl shadow-md drop-shadow-lg shadow-pink-800/70 select-none ${
          props.className
        }`}
      >
        {props.children}
      </div>
      <div className="mx-auto flex justify-between w-80 md:w-[720px] lg:w-[800px] mt-5">
        <Button
          disabled={props.prevDisabled}
          className={dynamicClasses}
          onClick={props.prevClick}
          ripple={false}
        >
          <img src={LeftIcon} alt="" />
        </Button>
        <Button
          disabled={props.nextDisabled}
          className={dynamicClasses}
          onClick={props.nextClick}
          ripple={false}
        >
          <img src={RightIcon} alt="" />
        </Button>
      </div>
    </>
  );
}
