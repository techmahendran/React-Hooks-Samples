import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};

const ReducerFun = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <>
      <h1>useReducer</h1>

      <p>
        <strong>useReducer Events</strong>
      </p>
      <p>
        useReducer is very similar to useState, but it lets you move the state
        update logic from event handlers into a single function outside of your
        component. Read more about choosing between useState and useReducer.
      </p>

      <button onClick={increment}>+</button>
      <h2>{state.count}</h2>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default ReducerFun;
