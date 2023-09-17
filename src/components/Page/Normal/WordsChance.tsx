import { useNavigate } from "react-router-dom";
import Windows from "../../Windows";
import TypingParagraph from "../../Texts/TypingParagraph";
import Ask from "./Ask";
import { useState } from "react";

export default function WordsChance() {
  const navigate = useNavigate();
  const [showAsk, setShowAsk] = useState(false);

  const chances = [
    "Anh xin lỗi, anh biết mình đã trễ hẹn với em.",
    "Em à, chúng mình đã trải qua rất nhiều chông gai, chúng ta đã rất khó khăn để có thể tìm thấy nhau và đến được với nhau.",
    "Anh đã có một khoản thời gian vô cùng khó khăn - và em cũng vậy. Anh muốn ngồi cầm lấy tay em và kể em nghe hết mọi chuyện vào lúc này. Nhưng em ơi, anh biết đây sẽ là cơ hội cuối cùng của anh để có thể giải bày lòng mình...và thuyết phục em. Anh biết anh đã đến trễ, nhưng anh nhất định sẽ yêu - và đối xử tốt với em, yêu nhiều nhiều hơn trước, mỗi ngày đều nhiều hơn ngày hôm trước, sẽ yêu em thật nhiều.",
    "Anh luôn tin vào tình yêu em dành cho anh - và anh tin rằng giữa chũng ta luôn có một mối liên kết đặc biệt, thứ khiến chúng ta luôn tìm thấy nhau dù cho bao khó khăn.",
    `Người ta nói "Có hai thứ quan trọng không thể bỏ lỡ, một là chuyến tàu cuối cùng về nhà, hai là người thật lòng yêu mình". Anh thì khác, anh nói "người ta thì biết cái mẹ gì chứ? Anh chỉ có một thứ duy nhất không được bỏ lỡ, đó chính là người thật lòng yêu anh - chính là em", em là niềm tin, là hạnh phúc mà anh may mắn có được trong cuộc đời này.`,
    "Anh đã có kinh nghiệm, trải nghiệm - thật buồn khi phải nói như thế, nhưng phải thừa nhận rằng chính điều đấy đã giúp anh đủ chính chắn để biết được rằng em,là tình yêu của đời anh",
    "Bỏ lại quá khứ phía sau, cho anh một cơ hội em nhé? Một cơ hội để có thể nắm lấy tay em một lần nữa, nắm lấy tay em, mình viết tiếp câu chuyện của đôi ta, viết nên tương lai của em, viết nên tương lai của anh - trong đó luôn có em.",
    "Anh và em sẽ cùng nhau vun đắp cho tình yêu này, vì anh luôn tin rằng tình yêu của chúng ta còn đẹp hơn nữa kìa, còn sâu đậm hơn nữa, còn mạnh mẽ hơn nữa, và còn bên chặt hơn nữa.",
    "Em nhé!",
  ];

  const genAsk = () => {
    return (
      <Ask
        handler={handleNextClick}
        okayHandler={handleNextClick}
        show={showAsk}
      />
    );
  };

  const handleNextClick = () => {
    setShowAsk((show) => !show);
  };

  return (
    <>
      <Windows
        prevClick={() => {
          navigate(-1);
        }}
        nextClick={handleNextClick}
      >
        <TypingParagraph
          paragraph={chances}
          speedInMs={50}
          className="text-md text-primaryPink-300 font-primary px-2 py-1 font-normal"
        />
        {genAsk()}
      </Windows>
    </>
  );
}
