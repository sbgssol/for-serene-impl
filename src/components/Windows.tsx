import { Button } from "@material-tailwind/react";
import RightIcon from "../assets/right.svg";
import LeftIcon from "../assets/left.svg";

export default function Windows(props: {
  prevDisabled?: boolean;
  prevClick?: () => void;
  nextDisabled?: boolean;
  nextClick: () => void;
  children: JSX.Element;
}) {

  let dynamicClasses = "p-0 bg-transparent shadow-none hover:shadow-none transition-transform hover:scale-125 duration-150 active:scale-75";
  return (
    <>
      <div className="container mx-auto bg-[#333] w-[800px] h-[600px] mt-9 rounded-xl shadow-md drop-shadow-lg shadow-pink-800/70 select-none">
        {props.children}
      </div>
      <div className="mx-auto flex justify-between w-80 md:w-[720px] lg:w-[800px] mt-5">
        <Button
          disabled={props.prevDisabled}
          className={dynamicClasses}
          onClick={props.prevClick}
        >
          <img src={LeftIcon} alt="" />
        </Button>
        <Button
          disabled={props.nextDisabled}
          className={dynamicClasses}
          onClick={props.nextClick}
        >
          <img src={RightIcon} alt="" />
        </Button>
      </div>
    </>
  );
}
