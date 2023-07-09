import React, { useState } from "react";
import "./App.css";
import Users from "./Users";
function App() {
  // Example 1 Function to be passed as a props
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  // Example 2 useState
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="App">
        <h1>Pass Function as Props</h1>

        <Users
          handleClick={handleButtonClick}
          count={count}
          increment={incrementCount}
        />
      </div>
    </>
  );
}
export default App;
