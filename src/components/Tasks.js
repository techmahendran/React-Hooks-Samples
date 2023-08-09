import CounterState from "./CounterState";
import EffectTask from "./EffectTask";
import ContextPage from "../Context/ContextPage";
import ReducerFun from "./ReducerFun";
import DOMRef from "./DOMRef";
import UseId from "./UseId";

const Tasks = () => {
  return (
    <>
      <section className="Counter_section">
        <CounterState />
      </section>
      <hr />
      <section className="Effect_section">
        <EffectTask />
      </section>
      <hr />

      <section className="Context_section">
        <ContextPage />
      </section>
      <hr />

      <section className="Reducer_section">
        <ReducerFun />
      </section>
      <hr />

      <section className="Ref_section">
        <DOMRef />
      </section>
      <hr />

      <section className="useId_section">
        <UseId />
      </section>
    </>
  );
};

export default Tasks;
