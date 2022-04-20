import { useState, useEffect } from "react";
import { MenuBar } from "./components/MenuBar";

// Local
import { Popup } from "./components/Popup";

// css
import "./App.css";
import "./Popup.css";

function App() {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 30000); // pops up 30 seconds into app
  }, []);
  return (
    <div className="App">
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3> WARNING</h3>
        <p>
          {" "}
          Using this app in excess can be mentally draining. It is recommended
          to stand up and rehydrate.
        </p>
      </Popup>
      <header className="App-header">
        <MenuBar />
      </header>
    </div>
  );
}

export default App;
