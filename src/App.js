import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
  // Example 1
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [count, setCount] = useState(0);

  // Example 1
  // const sum = () => {
  //   console.log("Calculating sum...! ");
  //   return number1 + number2;
  // };

  // Example 2
  const sum = useMemo(() => {
    console.log("Calculating sum...! ");
    return number1 + number2;
  }, [number1, number2]);

  return (
    <div className="App">
      <h1>useMemo In React.</h1>

      {/* Example 1 */}
      <div>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(Number(e.target.value))}
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(Number(e.target.value))}
        />

        {/* Example 1 */}
        {/* <p>Sum: {sum()}</p> */}

        {/* Example 2 */}
        <p>Sum: {sum}</p>

        {/* Example 1 */}
        <h2>Count Number: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Click ++</button>
      </div>
    </div>
  );
}
export default App;
