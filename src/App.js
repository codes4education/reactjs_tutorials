import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  // example 1
  let [data, setData] = useState("Code4education");

  const updateData = () => {
    setData("Bhaskar Gupta");
    alert(data);
  };

  console.log("Render------");

  return (
    <>
      <div className="App">
        <h1>{data}</h1>

        <button onClick={updateData}>Update Value</button>
        <br />
        <br />

        <Counter />
      </div>
    </>
  );
}

export default App;
