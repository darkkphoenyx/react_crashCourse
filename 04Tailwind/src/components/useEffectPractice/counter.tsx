import { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const timerId = useRef<number | null>(null);

  const autoIncreamentCounter = () => {
    if (timerId.current !== null) return;
    timerId.current = window.setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const clearAutoIncreament = () => {
    if (timerId.current !== null) {
      clearInterval(timerId.current);
      console.log(timerId);
      timerId.current = null;
    }
  };

  // clear timer on unmount
  useEffect(() => {
    // clears the times if this component is unmounted
    return () => clearInterval(timerId.current!);
  }, []);
  const increaseCounter = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseCounter = () => {
    setCount((prev) => prev - 1);
  };

  const [internalCounter, setInternalCounter] = useState(0);
  useEffect(() => {
    setInternalCounter((prev) => prev + 1);
  }, [count]);
  return (
    <>
      <div className="flex flex-col text-4xl gap-8 w-48">
        <h3>Counter: {count}</h3>
        <div className="w-full flex gap-4">
          <button
            onClick={() => increaseCounter()}
            className="border rounded-md w-full"
          >
            +
          </button>
          <button
            onClick={() => decreaseCounter()}
            className="border rounded-md w-full"
            disabled={count === 0}
          >
            -
          </button>
        </div>
        <button
          onClick={() => setCount(0)}
          className="border rounded-md w-full"
        >
          Reset
        </button>
        <button
          onClick={() => autoIncreamentCounter()}
          className="border rounded-md w-full"
        >
          Start Auto Increment
        </button>
        <button
          onClick={() => clearAutoIncreament()}
          className="border rounded-md w-full"
        >
          Stop Auto Increment
        </button>
      </div>
      <div className="mt-10">Counter Changed: {internalCounter} </div>
    </>
  );
};

export default Counter;
