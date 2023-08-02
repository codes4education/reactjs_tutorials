import React, { useState } from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";

function App() {
  // Exmaple 1
  const [count, setCount] = useState(0);

  // Example 1
  console.log("parent component!!");

  return (
    <div className="App">
      <h1>Memo In React.</h1>

      <ChildComponent count={count} />

      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Count+</button>
    </div>
  );
}
export default App;
