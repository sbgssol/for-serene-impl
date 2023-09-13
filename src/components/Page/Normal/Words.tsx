// import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Album from "./Album";
import Windows from "../../Windows";
import TypingText from "../../Texts/Typing";
import Album from "./Album";

export default function Words() {
  const navigate = useNavigate();

  const words = [
    "Esse saepe architecto dolorem eum sed, reprehenderit explicabo at dolor possimus illum ratione itaque inventore, natus ab amet iure. Beatae, ad sunt!",
    "Maxime nisi cupiditate saepe mollitia error quibusdam enim aut temporibus ullam neque laudantium, maiores tempora deleniti pariatur animi porro impedit omnis distinctio!",
    "Iste tenetur consequuntur et expedita dicta blanditiis corporis quia voluptas beatae, aliquid mollitia voluptatum atque neque natus ad dignissimos quod nam eius.",
    "Perspiciatis et minus pariatur consectetur ducimus? Accusamus ad corrupti commodi suscipit quas pariatur quaerat sed itaque cum fugit! Similique cupiditate magnam dolorum! ",
    "Nostrum aliquid delectus odit maxime suscipit. Doloribus, veniam recusandae accusamus iste explicabo vitae adipisci voluptatem quidem, sint nihil doloremque distinctio, nulla architecto? ",
    "Labore, adipisci? Nulla voluptatum quis inventore laboriosam, architecto delectus qui reiciendis esse beatae aliquid tenetur culpa cum dignissimos cupiditate sint, maxime explicabo. ",
    "Aperiam est qui architecto ducimus laudantium saepe officiis, placeat veritatis fugiat eligendi iusto, vel illo cupiditate sit! Quibusdam quod eligendi id ab? ",
  ];

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
        <>
          {words.map((str, index) => (
            <TypingText
              key={index}
              msg={str}
              className="text-pink-200 font-signika text-lg p-2 text-justify"
              speedInMs={15}
            />
          ))}
          <Album />
        </>
      </Windows>
    </>
  );
}
