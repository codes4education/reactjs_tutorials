import React, { useState, useEffect, useDeferredValue } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Example 2
  const [count, setCount] = useState(0);
  const deferredValue = useDeferredValue(count);

  useEffect(() => {
    console.log(`Count: ${count} \nDeferred: ${deferredValue}`);
  });

  return (
    <div className="App">
      <h1>useDeferredValue Hook</h1>

      {/* Example 1 */}
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />

      {/* Example 2 */}
      <h2>Count Number:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
}
export default App;
