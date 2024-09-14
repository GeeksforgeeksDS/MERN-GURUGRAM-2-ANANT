import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log("Rendered");

  useEffect(() => {
    console.log("Inside useEffect");
  }, [count2, count]);

  const handleClickIncrement = () => {
    setCount(count + 1);
    console.log("I clicked increment button and count2 got incremented");
  };

  const handleClickDecrement = () => {
    setCount2(count2 - 1);

    console.log("I clicked decrement button and count got decremented");
  };

  return (
    <div className="App">
      <button type="button" onClick={handleClickIncrement}>
        Increment
      </button>
      {count}
      <button type="button" onClick={handleClickDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;
