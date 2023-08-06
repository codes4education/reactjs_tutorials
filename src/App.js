import React, { useState } from "react";
import "./App.css";

function App() {
  // Example 1
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  return (
    <div className="App">
      <h1>Controlled Component</h1>

      {/* Example 1 */}
      <input type="text" value={inputValue} onChange={handleChange} />

      <p>Current Value: {inputValue}</p>
    </div>
  );
}
export default App;
