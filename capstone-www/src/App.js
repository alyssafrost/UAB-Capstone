import logo from "./logo.svg";
import "./App.css"; // Import all of the Routers, switches, routes, redirects here.
import Button from "react-bootstrap/Button";

import HomeScreen from "./components/HomeScreen";
import AnalysisScreen from "./components/AnalysisScreen";
import ControlScreen from "./components/ControlScreen";

import { Data } from "./components/DataTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>test render</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
