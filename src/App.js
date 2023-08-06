import React, { useRef } from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";

function App() {
  // Example 1
  // const inputRef = useRef(null);
  // const updateInput = () => {
  //   inputRef.current.value = "1000";
  //   inputRef.current.focus();
  //   //   inputRef.current.style.color = "white";
  //   //   inputRef.current.style.background = "blue";
  // };

  // Example 2
  const childRef = useRef();

  const handleButtonClick = () => {
    if (childRef.current) {
      childRef.current.handleChildButtonClick();
    }
  };

  return (
    <div className="App">
      <h1>forwardRef In React.</h1>

      {/* Example 1 */}
      {/* <ChildComponent ref={inputRef} />
      <button onClick={updateInput}>Update Button</button> */}

      <ChildComponent ref={childRef} />

      {/* Example 2 */}
      <button onClick={handleButtonClick}>
        Click Child Button From Parent
      </button>
    </div>
  );
}
export default App;
