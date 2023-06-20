import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      // data: "Code4education",
      data: 1,
    };
  }

  demo() {
    // alert("Class Component");

    this.setState({
      // data: "Bhaskar Gupta",
      data: this.state.data + 1,
    });
  }

  render() {
    console.log(this.state.data);

    return (
      <>
        <div className="App">
          <h1>{this.state.data}</h1>

          <button onClick={() => this.demo()}>Click Me</button>
        </div>
      </>
    );
  }
}
export default App;
