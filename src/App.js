import React, { Component } from "react";
import "./App.css";
class App extends Component {
  // Example 1
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate !!", this.state.count);

    if (nextState.count < 5) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>Lifecycle shouldComponentUpdate Method</h1>
          <h2>Count: {this.state.count}</h2>

          {/* Example 1 */}
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Update State
          </button>
        </div>
      </>
    );
  }
}
export default App;
