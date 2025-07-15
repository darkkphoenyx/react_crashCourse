import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const decreaseCounter = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div className="flex gap-2">
      <button
        className="border p-2"
        disabled={counter === 10}
        onClick={() => increaseCounter()}
      >    
        add
      </button>
      <button
        disabled={counter === 0}
        className="border p-2"
        onClick={() => decreaseCounter()}
      >
        remove
      </button>
      <div>counter: {counter}</div>
      {counter === 10 && <p className="text-red-500">Max limit reached!</p>}
      {counter === 0 && <p className="text-blue-500">Min limit reached!</p>}
    </div>
  );
};

export default Counter;
