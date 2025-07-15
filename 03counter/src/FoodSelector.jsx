import { useState } from "react";

const FoodData = [
  {
    id: 1,
    food: "🍥",
  },
  {
    id: 2,
    food: "🍔",
  },
  {
    id: 3,
    food: "🍕",
  },
];
const FoodSelector = () => {
  const [food, setFood] = useState([]);
  const handleFood = (food) => {
    setFood((prev) => (!prev.includes(food) ? [...prev, food] : [...prev]));
  };
  return (
    <div>
      Select your food:
      <div className="gap-4 flex">
        {FoodData.map((item) => (
          <button
            onClick={() => {
              handleFood(item.food);
            }}
            className="border p-4 rounded cursor-pointer "
            key={item.id}
          >
            {item.food}
          </button>
        ))}
      </div>
      <div>Selected food: {food}</div>
      <button
        onClick={() => setFood([])}
        className="bg-gray-500 text-white border p-2 cursor-pointer rounded"
      >
        Clear selection
      </button>
    </div>
  );
};

export default FoodSelector;
