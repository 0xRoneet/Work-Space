import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/Layout";
import UseEffectDemo from "./components/UseEffectDemo";

export default function GenCApp() {
    return (
        <Routes >
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/use-effect-demo" element={<UseEffectDemo/>}/>
            </Route>
        </Routes>
    );
}