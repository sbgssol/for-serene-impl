// import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Album from "./Album";
import Windows from "../../Windows";
import Album from "./Album";
import TypingParagraph from "../../Texts/TypingParagraph";

export default function Words() {
  const navigate = useNavigate();

  // const words = [
  //   "Esse saepe architecto dolorem eum sed, reprehenderit explicabo at dolor possimus illum ratione itaque inventore, natus ab amet iure. Beatae, ad sunt!",
  //   "Maxime nisi cupiditate saepe mollitia error quibusdam enim aut temporibus ullam neque laudantium, maiores tempora deleniti pariatur animi porro impedit omnis distinctio!",
  //   "Iste tenetur consequuntur et expedita dicta blanditiis corporis quia voluptas beatae, aliquid mollitia voluptatum atque neque natus ad dignissimos quod nam eius.",
  //   "Perspiciatis et minus pariatur consectetur ducimus? Accusamus ad corrupti commodi suscipit quas pariatur quaerat sed itaque cum fugit! Similique cupiditate magnam dolorum! ",
  //   "Nostrum aliquid delectus odit maxime suscipit. Doloribus, veniam recusandae accusamus iste explicabo vitae adipisci voluptatem quidem, sint nihil doloremque distinctio, nulla architecto? ",
  //   "Labore, adipisci? Nulla voluptatum quis inventore laboriosam, architecto delectus qui reiciendis esse beatae aliquid tenetur culpa cum dignissimos cupiditate sint, maxime explicabo. ",
  //   "Aperiam est qui architecto ducimus laudantium saepe officiis, placeat veritatis fugiat eligendi iusto, vel illo cupiditate sit! Quibusdam quod eligendi id ab? ",
  // ];

  // const health = [
  //   "Tóc mới của em trông xinh lắm.",
  //   "Em có khỏe không? Mặc dù qua những bức ảnh mà anh được thấy thì em gầy rồi, nhưng chắc là em sẽ khỏe mà đúng không - anh hi vọng vậy, vì hạnh phúc của em là được thấy em bình yên và khỏe mạnh, cả thể chất lẫn tinh thần.",
  //   "Em đã có cơ hội nói chuyện với ba mẹ chưa? Kể từ lần nói chuyện gần nhất, anh đã không có cơ hội để hỏi em nhiều hơn về điều này, sẽ thật tốt nếu anh được em kể cho anh nghe điều này.",
  //   "Công việc của em dạo này sao rồi? Chắc hẳn có nhiều điểu để nói lắm em nhỉ. Giờ anh chỉ muốn ngồi cạnh em, nắm lấy tay em, nhìn vào mắt em, và lắng nghe em trút hế nỗi lòng sao ngần ấy thời gian em phải một mình vượt qua những điều ấy, anh thật sự muốn nghe em nói lúc này...",
  // ];

  // const thanks = [
  //   "Anh nói nhiều rồi mà quên mất một điều quan trọng - CẢM ƠN EM vì đã Ở ĐÂY và đọc những dòng này của anh.",
  //   "Cảm ơn em vì em đã luôn mở lòng với anh cho dù anh đã gây ra biết bao nhiêu lỗi lầm với em.",
  //   "Cảm ơn em luôn dành thời gian cho anh cho dù anh đã lấy đi của em rất nhiều.",
  //   "Cảm ơn em bởi vì sau bao nhiều biến cố xảy ra, em vẫn luôn dành cho anh sự dịu dàng nơi em.",
  //   "Cảm ơn em vì cho dù ở trong hoàn cảnh nào đi nữa, em vẫn luôn tôn trọng anh, lắng nghe anh, và thông cảm cho anh.",
  //   "Cảm ơn em vì đã xuất hiện trên cuộc đời này, đến bên anh, nắm lấy tay anh.",
  //   "Cảm ơn tình yêu - một tình yêu ngây thơ, thuần khiết, luôn đong đầy và duy nhất trên đời này và em đã mang đến cho anh.",
  // ];

  // const miss = [
  //   "Anh nhớ em.",
  //   "Anh nhớ em rất nhiều.",
  //   "Em biết không, anh đã ngốc đến mức tự đặt một câu hỏi cho bản thân ràng: Liệu vũ trụ có nói cho em biết rằng anh đang nhớ em không nhỉ? Bởi vì, lúc ấy trong tâm trí anh chẳng có gì khác ngoài hình ảnh của em. Anh đã nhớ em thật nhiều, anh nhớ em thật thật nhiều để vũ trụ có thể nói với em rằng \"anh đang nhớ em, em đừng bỏ buộc nhé\".",
  //   "Anh nhớ ánh mắt của em, ánh mắt long lanh khi anh nhìn vào, và thật dịu dàng và ấm áp khi em nhìn anh.",
  //   "Anh nhớ đôi môi của em, đôi môi luôn tươi cười khi gặp anh, và bặm chặt những khi em khóc vì anh.",
  //   "Anh nhớ giọng nói của em, nhớ tiêng cười, và cả tiếng em khóc nấc lên biết bao lần vì anh.",
  //   "Anh nhớ đôi gò má của em, hồng hồng khi anh bất ngờ trao em một chiếc hôn, hay phồng lên khi anh khiến em phải buồn.",
  //   "Anh nhớ đôi tay của em, đôi bàn tay vụng về hậu đậu, luôn làm đỗ vỡ khi làm việc nhà, nhưng lại siết thật chặt mỗi khi cầm lấy tay anh.",
  //   "Em, tất cả những điều thuộc về em, đã cắm rễ trong trái tim anh, âm thầm, nhẹ nhàng, lặng lẽ, những ngày càng đậm sâu, và vững chắc.",
  // ];

  // const chances = [
  //   "Anh xin lỗi, anh biết mình đã trễ hẹn với em.",
  //   "Em à, cuộc tình chúng mình đã trải qua rất nhiều chông gai, chúng ta đã rất khó khăn để có thể tìm thấy nhau và đến được với nhau. Em đã phải chịu rất nhiều vết thương từ thể xác, đến tinh thần, và anh không bao giờ quên những lần làm em tổn thương, những vết sẹo do anh gây ra.",
  //   "Anh luôn tin vào tình yêu em dành cho anh - và tin vào mối liên kết đặc biệt của chúng ta.",
  //   "Anh đã có một khoản thời gian vô cùng khó khăn, anh đã phải chiến đấu với khoản thời gian ấy rất vất vả, và có rất nhiều điều để nói, anh muốn ngồi cầm lấy tay em và kể em nghe hết mọi chuyện vào lúc này. Em à, anh biết đây sẽ là cơ hội cuối cùng của anh để có thể giải bày lòng mình...và thuyết phục em. Cho dù là đến trễ, anh chắc chắn sẽ yêu - và đối xử tốt với em.",
  //   `Người ta nói "Có hai thứ quan trọng không thể bỏ lỡ, một là chuyến tàu cuối cùng về nhà, hai là người thật lòng yêu mình". Anh thì khác, anh nói "người ta thì biết cái mẹ gì chứ? Anh chỉ có một thứ duy nhất không được bỏ lỡ, đó chính là người thật lòng yêu anh - chính là em", em là niềm tin, là hạnh phúc mà anh may mắn có được trong cuộc đời này.`,
  //   "Anh không còn ngây ngô nữa, không còn mơ mộng nữa.",
  //   "Anh có kinh nghiệm, trải nghiệm - thật buồn khi phải nói như thế, nhưng điều đó giúp anh đủ chính chắn để biết được em chính là tình yêu của đời anh",
  //   // "Với anh em không chỉ đơn giản là tình yêu, mà em là duy nhất",
  //   // "Với anh em không chỉ là tia nắng, mà em là mặt trời, mặt trời trong tim anh",
  //   "Cho anh một cơ hội em nhé? Một cơ hội để có thể nắm lấy tay em một lần nữa, dắt tay em đi, bỏ lại quá khứ phía sau, mình viết tiếp câu chuyện của đôi ta, viết nên tương lai của em, viết nên tương lai của anh - trong đó luôn có em.",
  //   "Anh và em sẽ cùng nhau vun đắp cho tình yêu này, vì anh tin rằng tình yêu chúng ta còn đẹp hơn nữa, sâu đậm hơn nữa, mạnh mẽ hơn nữa, và bên chặt hơn nữa.",
  //   "Em nhé!",
  // ];

  // const paragraphs = [
  //   health,
  //   thanks,
  //   miss,
  //   chances,
  // ];

  return (
    <>
      <Windows
        prevClick={() => {
          navigate(-1);
        }}
        nextClick={() => {
          navigate("/for-serene-impl/4");
        }}
      >
        <TypingParagraph
          paragraph={[
            "Voluptates voluptatibus, nobis minima aliquam at illum, iste omnis, labore ipsum fugiat tempore aperiam iusto facilis officia voluptate numquam expedita cumque nihil.",
            "Sunt blanditiis tenetur facere id. Est, assumenda nam! Sit dicta consequatur repudiandae reiciendis earum voluptatum! Necessitatibus deserunt harum officia minus quis. Ex?",
            "Nobis aliquid doloribus necessitatibus temporibus nemo est delectus at? Dolores ut labore consequuntur, eos nulla voluptatem totam veritatis dolore maiores exercitationem doloremque!",
          ]}
          speedInMs={0}
          className="text-lg text-pink-200 font-primary px-2 py-1"
        />
        <Album title="here" />
      </Windows>
    </>
  );
}
