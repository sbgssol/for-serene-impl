import { useNavigate } from "react-router-dom";
import Windows from "../../Windows";
// import Album from "./Album";
import TypingParagraph from "../../Texts/TypingParagraph";

export default function WordsHealth() {
  const navigate = useNavigate();
  const health = [
    "...",
    "Tóc mới của em trông xinh lắm, mặc dù đến thời điểm này thì nó không phải mới nữa rồi",
    "Em có khỏe không?",
    "Qua những bức ảnh gần đây, anh thấy em gầy đi hơn trước nhiều lắm em à.",
    "Em đã có cơ hội nói chuyện với ba mẹ chưa? Kể từ lần nói chuyện gần nhất, anh đã không có cơ hội để được nghe em chia sẽ với anh, sẽ thật tốt nếu bây giờ anh ở bên cạnh em, anh muốn biết xem em đã thế nào.",
    "Công việc của em dạo này sao rồi? Chắc hẳn có nhiều điểu để nói lắm em nhỉ, công việc của anh cũng vậy, có thật nhiều điều để anh kể cho em nghe.",
    "Giờ anh chỉ muốn ngồi cạnh em, nắm lấy tay em, nhìn vào mắt em, và lắng nghe em trút hết nỗi lòng sao ngần ấy thời gian em phải một mình vượt qua những điều ấy, anh muốn được nghe giọng em.",
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
