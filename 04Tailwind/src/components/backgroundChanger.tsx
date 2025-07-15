import { useState } from "react";

const colorPicker = [
  {
    color: "#FF6347", // Tomato
    name: "Tomato",
  },
  {
    color: "#FF4500", // OrangeRed
    name: "OrangeRed",
  },
  {
    color: "#FFD700", // Gold
    name: "Gold",
  },
  {
    color: "#32CD32", // LimeGreen
    name: "LimeGreen",
  },
  {
    color: "#1E90FF", // DodgerBlue
    name: "DodgerBlue",
  },
  {
    color: "#8A2BE2", // BlueViolet
    name: "BlueViolet",
  },
  {
    color: "#A52A2A", // Brown
    name: "Brown",
  },
  {
    color: "#7FFF00", // Chartreuse
    name: "Chartreuse",
  },
  {
    color: "#FF1493", // DeepPink
    name: "DeepPink",
  },
  {
    color: "#00CED1", // DarkTurquoise
    name: "DarkTurquoise",
  },
];

const BackgroundChanger = () => {
  const [bgColor, setBgColor] = useState(colorPicker[0].color);

  return (
    <div style={{ backgroundColor: bgColor }} className="w-full h-screen">
      <div></div>

      <div className="fixed bottom-4 flex gap-12 justify-center inset-x-2 flex-wrap px-2 rounded-4xl py-4 bg-white">
        {colorPicker.map((color, index) => (
          <button
            key={index}
            onClick={() => setBgColor(color.color)}
            className="p-2 rounded-4xl bg-gray-200 shadow"
            style={{ backgroundColor: color.color }}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BackgroundChanger;
