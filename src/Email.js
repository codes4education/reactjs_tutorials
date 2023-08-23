import React, { useId } from "react";

function Email() {
  //   const id = Math.random();

  const id = useId();

  return (
    <>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="text" id={`${id}-email`} autoComplete="off" />

      <br />
      <br />

      <label htmlFor={`${id}-name`}>Name</label>
      <input type="text" id={`${id}-name`} autoComplete="off" />
    </>
  );
}

export default Email;
