import React from "react";
import "./App.css";
import Email from "./Email";

function App() {
  return (
    <div className="App">
      <h1>useID Hook</h1>

      {/* Example 1 */}
      <Email />

      <article>
        Let’s walk through an example to see when this is useful. HTML
        accessibility attributes like aria-describedby let you specify that two
        tags are related to each other. For example, you can specify that an
        element (like an input) is described by another element (like a
        paragraph).
      </article>

      <Email />
    </div>
  );
}
export default App;
