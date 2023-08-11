import React, { useState } from "react";
import "./App.css";

function App() {
  // Higher Order Component
  const withCounter = (WrappedComponent) => {
    return function WithCounter(props) {
      const [count, setCount] = useState(0);
      const increment = () => {
        setCount(count + 1);
      };

      return (
        <WrappedComponent {...props} count={count} increment={increment} />
      );
    };
  };

  // Functional Component
  const Counter = ({ count, increment }) => {
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  };

  // Wrap Counter Component with the WithCounter HOC
  const CounterWithEnhancement = withCounter(Counter);

  return (
    <div className="App">
      <h1>Higher Order Component</h1>

      {/* Example 1 */}
      {/* <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button> */}

      {/* Example 2 */}
      <CounterWithEnhancement />
    </div>
  );
}
export default App;
