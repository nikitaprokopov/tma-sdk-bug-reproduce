import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./app.tsx";
import eruda from "eruda";

eruda.init();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
