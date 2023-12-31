import { Button, Input, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../../context/useGlobal";

interface AuthorizationProps {
  setValidForRouter: (valid: boolean) => void;
}

export default function Authorization({
  setValidForRouter,
}: AuthorizationProps) {
  const [input, setInput] = useState<string>("");
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  const handleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const global = useGlobal();
  const handleContinueClicked = () => {
    if (!valid) return;
    navigate("/for-serene-impl/here");
  };

  useEffect(() => {
    console.log("useEffect");
    const spaceRemoved = input.replace(/ /g, "");
    setValid(
      spaceRemoved.toLowerCase() === global.hexToUnicode("0x63 0x63 0x6b") ||
        spaceRemoved.toLowerCase() ===
          global.hexToUnicode("0x63 0x69 0x72 0x63 0x6c 0x65 0x6b"),
    );
    setValidForRouter(valid);
    return () => {};
  }, [input, setValidForRouter, valid, global]);

  return (
    <div className="w-screen flex justify-center mt-6">
      <div className="w-[32rem] ">
        <Typography
          color="pink"
          className="flex items-center gap-1 font-normal mb-2 font-signika text-xl"
        >
          Where was the place that I gave you our first kiss on your lips?
        </Typography>
        <Input
          variant="standard"
          size="lg"
          crossOrigin={undefined}
          type="password"
          color="pink"
          value={input}
          onChange={handleChanged}
          className="text-pink-500"
          label={valid ? "That's sweet, my darling ❤️" : "Where was it?"}
        />
        <Button
          ripple={valid ? true : false}
          color={valid ? "pink" : "gray"}
          className={`mt-2 w-full ${
            valid ? "animate-PulseSmall" : "hover:cursor-not-allowed"
          }`}
          onClick={handleContinueClicked}
        >
          Continue ▶
        </Button>
      </div>
    </div>
  );
}
