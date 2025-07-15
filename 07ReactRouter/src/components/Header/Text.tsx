import type React from "react";

interface Helow {
  name: string;
  age: number;
}

const Text: React.FC<Helow> = ({ age, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
};

export default Text;
