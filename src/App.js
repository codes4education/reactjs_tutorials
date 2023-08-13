import React, { useState, useCallback } from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";

function App() {
  // Normal Example 1
  const [count1, setCount1] = useState(0);
  console.log("Parent Rendered!!");

  // Example 2
  const [count2, setCount2] = useState(0);
  const incrementCount = useCallback(() => {
    setCount2((prevCount) => prevCount + 1);
    console.log("useCallback Hook!!");
  }, []);

  return (
    <div className="App">
      <h1>useCallback Hook</h1>

      {/* Example 1 */}
      <p>Count 1: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment Count</button>
      <br />
      <br />

      {/* Example 2 */}
      <p>Count 2: {count2}</p>
      <ChildComponent increment={incrementCount} />
    </div>
  );
}
export default App;
