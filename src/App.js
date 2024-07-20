import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  function resultDate() {
    date.setDate(date.getDate() + count);
    return date.toUTCString().slice(0, 16);
  }

  return (
    <>
      <div className="step-counter">
        <button
          onClick={() => (step > 1 ? setStep((s) => s - 1) : 1)}
        > - </button>
        <span> Step:{step} </span>
        <button onClick={() => setStep((s) => s + 1)}> + </button>
      </div>
      <div className="main-counter">
        <button onClick={() => setCount((c) => c - step)}> - </button>
        <span> count:{count} </span>
        <button onClick={() => setCount((c) => c + step)}> + </button>
      </div>
      <p>
        {count === 0 && `Today is ${date.toUTCString().slice(0, 16)}`}
        {count < 0 && `${Math.abs(count)} days ago is ${resultDate()}`}
        {count > 0 && `${count} days from Today is ${resultDate()}`}
      </p>
    </>
  );
}

export default App;
