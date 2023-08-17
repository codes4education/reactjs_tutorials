import React, { useReducer } from "react";

// Reducer Function
const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

export default function Counter() {
  // Example 2
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        INCREMENT Count
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        DECREMENT Count
      </button>
    </>
  );
}
