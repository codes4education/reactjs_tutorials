import React, { createContext } from "react";
import "./App.css";
import Child1 from "./Child1";

// Create, provider, Consumer

const MyContext = createContext();
const MyContextNew = createContext();

function App() {
  const sharedData = "Hello from Parent!!";
  const sharedDataNew = "Multiple Entry!!";

  return (
    <div className="App">
      <MyContext.Provider value={sharedData}>
        <MyContextNew.Provider value={sharedDataNew}>
          <h1>Context API</h1>
          <Child1 />
        </MyContextNew.Provider>
      </MyContext.Provider>
    </div>
  );
}
export default App;
export { MyContext, MyContextNew };
