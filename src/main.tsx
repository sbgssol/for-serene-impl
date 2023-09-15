import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MyRouter from "./components/Router/Router.tsx";
import { GlobalProvider } from "./context/GlobalContext.tsx";
import { TypingProvider } from "./context/TypingContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <TypingProvider>
        <BrowserRouter>
          <MyRouter />
        </BrowserRouter>
      </TypingProvider>
    </GlobalProvider>
  </React.StrictMode>
);
