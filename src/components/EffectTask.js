import { useEffect, useState } from "react";

const EffectTask = () => {
  const [timers, setTimers] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTimers(new Date());
    }, 1000);
  }, [timers]);

  return (
    <>
      <h1>useEffect</h1>

      <p>
        The useEffect Hook allows you to perform side effects in your
        components. Some examples of side effects are: fetching data, directly
        updating the DOM, and timers. useEffect accepts two arguments. The
        second argument is optional.useEffect{" "}
        <strong>function ,dependency</strong>
      </p>

      <h2>{timers.toLocaleTimeString()} </h2>
    </>
  );
};

export default EffectTask;
