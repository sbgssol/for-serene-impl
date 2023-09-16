import { useNavigate } from "react-router-dom";
import Windows from "../../Windows";
import Album from "./Album";
import TypingParagraph from "../../Texts/TypingParagraph";

export default function WordsHealth() {
  const navigate = useNavigate();
  const health = [
    "Tóc mới của em trông xinh lắm.",
    "Em có khỏe không? Qua những bức ảnh mà anh được thấy thì em gầy rồi.",
    "Em à, cho dù có chuyện gì xảy đến đi nữa, phải nhớ yêu lấy bản thân mình, phải thật khỏe mạnh, phải luôn bình an nhé.",
    "Em đã có cơ hội nói chuyện với ba mẹ chưa? Kể từ lần nói chuyện gần nhất, anh đã không có cơ hội để hỏi em nhiều hơn về điều này, sẽ thật tốt nếu anh được em kể cho anh nghe điều này.",
    "Công việc của em dạo này sao rồi? Chắc hẳn có nhiều điểu để nói lắm em nhỉ.",
    "Giờ anh chỉ muốn ngồi cạnh em, nắm lấy tay em, nhìn vào mắt em, và lắng nghe em trút hết nỗi lòng sao ngần ấy thời gian em phải một mình vượt qua những điều ấy, anh muốn nghe giọng em bên anh lúc này.",
  ];

  return (
    <>
      <Windows
        prevClick={() => {
          navigate(-1);
        }}
        nextClick={() => {
          navigate("/for-serene-impl/thanks");
        }}
      >
        <TypingParagraph
          paragraph={health}
          speedInMs={50}
          className="text-xl text-primaryPink-300 font-primary px-2 py-2 font-normal"
        />
        <Album title="here" />
      </Windows>
    </>
  );
}
