import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  // Example 2
  const [count, setCount] = useState(0);

  // Example 1
  useEffect(() => {
    // alert("useEffect Hook!");
    console.log("useEffect Hook!");

    console.log("Updating");
  });
  return (
    <>
      <div className="App">
        <h1>useEffect Hook</h1>

        {/* Example 2 */}
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Update Count</button>
      </div>
    </>
  );
}
export default App;
