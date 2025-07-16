import { useEffect, useState } from "react";
import "./App.css";
import { ThemeContextProvider } from "./context/Theme";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";
import WeaponCard from "./components/WeaponCard";
import { BucketListProvider, WeaponProvider } from "./context/BucketList";
import BucketCard from "./components/BucketCard";
import TaskV2 from "./components/TaskCardV2";
import { TaskProvider } from "./context/TaskV2";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual theme change
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
        <div>
          <WeaponProvider>
            <WeaponCard />
          </WeaponProvider>
        </div>
        <BucketListProvider>
          <BucketCard />
        </BucketListProvider>

        <TaskProvider>
          <TaskV2 />
        </TaskProvider>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
