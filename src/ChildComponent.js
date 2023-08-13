import React, { memo } from "react";

function ChildComponent({ increment }) {
  console.log("Child Rendered!!");

  return (
    <>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default memo(ChildComponent);
