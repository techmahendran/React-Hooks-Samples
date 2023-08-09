import { useRef } from "react";

const DOMRef = () => {
  const inputFocus = useRef(null);
  const countIncrement = useRef(0);

  const focusEvent = (e) => {
    e.preventDefault();

    inputFocus.current.focus();
  };

  const refCount = () => {
    countIncrement.current = countIncrement.current + 1;
    alert("You clicked " + countIncrement.current + " times!");
  };

  return (
    <>
      <h1>useRef</h1>
      <p>
        useRef returns an object with a single property: <b>current</b>:
        Initially, it's set to the <b>initialValue</b> you have passed. You can
        later set it to something else. If you pass the ref object to React as a
        <b>ref attribute</b> to a JSX node, React will set its <b>current</b>{" "}
        property.
      </p>

      <form onSubmit={focusEvent} id="refForm">
        <input
          type="text"
          ref={inputFocus}
          placeholder="Focus Events in Ref..."
        />
        <button className="ml-1">Add Focus</button>
      </form>

      <h2>Ref Counts Increment Button</h2>
      <button onClick={refCount}>Count Times</button>
    </>
  );
};

export default DOMRef;
