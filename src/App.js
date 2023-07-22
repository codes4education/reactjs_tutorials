import React, { useEffect, useState } from "react";
import "./App.css";
import UserTotal from "./UserTotal";
function App() {
  // Example 2
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(100);

  useEffect(() => {
    // console.log("After Render Total!!");
  }, [total]);

  useEffect(() => {
    // console.log("After Render Count!!");
  }, [count]);

  return (
    <>
      <div className="App">
        <h1>useEffect With Condition Hook</h1>

        <UserTotal count={count} total={total} />

        {/* Example 2 */}
        {/* <h2>Count:{count}</h2> */}
        <button onClick={() => setCount(count + 1)}>Update Count</button>

        {/* Example 3 */}
        {/* <h2>Total:{total}</h2> */}
        <button onClick={() => setTotal(total + 1)}>Update Total</button>
      </div>
    </>
  );
}
export default App;
