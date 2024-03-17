import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="main">
      <Calculator />
    </div>
  );
}

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");

  function handleBtnClick(i) {
    if (displayValue === "0") {
      setDisplayValue(i.toString());
    } else {
      setDisplayValue((v) => v + i);
    }
  }
  function handleCalculation() {
    try {
      if (displayValue.includes("/0")) {
        throw new Error("Cannot divide by zero");
      }
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue(error.message);
    }
  }

  function handleAllClear() {
    setDisplayValue("0");
  }

  function handleClear() {
    const newValue = displayValue.slice(0, -1);
    setDisplayValue(newValue === "" ? "0" : newValue);
  }

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <Keyboard
        handleBtnClick={handleBtnClick}
        handleCalculation={handleCalculation}
        handleAllClear={handleAllClear}
        handleClear={handleClear}
      />
    </div>
  );
}

function Display({ value }) {
  return (
    <div className="display">
      <input type="text" value={value} />
    </div>
  );
}

function Keyboard({
  handleBtnClick,
  handleCalculation,
  handleAllClear,
  handleClear,
}) {
  return (
    <div className="keyboard">
      <div>
        <Button value="AC" name="A" onBtnClick={handleAllClear} />
        <Button value="DE" name="A" onBtnClick={handleClear} />
        <Button value="%" name="A" onBtnClick={() => handleBtnClick("%")} />
        <Button value="/" name="A" onBtnClick={() => handleBtnClick("/")} />
      </div>
      <div>
        <Button value="7" onBtnClick={() => handleBtnClick(7)} />
        <Button value="8" onBtnClick={() => handleBtnClick(8)} />
        <Button value="9" onBtnClick={() => handleBtnClick(9)} />
        <Button value="*" name="A" onBtnClick={() => handleBtnClick("*")} />
      </div>
      <div>
        <Button value="4" onBtnClick={() => handleBtnClick(4)} />
        <Button value="5" onBtnClick={() => handleBtnClick(5)} />
        <Button value="6" onBtnClick={() => handleBtnClick(6)} />
        <Button value="-" name="A" onBtnClick={() => handleBtnClick("-")} />
      </div>
      <div>
        <Button value="1" onBtnClick={() => handleBtnClick(1)} />
        <Button value="2" onBtnClick={() => handleBtnClick(2)} />
        <Button value="3" onBtnClick={() => handleBtnClick(3)} />
        <Button value="+" name="A" onBtnClick={() => handleBtnClick("+")} />
      </div>
      <div>
        <Button value="00" onBtnClick={() => handleBtnClick("00")} />
        <Button value="0" onBtnClick={() => handleBtnClick(0)} />
        <Button value="." onBtnClick={() => handleBtnClick(".")} />
        <Button value="=" name="A" onBtnClick={handleCalculation} />
      </div>
    </div>
  );
}

function Button({ value, onBtnClick, name }) {
  return (
    <button className={name === "A" ? "btn-black" : "btn"} onClick={onBtnClick}>
      {value}
    </button>
  );
}
