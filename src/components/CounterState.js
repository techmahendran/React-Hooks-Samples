import { useState } from "react";

const CounterState = () => {
  const [count, setCount] = useState(0);

  const increMent = () => {
    setCount((nextCount) => nextCount + 1);
  };

  const decreMent = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h1>useState returns an array with exactly two values:</h1>
      <p>
        The current state. During the first render, it will match the
        initialState you have passed. The set function that lets you update the
        state to a different value and trigger a re-render.
      </p>
      <button onClick={increMent}>+</button>
      <h2>{count}</h2>
      <button onClick={decreMent}>-</button>
    </>
  );
};

export default CounterState;
