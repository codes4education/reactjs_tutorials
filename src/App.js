import "./App.css";
import User from "./User";

function App() {
  function Common() {
    return <div>Common Component</div>;
  }

  return (
    <>
      <div className="App">
        <h1>Hello World !!</h1>

        <User />

        {/* {Common()} */}
        <Common />
      </div>
    </>
  );
}

export default App;
