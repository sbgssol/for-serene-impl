import { Route, Routes } from "react-router-dom";
import App from "../../App";
import Normal from "../Page/Normal/NormalPage";
import NotFound from "../Page/Error/NotFound";
import Authorization from "../Page/Auth/Authorization";

export default function MyRouter() {
    return (
        <Routes>
            <Route path="/for-serene-impl" element={<Authorization />} />
            <Route path="/for-serene-impl/1" element={<App />} />
            <Route path="/for-serene-impl/2" element={<Normal />} />

            <Route path="/for-serene-impl/*" element={<NotFound />} />
        </Routes>
    );
}