import { createContext, useState } from "react";
import MainContext from "./MainContext";

export const CurrentUserContext = createContext(null);

const ContextPage = () => {
  const [myName] = useState("This is Context Text");
  return (
    <>
      <h1>useContext</h1>

      <p>
        useContext returns the context value for the <b> calling component</b>.
        It is determined as the value passed to the closest SomeContext.Provider
        above the calling component in the tree. If there is no such provider,
        then the returned value will be the defaultValue you have passed to
        createContext for that context. The returned value is always up-to-date.
        React automatically re-renders components that read some context if it
        changes
      </p>

      <CurrentUserContext.Provider value={myName}>
        <MainContext />
      </CurrentUserContext.Provider>
    </>
  );
};

export default ContextPage;
