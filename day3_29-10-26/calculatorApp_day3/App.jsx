
import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [answer, setAnswer] = useState("");
  const [color, setColor] = useState("");

  function add() {
    if (num1 === "" || num2 === "") {
      setAnswer("Enter both numbers");
      setColor("red");
      return;
    }
    setAnswer(Number(num1) + Number(num2));
    setColor("green");
  }
  function subtract() {
    if (num1 === "" || num2 === "") {
      setAnswer("Enter both numbers");
      setColor("red");
      return;
    }
    setAnswer(Number(num1) - Number(num2));
    setColor("pink");
  }
  function multiply() {
    if (num1 === "" || num2 === "") {
      setAnswer("Enter both numbers");
      setColor("red");
      return;
    }
    setAnswer(Number(num1) * Number(num2));
    setColor("blue");
  }
  function divide() {
    if (num1 === "" || num2 === "") {
      setAnswer("Enter both numbers");
      setColor("red");
    } 
    else if (Number(num2) === 0) {
      setAnswer("Cannot divide by zero");
      setColor("red");
    } 
    else {
      setAnswer(Number(num1) / Number(num2));
      setColor("orange");
    }
  }
  function reset() {
    setNum1("");
    setNum2("");
    setAnswer("");
    setColor("");
  }
  return (
    <div className="container">
      <h1>MM's Calculator</h1>
      <p className="subtitle">Perform Basic Mathematical Operations</p>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons">

        <button className="add" onClick={add}>
          Add (+)
        </button>

        <button className="subtract" onClick={subtract}>
          Subtract (-)
        </button>

        <button className="multiply" onClick={multiply}>
          Multiply (*)
        </button>

        <button className="divide" onClick={divide}>
          Divide (/)
        </button>

        <button className="reset" onClick={reset}>
          Reset
        </button>

      </div>

      <div className={`answer-box ${color}`}>
        <h2>Answer</h2>
        <h1>{answer === "" ? "0" : answer}</h1>
      </div>

    </div>
  );
}

export default App;
