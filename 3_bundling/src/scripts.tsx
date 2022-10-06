import React from "react";
import { createRoot } from "react-dom/client";
import { BgGenerator } from "./bgGenerator";
import logoImg from "./img/logo.svg";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <img src={logoImg} width="50" height="50" className="logo"></img>
    <h1>Random background app</h1>
    <BgGenerator />
  </div>
);