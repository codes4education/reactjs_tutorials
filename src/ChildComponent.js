import React, { memo } from "react";

function ChildComponent(props) {
  // Example 2
  console.log("Child Component Rendered!!");
  return (
    <>
      <h3>Child Component Count : {props.count}</h3>
    </>
  );
}

export default memo(ChildComponent);
