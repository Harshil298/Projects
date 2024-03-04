import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [range, setRange] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const special = "!@#$%^&*()_+?*-~";

    let allChr = upperCase + lowerCase; 
    if (numberAllowed) allChr += number; if (charAllowed) allChr += special;
    let pass = "";

    pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    if (numberAllowed) 
      pass += number[Math.floor(Math.random() * number.length)];
    if (charAllowed) 
    pass += special[Math.floor(Math.random() * special.length)];

    while (range > pass.length) {
      pass += allChr[Math.floor(Math.random() * allChr.length)];
    }
    setPassword(pass);
  }, [password, range, setPassword, numberAllowed, charAllowed]);

  const copyToclip = useCallback (() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [range, numberAllowed, charAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400  bg-gray-700">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyToclip}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 mb-4">
            <input
              type="range"
              min={6}
              max={100}
              value={range}
              className="cursor-pointer"
              onChange={(e) => {
                setRange(e.target.value);
              }}
            />
            <label>Length :{range}</label>
          </div>
          <div className="flex items-center gap-x-1 mb-4">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((pre) => !pre);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1 mb-4">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((pre) => !pre);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
