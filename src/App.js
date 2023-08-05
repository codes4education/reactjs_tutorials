import React, { useRef } from "react";
import "./App.css";

function App() {
  // Example 1
  const inputRef = useRef(null);

  // Example 2
  const handleButtonClick = () => {
    const inputValue = inputRef.current.value;
    alert(`Input Value: ${inputValue}`);
    console.log(`Input Value: ${inputValue}`);
  };

  return (
    <div className="App">
      <h1>useRef In React.</h1>

      {/* Example 1 */}
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Get Input Value</button>
    </div>
  );
}
export default App;
