import { Route, Routes } from "react-router-dom";
import App from "../../App";
import Normal from "../Page/Normal/NormalPage";
import NotFound from "../Page/Error/NotFound";
import Authorization from "../Page/Auth/Authorization";
import { useState } from "react";
import Words from "../Page/Normal/Words";

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
        element={valid ? <App /> : <NotFound />}
      />
      <Route
        path="/for-serene-impl/2"
        element={valid ? <Words /> : <NotFound />}
      />
      <Route
        path="/for-serene-impl/3"
        element={valid ? <Normal /> : <NotFound />}
      />

      <Route path="/for-serene-impl/*" element={<NotFound />} />
    </Routes>
  );
}
