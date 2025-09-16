import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import PropApp from "./components/PropApp.jsx";
import GenCClassComponent from "./components/GenCClassComponent.jsx";


// import "./index.css";
import App from "./App.jsx";
import ReactLifeCycle from "./components/ReactLifeCycle.jsx";
import UseStateDemo from "./components/UseStateDemo.jsx";
import UseEffectDemo from "./components/UseEffectDemo.jsx";
import FormikDemo from "./components/FormikDemo.jsx";
import { BrowserRouter } from "react-router-dom";
import GenCApp from "./GenCApp.jsx";
import "./GenCApp.css"  



createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <UseStateDemo/>
    {/* <UseEffectDemo/> */}
    {/* <FormikDemo/> */}
    {/* <ReactLifeCycle/> */}

    <BrowserRouter>
      <GenCApp></GenCApp>
    </BrowserRouter>
  </StrictMode>
);
