import React from "react";

export default function ReusableButton({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
