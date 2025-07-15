import { useState } from "react";

const TextCounter = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <p>Type below</p>
      <input
        className="border h-10 px-2"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>Character Count: {text.length}</div>
    </div>
  );
};

export default TextCounter;
