import { Route, Routes } from "react-router-dom";
import ThanksBae from "../../App";
import NotFound from "../Page/Error/NotFound";
import Authorization from "../Page/Auth/Authorization";
import { useState } from "react";
import MissAndLove from "../Page/Normal/MissAndLove";
import Loves from "../Page/Normal/Loves";
import WordsHealth from "../Page/Normal/WordsHealth";
import WordsThanks from "../Page/Normal/WordsThanks";
import WordsMiss from "../Page/Normal/WordsMiss";
import WordsChance from "../Page/Normal/WordsChance";

export default function MyRouter() {
  const [valid, setValid] = useState<boolean>(false);

  return (
    <Routes>
      <Route
        path="/for-serene-impl"
        element={<Authorization setValidForRouter={setValid} />}
      />
      <Route
        path="/for-serene-impl/here"
        element={valid ? <ThanksBae /> : <NotFound />}
      />
      <Route
        path="/for-serene-impl/health"
        element={valid ? <WordsHealth /> : <NotFound />}
      />
      <Route
        path="/for-serene-impl/thanks"
        element={valid ? <WordsThanks /> : <NotFound />}
      />
      <Route
        path="/for-serene-impl/miss"
        element={valid ? <WordsMiss /> : <NotFound />}
      />
      <Route
        path="/for-serene-impl/chance"
        element={valid ? <WordsChance /> : <NotFound />}
      />
      <Route
        path="/for-serene-impl/missnlove"
        element={valid ? <MissAndLove /> : <NotFound />}
      />
      <Route
        path="/for-serene-impl/loves"
        element={valid ? <Loves /> : <NotFound />}
      />

      <Route path="/for-serene-impl/*" element={<NotFound />} />
    </Routes>
  );
}
