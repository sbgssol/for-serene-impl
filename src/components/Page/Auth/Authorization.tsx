import { Button, Input, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useGlobal } from "../../../context/useGlobal";
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

  const checkValid = () => {
    setValid(
      input.toLowerCase() === "cck" || input.toLowerCase() === "circle k"
    );
    setValidForRouter(valid);
    return valid;
  };

  const handleContinueClicked = () => {
    if (!checkValid()) return;
    navigate("/for-serene-impl/1");
  };

  useEffect(() => {
    checkValid();
    return () => {};
  }, [input]);

  // const global = useGlobal();

  return (
    <div className="w-screen flex justify-center mt-6">
      <div className="w-[32rem] ">
        <Typography
          variant="lead"
          color="pink"
          className="flex items-center gap-1 font-normal mb-2 font-signika"
        >
          Do you remember the place where I gave you our first kiss on your lips?
        </Typography>
        <Input
          crossOrigin={undefined}
          type="password"
          color="pink"
          value={input}
          onChange={handleChanged}
          label={valid ? "That's sweet, my darling ❤️" : "Do you remember?"}
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
