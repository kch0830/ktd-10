import { useState } from "react";

const HandleEx3 = () => {
  let [display, changeDisplay] = useState(true);

  const setDisplay = () => {
    changeDisplay(!display);
  };

  return (
    <>
      <button onClick={setDisplay}>{display ? "사라져라" : "보여라"}</button>
      {display && <h4>안녕하세요</h4>}
    </>
  );
};

export default HandleEx3;