import { Route, Routes } from "react-router-dom";
import App from "../../App";
import Normal from "../Page/Normal/NormalPage";
import NotFound from "../Page/Error/NotFound";

export default function MyRouter() {
    return (
        <Routes>
            <Route path="/for-serene-impl" element={<App />} />
            <Route path="/for-serene-impl/normal" element={<Normal />} />
            <Route path="/for-serene-impl/*" element={<NotFound />} />
        </Routes>
    );
}