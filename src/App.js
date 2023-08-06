import React, { useRef } from "react";
import "./App.css";

function App() {
  // Example 1
  let inputRef = useRef(null);
  let inputRef2 = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("First Input Value:", inputRef.current.value);
    console.log("Second Input Value:", inputRef2.current.value);

    let input3 = document.getElementById("input3").value;
    console.log("Input3 Value:", input3);
  };
  return (
    <div className="App">
      <h1>Uncontrolled Component</h1>

      <form onSubmit={submitForm}>
        <input type="text" ref={inputRef} />
        <input type="text" ref={inputRef2} />
        <input type="text" id="input3" />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
