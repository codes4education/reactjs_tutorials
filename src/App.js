import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  // Example 1
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>useReducer Hook</h1>

      {/* Example 1 */}
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>INCREMENT Count</button>
      <button onClick={() => setCount(count - 1)}>DECREMENT Count</button>

      {/* Example 2 */}
      <br />
      <br />
      <Counter />
    </div>
  );
}
export default App;
