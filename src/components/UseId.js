import { useId } from "react";

const UseId = () => {
  const id = useId();

  return (
    <>
      <h1>useId</h1>
      <p>
        Call useId at the top level of your component to generate a unique ID:
      </p>

      <form id="formUseId">
        <label htmlFor={id}>Email</label>
        <br />
        <input type="text" id={id} />
        <br />

        <label htmlFor={id}>Password</label>
        <br />

        <input type="password" id={id} />
      </form>
    </>
  );
};

export default UseId;
