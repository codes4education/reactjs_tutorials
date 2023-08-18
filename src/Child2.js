import React, { useContext } from "react";
import { MyContext } from "./App";

export default function Child2() {
  const sharedData = useContext(MyContext);
  console.log(sharedData);
  return (
    <>
      <h3>Child2 Component</h3>
      <p>{sharedData}</p>
    </>
  );
}
