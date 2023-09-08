import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Album from "./Album";
import Windows from "../../Windows";

export default function Words() {
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero, hic aspernatur, architecto nihil possimus laborum repellendus vitae cupiditate ut iusto voluptatum dolorum maiores, molestias quae facere labore laboriosam beatae.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non beatae aperiam suscipit sed debitis libero sit accusantium molestiae nostrum enim. Totam quibusdam reprehenderit a dolorem dicta beatae consectetur ab provident?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error aliquid quas commodi doloremque temporibus voluptates, magni unde fugiat minima dicta eligendi ratione exercitationem odit et, aliquam sed, distinctio ducimus. Ab?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque cupiditate dolor? Adipisci fuga quas illum ex vero ipsum, deleniti impedit autem corrupti vitae tempore, iusto in quis. Ea, suscipit!`;

  const [idx, setIdx] = useState(0);
  const [showing, setShowing] = useState(true);

  useEffect(() => {
    let showCharsInterval: number;
    let removeCharsInterval: number;

    if (showing) {
      showCharsInterval = setInterval(() => {
        if (idx < str.length) {
          setContent((prev) => prev + str[idx]);
          setIdx((prevIdx) => prevIdx + 1);
        } else {
          setShowing(false);
          clearInterval(showCharsInterval);
        }
      }, 10);
    }

    if (!showing && idx > 0) {
      removeCharsInterval = setInterval(() => {
        if (idx > 0) {
          setContent((prev) => prev.slice(0, -1));
          setIdx((prevIdx) => prevIdx - 1);
        } else {
          clearInterval(removeCharsInterval);
        }
      }, 5);
    }

    return () => {
      clearInterval(showCharsInterval);
      clearInterval(removeCharsInterval);
    };
  }, [idx, showing]);

  return (
    <>
      <Windows
        prevClick={() => {
          navigate(-1);
        }}
        nextClick={() => {
          navigate("/for-serene-impl/3");
        }}
      >
        <Typography className="font-marmelad text-pink-200">
          {content}
          <Album />
          <span className="inline-block w-1 h-4 ml-1 bg-white"></span>
        </Typography>
      </Windows>
    </>
  );
}
