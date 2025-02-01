import { useState } from "react";
import "./App.css";
import Pane from "./components/Pane";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [pane, setPane] = useState("Pane");

  console.log('pane', pane);
  return (
    <div className="App">
      <button
        onClick={() => {
          setPane("ProfileCard");
        }}
      >
        ProfileCard
      </button>

      <button
        onClick={() => {
          setPane("Pane");
        }}
      >
        Pane
      </button>
      {pane === "ProfileCard" ? <ProfileCard /> : <Pane />}
    </div>
  );
}

export default App;
