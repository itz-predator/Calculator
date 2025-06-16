import React, { useState } from "react";
import "./style.css";

function App() {
  const [value, setValue] = useState("");

  const handleClick = (val) => {
    setValue(value + val);
  };

  const calculate = () => {
    try {
      setValue(eval(value).toString()); // Note: Still using eval — ok for small projects
    } catch {
      setValue("Error");
    }
  };

  const clear = () => setValue("");
  const del = () => setValue(value.slice(0, -1));

  return (
    <div className="calculator-container">
      <div className="calculator">
        <input type="text" className="calculator-display" value={value} placeholder="0" readOnly />
        <div className="calculator-buttons">
          <button className="btn operator" onClick={clear}>AC</button>
          <button className="btn operator" onClick={del}>DEL</button>
          <button className="btn operator" onClick={() => handleClick("/")}>/</button>
          <button className="btn operator" onClick={() => handleClick("*")}>*</button>

          <button className="btn" onClick={() => handleClick("7")}>7</button>
          <button className="btn" onClick={() => handleClick("8")}>8</button>
          <button className="btn" onClick={() => handleClick("9")}>9</button>
          <button className="btn operator" onClick={() => handleClick("-")}>-</button>

          <button className="btn" onClick={() => handleClick("4")}>4</button>
          <button className="btn" onClick={() => handleClick("5")}>5</button>
          <button className="btn" onClick={() => handleClick("6")}>6</button>
          <button className="btn operator" onClick={() => handleClick("+")}>+</button>

          <button className="btn" onClick={() => handleClick("1")}>1</button>
          <button className="btn" onClick={() => handleClick("2")}>2</button>
          <button className="btn" onClick={() => handleClick("3")}>3</button>
          <button className="btn equal" onClick={calculate}>=</button>

          <button className="btn" onClick={() => handleClick("00")}>00</button>
          <button className="btn" onClick={() => handleClick("0")}>0</button>
          <button className="btn" onClick={() => handleClick(".")}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
