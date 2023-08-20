import React, { useSyncExternalStore } from "react";
import "./App.css";

function App() {
  // Example 1
  const width = useSyncExternalStore(
    (listener) => {
      window.addEventListener("resize", listener);
      return () => {
        window.removeEventListener("resize", listener);
      };
    },
    () => window.innerWidth
  );

  return (
    <div className="App">
      <h1>useSyncExternalStore Hook</h1>

      {/* Example 1 */}
      <h2>Window Size:{width}</h2>
    </div>
  );
}
export default App;
