import React, { createContext } from "react";
import "./App.css";
import Child1 from "./Child1";

// Create, provider, useContext

const MyContext = createContext();

function App() {
  const sharedData = "Hello from Parent!!";

  return (
    <div className="App">
      <MyContext.Provider value={sharedData}>
        <h1>useContext Hook</h1>

        {/* Example 1 */}
        <Child1 />
      </MyContext.Provider>
    </div>
  );
}
export default App;
export { MyContext };
