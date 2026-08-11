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

// import { useState, useCallback, useEffect, useRef } from "react";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   const passwordRef = useRef(null);

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//     if (numberAllowed) {
//       str += "0123456789";
//     }

//     if (charAllowed) {
//       str += "!@#$%^&*()_+-=[]{}";
//     }

//     for (let i = 1; i <= length; i++) {
//       const randomIndex = Math.floor(Math.random() * str.length);
//       pass += str.charAt(randomIndex);
//     }

//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed]);

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     window.navigator.clipboard.writeText(password);
//   }, [password]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [passwordGenerator]);

//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-gray-800 rounded-2xl p-6 shadow-xl">
        
//         <h1 className="text-3xl font-bold text-center text-white mb-6">
//           Password Generator
//         </h1>

//         <div className="flex mb-4">
//           <input
//             type="text"
//             value={password}
//             readOnly
//             ref={passwordRef}
//             className="w-full px-4 py-3 rounded-l-lg outline-none text-black"
//           />

//           <button
//             onClick={copyPasswordToClipboard}
//             className="bg-blue-600 text-white px-5 rounded-r-lg hover:bg-blue-700"
//           >
//             Copy
//           </button>
//         </div>

//         <div className="text-white">
//           <div className="flex items-center gap-4 mb-5">
//             <input
//               type="range"
//               min="6"
//               max="30"
//               value={length}
//               onChange={(e) => setLength(Number(e.target.value))}
//               className="w-full"
//             />

//             <span className="text-yellow-400 font-bold">
//               {length}
//             </span>
//           </div>

//           <div className="flex gap-2 mb-3">
//             <input
//               type="checkbox"
//               checked={numberAllowed}
//               onChange={() => setNumberAllowed((prev) => !prev)}
//             />
//             <label>Numbers</label>
//           </div>

//           <div className="flex gap-2">
//             <input
//               type="checkbox"
//               checked={charAllowed}
//               onChange={() => setCharAllowed((prev) => !prev)}
//             />
//             <label>Special Characters</label>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default App;

// // 6
// import { useState } from "react";

// function App() {
//   const [amount, setAmount] = useState("");
//   const [result, setResult] = useState("");

//   const convert = () => {
//     setResult(amount * 280);
//   };

//   return (
//     <div className="h-screen flex flex-col items-center justify-center gap-4">
//       <h1 className="text-3xl font-bold">Currency Converter</h1>

//       <input
//         type="number"
//         placeholder="Enter USD"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         className="border p-3 rounded"
//       />

//       <button
//         onClick={convert}
//         className="bg-blue-500 text-white px-5 py-2 rounded"
//       >
//         Convert
//       </button>

//       <h2 className="text-xl">
//         {result && `${result} PKR`}
//       </h2>
//     </div>
//   );
// }

// export default App;

// 7

// import { Routes, Route, Link } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'

// function App() {
//   return (
//     <div>
//       {/* Navbar */}
//       <nav style={{padding: '20px', background: '#333', display: 'flex', gap: '20px'}}>
//         <Link to="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link>
//         <Link to="/about" style={{color: 'white', textDecoration: 'none'}}>About</Link>
//         <Link to="/contact" style={{color: 'white', textDecoration: 'none'}}>Contact</Link>
//       </nav>

//       {/* Pages */}
//       <div style={{padding: '20px'}}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App

// 8

// import Navbar from "./component/08Navbar";  // 08 laga do
// import Card from "./component/08Card";      // 08 laga do
// import Button from "./component/08Button";  // 08 laga do
// import "./App.css";

// function App() {
//   return (
//     <div className="app">

//       <Navbar />

//       <main className="container">

//         <h1>React Components</h1>

//         <p>
//           This project demonstrates reusable React components.
//         </p>

//         <div className="cards">

//           <Card
//             number="01"
//             title="Navbar Component"
//             description="A reusable navigation bar component."
//           />

//           <Card
//             number="02"
//             title="Card Component"
//             description="A reusable card for displaying information."
//           />

//           <Card
//             number="03"
//             title="Button Component"
//             description="A reusable button component."
//           />

//         </div>

//         <div className="button-section">
//           <Button text="Start Learning" />
//           <Button text="Explore React" />
//         </div>

//       </main>

//     </div>
//   );
// }

// export default App;

// 9

// import { useUser } from "./Context/UserContext.jsx";

// function App() {
//   const { user, setUser } = useUser();

//   return (
//     <>
//       <h1>Hello {user}</h1>

//       <button onClick={() => setUser("Ahmed")}>
//         Change User
//       </button>
//     </>
//   );
// }

// export default App;

// 10

// import { useEffect } from "react";
// import ThemeSwitcher from "./component/10ThemeSwitcher";
// import { useTheme } from "./Context/10ThemeContext";

// function App() {
//   const { themeMode } = useTheme();

//   useEffect(() => {
//     document.body.style.backgroundColor =
//       themeMode === "dark" ? "#212121" : "#ffffff";

//     document.body.style.color =
//       themeMode === "dark" ? "#ffffff" : "#000000";
//   }, [themeMode]);

//   return (
//     <div>
//       <h1>Theme Switcher</h1>
//       <ThemeSwitcher />
//     </div>
//   );
// }

// export default App;

// 11

// import Todo from "./Component/Todo";
// import { TodoProvider } from "./11TodoContextLocal";

// function App() {
//   return (
//     <TodoProvider>
//       <Todo />
//     </TodoProvider>
//   );
// }

// export default App;

// 12
import Todo from "./Component/Todo";

function App() {
  return <Todo />;
}

export default App;