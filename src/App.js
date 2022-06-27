import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [counter, setCounter] = useState(0);
  const decrementHandler = () => {
    counter > 0 && setCounter(counter - 1);
  };
  const resetHandler = () => {
    setCounter(0);
  };
  const incrementHandler = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <p className="counter_value">{counter}</p>
      <div className="buttons_section">
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
    </div>
  );
};

export default App;
