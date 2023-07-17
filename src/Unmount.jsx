import React, { Component } from "react";

export default class Unmount extends Component {
  // Example 1
  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log("Interval Tick");
    }, 1000);
  }

  //   Example 2
  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log("Interval Tick Removed");
  }
  render() {
    return <h2>Child Component Will Unmount</h2>;
  }
}
