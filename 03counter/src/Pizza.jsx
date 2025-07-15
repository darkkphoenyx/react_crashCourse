import { useState } from "react";
import "./App.css";

function Pizza() {
  const [food, setFood] = useState("");

  const addFood = (food) => {
    setFood(food);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <p>Choose your favourite food</p>
      <button onClick={() => addFood("Pizza")}>Pizza 🍕</button> <br />
      <button onClick={() => addFood("Burger")}>Burger 🍔</button> <br />
      <button onClick={() => addFood("Sushi")}>Sushi 🍥</button> <br />
      <div>Your choice: {food}</div>
    </>
  );
}

export default Pizza;
