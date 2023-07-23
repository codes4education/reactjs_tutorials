import React from "react";
import "./App.css";

// Example 2
import "./style.css";

// Example 4
import Style from "./style.module.css";

// Example 5
import "./style.scss";

function App() {
  // Example 3
  const headline = {
    color: "#fff",
    backgroundColor: "blue",
  };

  return (
    <>
      <div className="App">
        <h1>Styles Type In React.</h1>

        {/* Example 1 Inline CSS */}
        <h1 style={{ color: "#fff", backgroundColor: "green" }}>
          Inline Method
        </h1>

        {/* Example 2 Normal CSS */}
        <h1 className="primary">Normal Method</h1>

        {/* Example 3 CSS In JS */}
        <h1 style={headline}>CSS In JS Method</h1>

        {/* Example 4 CSS Module */}
        <h1 className={Style.title}>CSS Module Method</h1>

        {/* Example 5 Sass & Scss */}
        <h1 className="primary-sass">
          Sass & <span>Scss</span> Method
        </h1>
      </div>
    </>
  );
}
export default App;
