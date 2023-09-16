import { useNavigate } from "react-router-dom";
import Windows from "../../Windows";
import Album from "./Album";
import TypingParagraph from "../../Texts/TypingParagraph";

export default function WordsThanks() {
  const navigate = useNavigate();
  const thanks = [
    "CẢM ƠN EM vì đã Ở ĐÂY và đọc những dòng này của anh.",
    "Cảm ơn em vì em đã luôn tha thứ cho anh, dù anh đã bao lần có lỗi với em.",
    "Cảm ơn em luôn dành thời gian cho anh cho dù anh đã lấy đi của em rất nhiều.",
    "Cảm ơn em bởi vì sau bao nhiều biến cố xảy ra, em vẫn luôn dành cho anh sự dịu dàng nơi em.",
    "Cảm ơn em vì cho dù ở trong hoàn cảnh nào đi nữa, em vẫn luôn tôn trọng anh, và lắng nghe anh.",
    "Cảm ơn em vì đã xuất hiện trên cuộc đời này, đến bên anh, nắm lấy tay anh.",
    "Cảm ơn em vì đã cho anh một tình yêu ngây thơ, trong sáng, thuần khiết, đong đầy, và duy nhất trên đời này.",
  ];

  return (
    <>
      <Windows
        prevClick={() => {
          navigate(-1);
        }}
        nextClick={() => {
          navigate("/for-serene-impl/miss");
        }}
      >
        <TypingParagraph
          paragraph={thanks}
          speedInMs={50}
          className="text-xl text-primaryPink-300 font-primary px-2 py-2 font-normal"
        />
        <Album title="here" />
      </Windows>
    </>
  );
}
