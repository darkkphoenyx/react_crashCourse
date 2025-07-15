import { useState } from "react";

const DarkMode = () => {
  const [mode, setMode] = useState(false);
  const handleClick = () => {
    setMode((prev) => !prev);
  };

  return (
    <div className={`${mode ? "bg-red-500" : ""}`}>
      This is dark DarkMode <br />
      <button className="border cursor-pointer" onClick={() => handleClick()}>
        Switch
      </button>
    </div>
  );
};

export default DarkMode;
