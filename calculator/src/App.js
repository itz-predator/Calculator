import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";
import {
  FaDivide,
  FaTimes,
  FaMinus,
  FaPlus,
  FaEquals,
  FaBackspace,
  FaTrashAlt,
  FaDotCircle,
  FaRegCircle,

} from "react-icons/fa";

import { MdDoubleArrow } from "react-icons/md";

function App() {
  const [value, setValue] = useState("");

  const handleClick = (val) => setValue(value + val);

  const calculate = () => {
    try {
      setValue(evaluate(value).toString());
    } catch {
      setValue("Error");
    }
  };

  const clear = () => setValue("");
  const del = () => setValue(value.slice(0, -1));

  return (
    <div className="calculator-container">
      <div className="calculator">
        <input
          type="text"
          className="calculator-display"
          value={value}
          placeholder="0"
          readOnly
        />
        <div className="calculator-buttons">
          <button className="btn operator" onClick={clear} title="Clear All">
            <FaTrashAlt />
          </button>
          <button className="btn operator" onClick={del} title="Delete Last">
            <FaBackspace />
          </button>
          <button className="btn operator" onClick={() => handleClick("/")}>
            <FaDivide />
          </button>
          <button className="btn operator" onClick={() => handleClick("*")}>
            <FaTimes />
          </button>

          {[7, 8, 9].map((num) => (
            <button key={num} className="btn" onClick={() => handleClick(num)}>
              {num}
            </button>
          ))}
          <button className="btn operator" onClick={() => handleClick("-")}>
            <FaMinus />
          </button>

          {[4, 5, 6].map((num) => (
            <button key={num} className="btn" onClick={() => handleClick(num)}>
              {num}
            </button>
          ))}
          <button className="btn operator" onClick={() => handleClick("+")}>
            <FaPlus />
          </button>

          {[1, 2, 3].map((num) => (
            <button key={num} className="btn" onClick={() => handleClick(num)}>
              {num}
            </button>
          ))}
          <button className="btn equal" onClick={calculate}>
            <FaEquals />
          </button>

          <button className="btn" onClick={() => handleClick("00")}>
            <MdDoubleArrow />
          </button>
          <button className="btn" onClick={() => handleClick("0")}>
            <FaRegCircle />
          </button>
          <button className="btn" onClick={() => handleClick(".")}>
            <FaDotCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
