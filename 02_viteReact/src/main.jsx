import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h2>my app | chai</h2>
    </div>
  );
}

const anotherUser = "chai aur react";

const anotherElement = (
  <a href="htttp://www.google.com" target="_blank">
    Visit google
  </a>
);

const reactElement = React.createElement(
  "a",
  {
    href: "http://google.com",
    target: "_blank",
  },
  "Click me to visit google",
  anotherUser
);

createRoot(document.getElementById("root")).render(<App />);
