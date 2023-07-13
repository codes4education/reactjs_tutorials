import React, { Component } from "react";
import "./App.css";
class App extends Component {
  // Example 1
  constructor() {
    super();
    console.log("constructor method!!");
  }
  render() {
    console.log("render method!!");
    return (
      <>
        <div className="App">
          <h1>Lifecycle Methods In React.</h1>
        </div>
      </>
    );
  }
}
export default App;
