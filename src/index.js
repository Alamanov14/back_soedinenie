import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvaider from "./context/AuthContextProvaider";
import ProductContextProvider from "./context/ProductContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContextProvider>
      <AuthContextProvaider>
        <App />
      </AuthContextProvaider>
    </ProductContextProvider>
  </BrowserRouter>
);
