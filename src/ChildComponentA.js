import React from "react";

export default function ChildComponentA({ sharedState, handleChange }) {
  // Exmaple 1
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    handleChange(newValue);
  };
  return (
    <div>
      <input type="text" value={sharedState} onChange={handleInputChange} />
    </div>
  );
}
