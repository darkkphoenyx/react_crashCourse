import { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef<HTMLInputElement>(null);

  // password generator
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";

    if (characterAllowed) str += "!@#$&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  //useEffect hook
  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, characterAllowed, setPassword]);

  //copy password clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 32);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-full min-h-screen flex flex-col justify-center items-center p-6">
      <h2 className="text-4xl text-white font-semibold mb-6">
        Password Generator
      </h2>

      <div className="w-full max-w-md mx-auto shadow-xl rounded-lg px-6 py-4 bg-white">
        <input
          className="w-full outline-none text-lg text-gray-700 bg-gray-100 p-3 rounded-md mb-4"
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4"
        >
          Copy
        </button>
      </div>

      <div className="w-full max-w-md mx-auto flex flex-col gap-4 text-white mt-6">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={8}
            max={32}
            value={length}
            className="cursor-pointer w-full accent-blue-500"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className="text-sm">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            className="accent-blue-500"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput" className="text-sm">
            Include Numbers
          </label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            className="accent-blue-500"
            onChange={() => setCharacterAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput" className="text-sm">
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;

// learn more about useEffect(), useRef(), useCallback()
