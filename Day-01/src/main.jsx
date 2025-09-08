import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import FirstReactComponent from "./FirstReactComponent"; //default export
import { FirstReactComponent } from "./FirstReactComponent"; //named export
// import "./index.css";
//import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirstReactComponent />
  </StrictMode>
);
