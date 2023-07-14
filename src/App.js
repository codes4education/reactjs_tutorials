import React, { Component } from "react";
import "./App.css";
class App extends Component {
  // Example 1
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("constructor Called!!");
  }

  // Example 2
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Example 1
  componentDidMount() {
    console.log("Component Did Mount!!");
  }
  render() {
    console.log("Render!!");
    return (
      <>
        <div className="App">
          <h1>Lifecycle componentDidMount Method</h1>

          {/* Example 2 */}
          <h2>Count:{this.state.count}</h2>
          <button onClick={this.incrementCount}>Increment</button>
        </div>
      </>
    );
  }
}
export default App;
