import { useNavigate } from "react-router-dom";
import Windows from "../../Windows";
// import Album from "./Album";
import TypingParagraph from "../../Texts/TypingParagraph";

export default function WordsHealth() {
  const navigate = useNavigate();
  const health = [
    "...",
    "Em cắt tóc xinh lắm",
    "Em có khỏe không?",
    "Qua những bức ảnh gần đây, anh thấy em gầy đi hơn trước nhiều lắm rồi á (*)",
    "Em đã nói chuyện với ba mẹ chưa? Chắc dịp về quê vừa rồi em đã có cơ hội được nói chuyện rồi em nhỉ? Kể từ lần nói chuyện gần nhất, anh đã không có cơ hội để được nghe em chia sẽ với anh, sẽ thật tốt nếu bây giờ anh ở bên cạnh em, anh muốn biết xem em đã thế nào.",
    "Công việc của em dạo này sao rồi, em có ổn với nó không? Chắc hẳn có nhiều điểu để nói lắm em nhỉ, công việc của anh cũng vậy, có thật nhiều điều để anh kể cho em nghe, vui có buồn cũng có nữa, anh muốn kể với em nhiêu điều lắm.",
    "Giờ anh chỉ muốn ngồi cạnh em, nắm lấy tay em, nhìn vào mắt em, và lắng nghe em trút hết nỗi lòng, anh nhớ giọng em.",
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
      </Windows>
    </>
  );
}
