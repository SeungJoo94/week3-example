import React from "react";
import "./App.css";
import ApplyLect from "./components/ApplyLect";
import SomunEvent from "./components/SomunEvent";
import Popup from "./components/Popup";

const App = () => {
  return (
    <div>
      <ApplyLect />
      <Popup />
      <SomunEvent />
    </div>
  );
};

export default App;
