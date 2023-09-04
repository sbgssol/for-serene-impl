import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function TypingText(props: { msg: string; style: string }) {
    const [content, setContent] = useState("");
    const [idx, setIdx] = useState(0);
    const [sign, setSign] = useState("|");
    useEffect(() => {
        let id = setInterval(() => {
            if (idx < props.msg.length) {
                setContent((prevContent) => prevContent + props.msg[idx]);
                setIdx((prev) => prev + 1);
            } else {
                clearInterval(id);
                setSign("");
            }
            console.log(idx, content, props.msg);
        }, 200);

        return () => {
            clearInterval(id);            
        };
    }, [content]);

    return <Typography className={props.style}>{content}{sign}</Typography>;
}
