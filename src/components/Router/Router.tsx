import { Route, Routes } from "react-router-dom";
import App from "../../App";
import Normal from "../Page/Normal/NormalPage";
import NotFound from "../Page/Error/NotFound";
import Authorization from "../Page/Auth/Authorization";
import { useState } from "react";

export default function MyRouter() {
    const [valid, setValid] = useState<boolean>(false); // Create valid state in MyRouter

  return (
    <Routes>
      <Route path="/for-serene-impl" element={<Authorization setValidForRouter={setValid} />} />
      <Route path="/for-serene-impl/1" element={ true ? <App /> : <NotFound />} />
      <Route path="/for-serene-impl/2" element={ valid ? <Normal />: <NotFound/>} />
      
      <Route path="/for-serene-impl/*" element={<NotFound />} />
    </Routes>
  );
}