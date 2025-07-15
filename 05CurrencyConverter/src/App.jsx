import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import Ribbons from "./blocks/Animations/Ribbons/Ribbons";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div>
        <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.corporatefinanceinstitute.com/assets/currency-basket.jpeg')`,
          }}
        >
          <div className="absolute bg-black/70 w-full h-screen"></div>
          <div className="w-full z-10">
            <h1 className="text-center text-4xl text-orange-500 mb-4 font-bold">
              Currency Converter
            </h1>
            <div
              className="w-full max-w-md mx-auto border border-gray-60 rounded-lg
            p-5 backdrop-blur-sm bg-white/30"
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  convert();
                }}
              >
                <div className="w-full mb-1">
                  {" "}
                  <InputBox
                    label="From"
                    amount={amount || ""}
                    currencyOptions={options}
                    onAmountChange={(amount) => setAmount(amount)}
                    onCurrencyChange={(currency) => setFrom(currency)}
                    selectCurrency={from}
                  />
                </div>
                <div className="relative w-full h-0.5">
                  <button
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white
                px-2 py-0.5"
                    onClick={swap}
                  >
                    Swap
                  </button>
                </div>
                <div className="w-full mb-1">
                  {" "}
                  <InputBox
                    label="To"
                    amount={convertedAmount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={to}
                    amountDisabled
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 mt-2
              text-white px-4 py-3 rounded-lg"
                >
                  Convert
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
