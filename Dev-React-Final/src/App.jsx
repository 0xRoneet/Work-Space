import { useState } from "react";
import "./App.css";

// Import all components
import FirstReactComponent from "./components/FirstReactComponent";
import Practice from "./components/Practice";
import GencClassComponent from "./components/GencClassComponent";
import PropApp from "./components/PropApp";
import ReactLifeCycle from "./components/ReactLifeCycle";
import UseStateDemo from "./components/UseStateDemo";
import UseEffectDemo from "./components/UseEffectDemo";
import UseStateNext from "./components/UseStateNext";

function App() {
  const [activeComponent, setActiveComponent] = useState("home");

  const cohortDetails = {
    cohortName: "DE25FSFR004",
    cohortCount: 29,
    cohortLocation: "Coimbatore",
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "first":
        return <FirstReactComponent />;
      case "practice":
        return <Practice />;
      case "class":
        return <GencClassComponent cohortDetails={cohortDetails} />;
      case "props":
        return <PropApp />;
      case "lifecycle":
        return <ReactLifeCycle />;
      case "usestate":
        return <UseStateDemo />;
      case "useeffect":
        return <UseEffectDemo />;
      case "usenext":
        return <UseStateNext />;
      default:
        return (
          <div className="home">
            <h1>🚀 Dev-React - Complete React Learning Journey</h1>
            <p>
              This application contains all the important components from Days
              1-7 of React learning.
            </p>
            <div className="features">
              <h3>What you'll find here:</h3>
              <ul>
                <li>📚 Basic React Components (Day 1)</li>
                <li>🏗️ Constructor & Object Creation (Day 2)</li>
                <li>🎯 Class Components & Props (Day 4-5)</li>
                <li>🔄 Component Lifecycle (Day 4-5)</li>
                <li>⚡ useState Hook (Day 6)</li>
                <li>🌐 useEffect Hook & API calls (Day 6)</li>
                <li>📝 Advanced Forms with useState (Day 7)</li>
              </ul>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h2>Dev-React Learning Hub</h2>
        <div className="nav-buttons">
          <button
            onClick={() => setActiveComponent("home")}
            className={activeComponent === "home" ? "active" : ""}
          >
            🏠 Home
          </button>
          <button
            onClick={() => setActiveComponent("first")}
            className={activeComponent === "first" ? "active" : ""}
          >
            Day 1: First Component
          </button>
          <button
            onClick={() => setActiveComponent("practice")}
            className={activeComponent === "practice" ? "active" : ""}
          >
            Day 2: Practice
          </button>
          <button
            onClick={() => setActiveComponent("class")}
            className={activeComponent === "class" ? "active" : ""}
          >
            Day 4-5: Class Component
          </button>
          <button
            onClick={() => setActiveComponent("props")}
            className={activeComponent === "props" ? "active" : ""}
          >
            Day 4-5: Props Demo
          </button>
          <button
            onClick={() => setActiveComponent("lifecycle")}
            className={activeComponent === "lifecycle" ? "active" : ""}
          >
            Day 4-5: Lifecycle
          </button>
          <button
            onClick={() => setActiveComponent("usestate")}
            className={activeComponent === "usestate" ? "active" : ""}
          >
            Day 6: useState
          </button>
          <button
            onClick={() => setActiveComponent("useeffect")}
            className={activeComponent === "useeffect" ? "active" : ""}
          >
            Day 6: useEffect
          </button>
          <button
            onClick={() => setActiveComponent("usenext")}
            className={activeComponent === "usenext" ? "active" : ""}
          >
            Day 7: Advanced useState
          </button>
        </div>
      </nav>

      <main className="content">{renderComponent()}</main>
    </div>
  );
}

export default App;
