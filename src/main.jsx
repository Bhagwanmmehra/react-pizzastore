import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootEl = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
