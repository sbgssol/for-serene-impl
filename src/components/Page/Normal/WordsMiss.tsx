import { useNavigate } from "react-router-dom";
import Windows from "../../Windows";
import Album from "./Album";
import TypingParagraph from "../../Texts/TypingParagraph";

export default function WordsMiss() {
  const navigate = useNavigate();

  const miss = [
    "Anh nhớ em.",
    "Anh nhớ em rất nhiều.",
    "Em biết không, anh đã ngốc đến mức tự đặt một câu hỏi cho bản thân ràng: Liệu vũ trụ có nói cho em biết rằng anh đang nhớ em không nhỉ? Bởi vì, lúc ấy trong tâm trí anh chẳng có gì khác ngoài hình ảnh của em. Anh đã nhớ em thật nhiều, anh nhớ em thật thật nhiều để vũ trụ có thể nói với em rằng \"anh đang nhớ em, em đừng bỏ buộc nhé\".",
    "Anh nhớ ánh mắt của em, ánh mắt long lanh khi anh nhìn vào, và thật dịu dàng và ấm áp khi em nhìn anh.",
    "Anh nhớ đôi môi của em, đôi môi luôn tươi cười khi gặp anh, và bặm chặt những khi em khóc vì anh.",
    "Anh nhớ giọng nói của em, nhớ tiêng cười, và cả tiếng em khóc nấc lên biết bao lần vì anh.",
    "Anh nhớ đôi gò má của em, hồng hồng khi anh bất ngờ trao em một chiếc hôn, hay phồng lên khi anh khiến em phải buồn.",
    "Anh nhớ đôi tay của em, đôi bàn tay vụng về hậu đậu, luôn làm đỗ vỡ khi làm việc nhà, nhưng lại siết thật chặt mỗi khi cầm lấy tay anh.",
    "Em, tất cả những điều thuộc về em, đã cắm rễ trong trái tim anh, âm thầm, nhẹ nhàng, lặng lẽ, những ngày càng đậm sâu, và vững chắc.",
  ];

  return (
    <>
      <Windows
        prevClick={() => {
          navigate(-1);
        }}
        nextClick={() => {navigate("/for-serene-impl/missnlove")}}
      >
        <TypingParagraph
          paragraph={miss}
          speedInMs={30}
          className="text-lg text-pink-200 font-primary px-2 py-1 font-normal"
        />
        <Album title="here" />
      </Windows>
    </>
  );
}
