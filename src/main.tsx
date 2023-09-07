import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MyRouter from "./components/Router/Router.tsx";
import { GlobalProvider } from "./context/GlobalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);
