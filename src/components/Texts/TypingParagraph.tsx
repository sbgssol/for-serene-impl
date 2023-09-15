import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export interface TypingParagraphProps {
  paragraph: string[];
  speedInMs: number;
  className?: string;
}

export default function TypingParagraph(props: TypingParagraphProps) {
  const [sentenceIndx, setSentenceIndx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [content, setContent] = useState("");
  const [generated, setGenerated] = useState([""]);

  useEffect(() => {
    const id = setInterval(() => {
      if (sentenceIndx < props.paragraph.length) {
        if (charIdx < props.paragraph[sentenceIndx].length) {
          setContent(
            (prevContent) =>
              prevContent + props.paragraph[sentenceIndx][charIdx]
          );
        }
        if (charIdx < props.paragraph[sentenceIndx].length) {
          setCharIdx((prevCharIdx) => prevCharIdx + 1);
        } else {
          setGenerated([...generated, props.paragraph[sentenceIndx]]);
          setCharIdx(0);
          setSentenceIndx((idx) => idx + 1);
          setContent("");
          clearInterval(id);
        }
      }
    }, props.speedInMs);

    return () => {
      clearInterval(id);
    };
  }, [charIdx, generated, props.paragraph, props.speedInMs, sentenceIndx]);

  return (
    <>
      {generated.map((msg, index) => (
        <Typography key={index} className={`${props.className} block `}>
          {msg}
        </Typography>
      ))}
      <Typography className={props.className}>{content}</Typography>
    </>
  );
}
