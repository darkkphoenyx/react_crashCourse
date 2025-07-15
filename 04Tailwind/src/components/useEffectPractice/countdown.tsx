import { useEffect, useRef, useState } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState(false);
  const [timer, setTimer] = useState<number>(0);
  const time = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let timerId;
    if (countdown && timer > 0) {
      timerId = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timerId!);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else clearInterval(timerId);

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [countdown]);
  const startCountdown = () => {
    const minutes = time.current?.value ? Number(time.current.value) : 0;
    if (minutes > 0) {
      setTimer(minutes * 60); // Convert minutes to seconds
      setCountdown(true); // Start countdown
    } else {
      alert("Please enter a valid time.");
    }
  };

  const stopCountdown = () => {
    console.log(countdown);
    setCountdown((prev) => (prev ? false : true));
  };

  const resetCountdown = () => {
    setCountdown(false); // Stop countdown
    setTimer(0); // Reset timer
    if (time.current) {
      time.current.value = ""; // Clear input field
    }
  };
  return (
    <>
      <div className="flex flex-col space-y-5">
        <h1>Countdown Clock</h1>
        <input
          className="outline-none border p-2"
          ref={time}
          type="number"
          placeholder="Enter minutes"
        />
        <div className="flex gap-4">
          <button onClick={startCountdown} className="border p-2 rounded-full">
            Start
          </button>
          <button onClick={stopCountdown} className="border p-2 rounded-full">
            {countdown ? "Pause" : "Continue"}
          </button>
          <button onClick={resetCountdown} className="border p-2 rounded-full">
            Reset
          </button>
        </div>
        <div>
          <h3>
            Timer: {Math.floor(timer / 60)}:
            {String(timer % 60).padStart(2, "0")}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Countdown;
