import { useEffect } from "react";
import BackgroundChanger from "./components/backgroundChanger";
import Card from "./components/card";
import PasswordGenerator from "./components/passwordGenerator";
import Counter from "./components/useEffectPractice/counter";
import FetchData from "./components/useEffectPractice/fetchData";
import SearchFruits from "./components/useEffectPractice/searchFilter";
import ThemeToggle from "./components/useEffectPractice/themeSwitcher";
import Countdown from "./components/useEffectPractice/countdown";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen gap-4 bg-gray-800 text-white">
        {/* <div className="flex gap-4">
          <Card
            cardTitle="Yandere"
            cardDetails="One who held upon the Heim of Emperor"
            cardLink="http://www.google.com"
            cardImage="https://images.pexels.com/photos/30445480/pexels-photo-30445480.jpeg"
          />
          <Card
            cardTitle="Tzsu"
            cardDetails="Sca'r of WarEheim"
            cardLink="http://www.google.com"
            cardImage="https://images.pexels.com/photos/16654239/pexels-photo-16654239.jpeg"
          />
        </div> */}
        {/* <BackgroundChanger /> */}
        {/* <PasswordGenerator /> */}
        {/* <Counter /> */}
        {/* <FetchData /> */}
        {/* <SearchFruits /> */}
        <ThemeToggle />
        <Countdown />
      </div>
    </>
  );
}

export default App;
