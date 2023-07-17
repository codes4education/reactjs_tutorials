import React, { Component } from "react";
import "./App.css";
import Unmount from "./Unmount";
class App extends Component {
  // Example 1
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    console.log("clicked", this.state.show);
    return (
      <>
        <div className="App">
          <h1>Lifecycle Methods</h1>

          {this.state.show ? <Unmount /> : <h2>Removed</h2>}

          {/* Example 2 */}
          <button onClick={() => this.setState({ show: !this.state.show })}>
            Removed Component
          </button>
        </div>
      </>
    );
  }
}
export default App;
