import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Album from "../Page/Normal/Album";
import MeiImg1 from "../../assets/mei/01.png";
import MeiImg2 from "../../assets/mei/02.png";
import MeiImg3 from "../../assets/mei/03.png";
import MeiImg4 from "../../assets/mei/04.png";
import MeiImg5 from "../../assets/mei/05.png";
import MeiImg7 from "../../assets/mei/07.png";
import MeiImg8 from "../../assets/mei/08.png";
import MeiImg9 from "../../assets/mei/09.png";
import Img1 from "../../assets/01.png";
import Img2 from "../../assets/02.png";
import Img3 from "../../assets/03.png";
import Img4 from "../../assets/04.png";
import Img5 from "../../assets/05.png";
import Img6 from "../../assets/06.png";
import LinkImg01 from "../../assets/link01.png";
import LinkImg02 from "../../assets/link02.png";
import LinkImg03 from "../../assets/link03.png";
import LinkImg04 from "../../assets/link04.png";
import LinkImg05 from "../../assets/link05.png";

const slender = [
  {
    path: MeiImg2,
    desc: "Tay nhỏ xíu nè",
  },
  {
    path: MeiImg3,
    desc: "Vẫn rất xinh",
  },
  {
    path: MeiImg4,
    desc: "Sao anh nhìn tấm nào cũng thấy em gầy hết :<",
  },
  {
    path: MeiImg5,
    desc: "Và vấn rất xinh",
  },
  {
    path: MeiImg7,
    desc: "Và đây nữa, anh chìm trong đôi mắt ấy",
  },
  {
    path: MeiImg8,
    desc: "Tay có đốm đỏ, có phải bị côn trùng đốt rồi không 😥",
  },
  {
    path: MeiImg9,
    desc: "Một con báo, và hai con mèo. Đáng iu thậc sự 🥰",
  },
];

const newHair = [
  {
    path: MeiImg1,
    desc: "Tóc mới xinh lắm, anh đều ngắm bức ảnh này vào mỗi buổi sáng trước khi làm bất cứ việc gì. Đôi mắt của em rất đẹp trong bức ảnh này em biết không?",
  },
];

const hardTime = [
  {
    path: Img1,
    desc: "Thời gian vừa qua anh rất stress, có rất nhiều điều không ổn từ công việc, đến việc gia đình, nó khiến anh kiệt sức, anh không thể kiểm soát được, mỗi khi anh không ổn thì nội tiết trong anh thay đổi rất nhiều...",
  },
  {
    path: Img2,
    desc: "Mọi thứ với anh nó đã không ổng rồi, việc thay đổi nội tiết nhiều khiến anh cảm thấy áp lực hơn, mọi thứ nặng nề hơn và nghiêm trọng hơn 😥",
  },
  {
    path: Img3,
    desc: "Anh đã phải làm rất nhiều, và làm trễ nữa, hầu như là 6 ngày trong tuần. Ở trên là tin nhắn của PM follow status của anh",
  },
  {
    path: Img4,
    desc: "Và cả đây nữa, anh đã làm đến tận...10h, buông ra thì đầu óc và cơ thể đã không còn sức nữa rồi 😢",
  },
  {
    path: Img5,
    desc: "...",
  },
  {
    path: Img6,
    desc: "Và mẹ anh cũng nhận ra anh không ổn...",
  },
];
const links = [
  {
    path: LinkImg01,
    desc: "Anh đã luôn mang chiếc bông tai này, vì anh tin rằng chính nó sẽ giúp anh có thể động lực vượt qua mọi khó khăn. Chính nó sẽ cho anh cảm giác luôn có em ở cảnh anh",
  },
  {
    path: LinkImg02,
    desc: "Đây nữa",
  },
  {
    path: LinkImg03,
    desc: "Và đây nữa. Mà em thấy đó, da anh vẫn chưa thật sự ổn",
  },
  {
    path: LinkImg04,
    desc: "Và đây là tấm hình anh dùng lúc đi làm 😁",
  },
  {
    path: LinkImg05,
    desc: "Và lên báo tuyển dụng của cty 🤗",
  },
];

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
          {msg.includes("Em cắt tóc xinh lắm") ? (
            <Album
              title="click"
              images={newHair}
              titleClasses="text-blue-300 py-0 px-1 underline underline-offset-2"
            />
          ) : (
            ""
          )}
          {msg.includes("anh thấy em gầy đi hơn trước nhiều lắm rồi á") ? (
            <Album
              title="click"
              images={slender}
              titleClasses="text-blue-300 py-0 px-1 underline underline-offset-2"
            />
          ) : (
            ""
          )}
          {msg.includes("Anh đã có một khoản thời gian vô cùng khó khăn") ? (
            <Album
              title="click"
              images={hardTime}
              titleClasses="text-blue-300 py-0 px-1 underline underline-offset-2"
            />
          ) : (
            ""
          )}
          {msg.includes("có một mối liên kết đặc biệt") ? (
            <Album
              title="click"
              images={links}
              titleClasses="text-blue-300 py-0 px-1 underline underline-offset-2"
            />
          ) : (
            ""
          )}
        </Typography>
      ))}
      <Typography className={props.className}>{content}</Typography>
    </>
  );
}
