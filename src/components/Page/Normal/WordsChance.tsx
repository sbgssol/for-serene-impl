import { useNavigate } from "react-router-dom";
import Windows from "../../Windows";
import TypingParagraph from "../../Texts/TypingParagraph";

export default function WordsChance() {
  const navigate = useNavigate();
  const chances = [
    "Anh xin lỗi, anh biết mình đã trễ hẹn với em.",
    "Em à, cuộc tình chúng mình đã trải qua rất nhiều chông gai, chúng ta đã rất khó khăn để có thể tìm thấy nhau và đến được với nhau. Em đã phải chịu rất nhiều vết thương từ thể xác, đến tinh thần, và anh không bao giờ quên những lần làm em tổn thương, những vết sẹo do anh gây ra.",
    "Anh luôn tin vào tình yêu em dành cho anh - và tin vào mối liên kết đặc biệt của chúng ta.",
    "Anh đã có một khoản thời gian vô cùng khó khăn, anh đã phải chiến đấu với khoản thời gian ấy rất vất vả, và có rất nhiều điều để nói, anh muốn ngồi cầm lấy tay em và kể em nghe hết mọi chuyện vào lúc này. Em à, anh biết đây sẽ là cơ hội cuối cùng của anh để có thể giải bày lòng mình...và thuyết phục em. Cho dù là đến trễ, anh chắc chắn sẽ yêu - và đối xử tốt với em.",
    `Người ta nói "Có hai thứ quan trọng không thể bỏ lỡ, một là chuyến tàu cuối cùng về nhà, hai là người thật lòng yêu mình". Anh thì khác, anh nói "người ta thì biết cái mẹ gì chứ? Anh chỉ có một thứ duy nhất không được bỏ lỡ, đó chính là người thật lòng yêu anh - chính là em", em là niềm tin, là hạnh phúc mà anh may mắn có được trong cuộc đời này.`,
    "Anh không còn ngây ngô nữa, không còn mơ mộng nữa.",
    "Anh có kinh nghiệm, trải nghiệm - thật buồn khi phải nói như thế, nhưng điều đó giúp anh đủ chính chắn để biết được em chính là tình yêu của đời anh",
    // "Với anh em không chỉ đơn giản là tình yêu, mà em là duy nhất",
    // "Với anh em không chỉ là tia nắng, mà em là mặt trời, mặt trời trong tim anh",
    "Cho anh một cơ hội em nhé? Một cơ hội để có thể nắm lấy tay em một lần nữa, dắt tay em đi, bỏ lại quá khứ phía sau, mình viết tiếp câu chuyện của đôi ta, viết nên tương lai của em, viết nên tương lai của anh - trong đó luôn có em.",
    "Anh và em sẽ cùng nhau vun đắp cho tình yêu này, vì anh tin rằng tình yêu chúng ta còn đẹp hơn nữa, sâu đậm hơn nữa, mạnh mẽ hơn nữa, và bên chặt hơn nữa.",
    "Em nhé!",
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
          paragraph={chances}
          speedInMs={30}
          className="text-md text-pink-200 font-primary px-2 py-1 font-normal"
        />
      </Windows>
    </>
  );
}
