import { Route, Routes } from "react-router-dom";
import ThanksBae from "../../App";
import NotFound from "../Page/Error/NotFound";
import Authorization from "../Page/Auth/Authorization";
import { useState } from "react";
import Words from "../Page/Normal/Words";
import MissAndLove from "../Page/Normal/MissAndLove";
import Loves from "../Page/Normal/Loves";

export default function MyRouter() {
  const [valid, setValid] = useState<boolean>(false);

  return (
    <Routes>
      <Route
        path="/for-serene-impl"
        element={<Authorization setValidForRouter={setValid} />}
      />
      <Route
        path="/for-serene-impl/1"
        element={valid ? <ThanksBae /> : <NotFound />}
      />
      <Route
        path="/for-serene-impl/2"
        element={valid ? <Words /> : <NotFound />}
      />
      {/* <Route
        path="/for-serene-impl/3"
        element={valid ? <Normal /> : <NotFound />}
      /> */}
      <Route
        path="/for-serene-impl/4"
        element={valid ? <MissAndLove /> : <NotFound />}
      />
      <Route
        path="/for-serene-impl/5"
        element={valid ? <Loves /> : <NotFound />}
      />

      <Route path="/for-serene-impl/*" element={<NotFound />} />
    </Routes>
  );
}
