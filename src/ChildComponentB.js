import React from "react";

export default function ChildComponentB({ sharedState, alert }) {
  // Exmaple 2
  //   const data = "Bhaskar Gupta";
  const data = { name: "Bhaskar Gupta", email: "Bhaskar@gmail.com" };

  return (
    <div>
      <h3>Shared State: {sharedState}</h3>

      <button onClick={() => alert(data)}>Click Me</button>
    </div>
  );
}
