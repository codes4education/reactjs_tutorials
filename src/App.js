import React, { useState } from "react";
import "./App.css";
import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";

function App() {
  // Example 1
  const [sharedState, setSharedState] = useState("");

  const handleChange = (newValue) => {
    console.log(newValue);
    setSharedState(newValue);
  };

  // Exmaple 2
  const parentAlert = (data) => {
    alert(data.name);
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Lifting State Up In React.</h1>

      <ChildComponentA sharedState={sharedState} handleChange={handleChange} />

      <ChildComponentB sharedState={sharedState} alert={parentAlert} />
    </div>
  );
}
export default App;
