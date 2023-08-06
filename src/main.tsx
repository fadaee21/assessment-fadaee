import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { RegProvider } from "./context/registerContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RegProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RegProvider>
  </React.StrictMode>
);
