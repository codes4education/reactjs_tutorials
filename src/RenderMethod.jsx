import React, { Component } from "react";

export default class RenderMethod extends Component {
  // Example 3
  constructor() {
    super();
    this.state = {
      email: "Bhaskar@gmail.com",
    };
  }

  render() {
    // Example 1
    // console.log("Render Method !!", this.props);

    // Example 3
    console.log("Render Method!!", this.state.email);

    return (
      <>
        {/* <h2>Render Method!! {this.props.name}</h2> */}

        {/* Example 3 */}
        <h2>Render Method!! {this.state.email}</h2>

        <button onClick={() => this.setState({ email: "Code@gmail.com" })}>
          Update State
        </button>
      </>
    );
  }
}
