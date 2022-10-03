import React from "react";
import { createRoot } from "react-dom/client";
import { BgGenerator } from "./bgGenerator";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Random background app</h1>
    <BgGenerator />
  </div>
);