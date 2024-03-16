import React, { useState } from "react";
import "./style.css";
import "./App.js";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="container">
      <div className="calculator">
        <input type="text" value={value} placeholder="0" />
      </div>
      <div>
        <input
          type="button"
          className="button operator"
          value="AC"
          onClick={(e) => setValue("")}
        />
        <input
          type="button"
          className="button operator"
          value="DEL"
          onClick={(e) => setValue(value.slice(0, -1))}
        />
        <input
          type="button"
          className="button operator"
          value="C"
          onClick={(e) => setValue("")}
        />
        <input
          type="button"
          className="button operator"
          value="/"
          onClick={(e) => setValue(value + e.target.value)}
        />
      </div>
      <div>
        <input
          type="button"
          className="button"
          value="7"
          onClick={(e) => setValue(value + e.target.value)}
        />
        <input
          type="button"
          className="button"
          value="8"
          onClick={(e) => setValue(value + e.target.value)}
        />
        <input
          type="button"
          className="button"
          value="9"
          onClick={(e) => setValue(value + e.target.value)}
        />
        <input
          type="button"
          className="button operator"
          value="*"
          onClick={(e) => setValue(value + e.target.value)}
        />
      </div>
      <div>
        <input
          type="button"
          className="button"
          value="4"
          onClick={(e) => setValue(value + e.target.value)}
        />
        <input
          type="button"
          className="button"
          value="5"
          onClick={(e) => setValue(value + e.target.value)}
        />
        <input
          type="button"
          className="button"
          value="6"
          onClick={(e) => setValue(value + e.target.value)}
        />
        <input
          type="button"
          className="button operator"
          value="+"
          onClick={(e) => setValue(value + e.target.value)}
        />
      </div>
      <div>
        <input
          type="button"
          className="button"
          value="1"
          onClick={(e) => setValue(value + e.target.value)}
        />
        <input
          type="button"
          className="button"
          value="2"
          onClick={(e) => setValue(value + e.target.value)}
        />
        <input
          type="button"
          className="button"
          value="3"
          onClick={(e) => setValue(value + e.target.value)}
        />
        <input
          type="button"
          className="button operator"
          value="-"
          onClick={(e) => setValue(value + e.target.value)}
        />
      </div>
      <div>
        <input
          type="button"
          className="button"
          value="00"
          onClick={(e) => setValue(value + e.target.value)}
        />
        <input
          type="button"
          className="button"
          value="0"
          onClick={(e) => setValue(value + e.target.value)}
        />
        <input
          type="button"
          className="button"
          value="."
          onClick={(e) => setValue(value + e.target.value)}
        />
        <input
          type="button"
          value="="
          className="button equalbtn"
          onClick={(e) => setValue(eval(value))}
        />
      </div>
    </div>
  );
}

export default App;
