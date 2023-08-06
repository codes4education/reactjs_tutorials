import React, { forwardRef, useRef, useImperativeHandle } from "react";

function ChildComponent(props, ref) {
  // Example 2
  const childRef = useRef();

  const handleChildButtonClick = () => {
    console.log("child button clicked");
  };

  useImperativeHandle(ref, () => ({
    handleChildButtonClick,
  }));

  return (
    <>
      {/* Example 1 */}
      {/* <input type="text" ref={ref} /> */}

      {/* Example 2 */}
      <button ref={childRef}>Click Me</button>
    </>
  );
}

export default forwardRef(ChildComponent);
