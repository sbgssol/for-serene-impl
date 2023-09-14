// import { useEffect, useState } from "react";
// import { useTyping } from "../../context/useTyping";
// import TypingText from "./Typing";
// import { Button } from "@material-tailwind/react";

// export interface TypingParagraphProps {
//   paragraph: string[];
//   speedInMs: number;
//   className?: string;
// }
// export default function TypingParagraph(props: TypingParagraphProps) {
//   const typingStatus = useTyping();
//   const [generated, setGenerated] = useState([""]);
//   const [showing, setShowing] = useState(props.paragraph[0]);
//   const [sentenceIdx, setSentenceIdx] = useState(0);
//   let interval = 0;
//   let id = 0;

//   useEffect(() => {
//     if (sentenceIdx < props.paragraph.length) {
//       interval = 2 * (props.paragraph[sentenceIdx].length * props.speedInMs);

//       console.log("Sentence Idx:", sentenceIdx);
//       console.log("Interval:", interval);

//       id = setInterval(() => {
//         setSentenceIdx((idx) => idx + 1);
//       }, interval);

//       if
//       if (sentenceIdx > props.paragraph.length - 1) {
//         setSentenceIdx(0);
//       }
//     }

//     return () => {
//       clearInterval(id);
//     };
//   }, [sentenceIdx]);

//   return (
//     <>
//       <p className="text-white">Sentance idx: {sentenceIdx}</p>
//       <TypingText
//         msg={showing}
//         speedInMs={props.speedInMs}
//         className={props.className}
//         key={showing + sentenceIdx}
//       />
//       {/* <Button onClick={handleClick}>Click</Button> */}
//     </>
//   );
// }
