import { useContext } from "react";
import { CurrentUserContext } from "../Context/ContextPage";

const ContentContext = () => {
  const text = useContext(CurrentUserContext);

  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

export default ContentContext;
