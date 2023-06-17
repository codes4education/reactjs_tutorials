import "./App.css";

function App() {
  // Example 1
  const demo = () => {
    alert("Hello Everyone !!");
  };

  // Example 5
  let data = "Code4Education";
  const demo1 = () => {
    data = "Bhaskar Gupta";
    alert(data);
  };

  return (
    <>
      <div className="App">
        {/* Example 5 Print your variable data */}
        <h1>{data}</h1>

        {/* Example 1 onLoad Function Call Automative  */}
        <button onClick={demo()}>Click Me</button>

        {/* Example 2 When you clicked the button */}
        <button onClick={demo}>Click Me</button>

        {/* Example 3 Inline Define Alert Box Method */}
        <button onClick={() => alert("Hello Everyone !!")}>Click Me</button>

        {/* Example 4 Function call with Arrow function Method */}
        <button onClick={() => demo()}>Click Me</button>

        {/* Example 5 Variables data with Function  */}
        <button onClick={demo1}>Click Me</button>
      </div>
    </>
  );
}

export default App;
