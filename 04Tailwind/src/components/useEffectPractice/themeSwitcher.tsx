import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const defaultTheme = localStorage.getItem("theme") || "dark";
    setTheme(defaultTheme);
    if (!localStorage.getItem("theme"))
      localStorage.setItem("theme", defaultTheme);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme.toLowerCase() === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <>
      <div className="max-w-7xl">
        <h1>Theme Toggle</h1>

        <button className="border" onClick={() => toggleTheme()}>
          Toggle Theme
        </button>
        <div
          className={`${
            theme.toLowerCase() === "dark" ? "bg-red-700" : "bg-yellow-700"
          }`}
        >
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            nostrum asperiores aliquam provident, tenetur labore ullam ipsam
            incidunt architecto eos eligendi consequuntur consectetur, sequi
            praesentium minima iste placeat ex, eius magni saepe quam animi
            fugiat voluptatem cumque! Excepturi fugiat tempora, dicta ex optio
            voluptatibus suscipit omnis, in beatae incidunt eos, odit debitis.
            Veniam illum, sed aperiam facere quos eligendi cumque reiciendis
            dolores vero ut, temporibus explicabo in corporis minus asperiores
            placeat quaerat assumenda, molestiae esse ipsa doloremque atque amet
            voluptatem quidem. Iste ea aliquam explicabo quasi corporis dicta id
            delectus, temporibus perspiciatis officiis sunt numquam molestias
            odio, deleniti ex itaque.
          </h2>
        </div>
        <div className="bg-white dark:bg-black text-black dark:text-white">
          jkasdflkasjdf
        </div>
      </div>
    </>
  );
};

export default ThemeToggle;
