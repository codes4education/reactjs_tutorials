import React, { useState } from "react";
import "./App.css";
import RenderMethod from "./RenderMethod";
function App() {
  // const [name, setName] = useState("Code4education");
  return (
    <>
      <div className="App">
        <h1>Lifecycle Render Methods In React.</h1>

        {/* Example 2 */}
        {/* <RenderMethod name={name} /> */}

        {/* Example 3 */}
        <RenderMethod />

        {/* Example 2 */}
        {/* <button onClick={() => setName("Bhaskar Gupta")}>Update Name</button> */}
      </div>
    </>
  );
}
export default App;
