import { useEffect, useState } from "react";

export default function TypingText(props: {
  msg: string;
  speedInMs: number;
  className?: string;
}) {
  const [content, setContent] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      if (msgIndex < props.msg.length) {
        setContent((prev) => prev + props.msg[msgIndex]);
        setMsgIndex((prev) => prev + 1);
      }
    }, props.speedInMs);

    return () => {
      clearInterval(id);
    };
  }, [content,msgIndex,props.speedInMs,props.msg]);

  return (
    <>
      <p className={props.className}>{content}</p>
    </>
  );
}
