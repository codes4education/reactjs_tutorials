import React from "react";
import "./App.css";

// Bootstrap 5
import { Button, Alert } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">
        <h1>Install Bootstrap In React.</h1>

        {/* Button */}
        <Button variant="primary">Primary</Button>

        {/* Alert */}
        <Alert variant="danger">This is a success alert—check it out!</Alert>
      </div>
    </>
  );
}
export default App;
