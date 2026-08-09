// import Chai from './Component/Chai.jsx'

// function App() {
//   return (
//     <div style={{background: '#1a1a1a', color: 'white', minHeight: '100vh', padding: '20px'}}>
//       <h1>React Tutorial</h1>
//       <Chai />
//     </div>
//   )
// }

// export default App

// import Counter from "./Component/Counter";

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// export default App;


// 3
// import UserCard from "./Component/03UserCard";

// function App() {
//   return (
//     <div>
//       <UserCard username="Chai" role="Dev" />
//     </div>
//   )
// }

// export default App


// 4

// import { useState } from "react";

// function App() {
//   const [color, setColor] = useState("red");

//   return (
//     <div
//       style={{
//         backgroundColor: color,
//         height: "100vh",
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "10px",
//       }}
//     >
//       <button onClick={() => setColor("red")}>Red</button>
//       <button onClick={() => setColor("blue")}>Blue</button>
//       <button onClick={() => setColor("green")}>Green</button>
//       <button onClick={() => setColor("yellow")}>Yellow</button>
//     </div>
//   );
// }

// export default App;


// 5

import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+-=[]{}";
    }

    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl p-6 shadow-xl">
        
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Password Generator
        </h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="w-full px-4 py-3 rounded-l-lg outline-none text-black"
          />

          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 text-white px-5 rounded-r-lg hover:bg-blue-700"
          >
            Copy
          </button>
        </div>

        <div className="text-white">
          <div className="flex items-center gap-4 mb-5">
            <input
              type="range"
              min="6"
              max="30"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
            />

            <span className="text-yellow-400 font-bold">
              {length}
            </span>
          </div>

          <div className="flex gap-2 mb-3">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>

          <div className="flex gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Special Characters</label>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;