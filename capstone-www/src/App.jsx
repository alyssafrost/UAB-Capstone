import "./App.css"; // Import all of the Routers, switches, routes, redirects here.

import { MenuBar } from "./components/MenuBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar />
        {/* <displayHome /> */}
      </header>
    </div>
  );
}

export default App;
