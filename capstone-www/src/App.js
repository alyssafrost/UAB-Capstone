import { Divider } from "antd";
import "./App.css"; // Import all of the Routers, switches, routes, redirects here.
import { HomeScreen, TemperatureBox } from "./components/HomeScreen";
// import Button from "react-bootstrap/Button";

import { MenuBar } from "./components/MenuBar";
// import { Data } from "./components/AnalysisScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar />
      </header>
    </div>
  );
}

export default App;
