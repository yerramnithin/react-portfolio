import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <p className="display-5 text-center">Counter</p>
      <p className="text-center fs-1">{count}</p>
      <div className="d-flex justify-content-center align-content-center gap-2">
        <button className="btn btn-sm btn-danger" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="btn btn-sm btn-warning" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-sm btn-primary" onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
