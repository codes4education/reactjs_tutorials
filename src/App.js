import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [inputValueShow, setInputValueHide] = useState(false);

  const handleChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);

    // remove submit value
    setInputValueHide(false);
  };

  return (
    <>
      <div className="App">
        {/* <h1>{inputValue}</h1> */}

        <h1>{inputValueShow ? inputValue : ""}</h1>

        <input type="text" onChange={handleChange} />

        <button onClick={() => setInputValueHide(true)}>Submit</button>
      </div>
    </>
  );
}
export default App;
