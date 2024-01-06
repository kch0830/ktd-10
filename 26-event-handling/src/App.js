import "./App.css";
import SyntheticEvent from "./SyntheticEvent";
import ClassBind from "./ClassBind";
import Counter from "./Counter";
import HandleEx from "./ex/HandleEx1";
import HandleEx2 from "./ex/HandleEx2";
import HandleEx3 from "./ex/HandleEx3";

function App() {
  const yongin = "시발";
  return (
    <div className="App">
      <SyntheticEvent />
        <hr/>

        <ClassBind />

        <hr/>

        <Counter />

        <hr />

        <HandleEx />

        <hr />
        <HandleEx2 />

        <hr />
        <HandleEx3 />
    </div>
  );
}

export default App;
