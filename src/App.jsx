import { useState } from "react";
import Quotebox from "./components/Quotebox";
import "./App.css";

function App() {
  const [count, setCount] = useState("Quote Generator!");

  return (
    <div id="quote-box" className="app">
      <Quotebox />
    </div>
  );
}

export default App;
