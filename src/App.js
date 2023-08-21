import React, { useState, useTransition, useEffect } from "react";
import "./App.css";

function App() {
  // Example 1
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  // useEffect
  useEffect(() => {
    console.log("useState Run!!");
  }, [count]);

  const handleClick = () => {
    startTransition(() => {
      setCount(count + 1);
      console.log("handleClick Run!!");
    });
  };

  // Example 2
  const [input, setInput] = useState();
  const [dataList, setDataList] = useState([]);

  const DataSize = 10000;

  // Function
  const handleChange = (e) => {
    setInput(e.target.value);

    startTransition(() => {
      const a = [];
      for (let i = 0; i < DataSize; i++) {
        a.push(e.target.value);
      }
      setDataList(a);
    });
  };

  return (
    <div className="App">
      <h1>useTransition Hook</h1>

      {/* Example 1 */}
      <h2>Count:{count}</h2>
      <button onClick={handleClick}>Update Count</button>

      {/* Example 2 */}
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? "Loading..."
        : dataList.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </div>
  );
}
export default App;
