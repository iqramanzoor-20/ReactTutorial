// import home from "./pages/Home"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'


// import Chai from './Chai.jsx' 

// function App() {
//   const username = "chai aur code"

//   return (
//     <>
//       <Chai/>
//       <h1>chai aur react {username}</h1>
//       <p>test para</p>
//     </>
//   )
// }

// // export default App

// 2
// import { useState } from 'react'

// function App() {

//   const [counter, setCounter] = useState(15)  // <-- ye change

//   const addValue = () => {
//     console.log("clicked", counter);
//     setCounter(counter + 1)  // <-- ye change
//   }

//   const removeValue = () => {
//     if(counter > 0){
//       setCounter(counter - 1)  // <-- ye change
//     }
//   }

//   return (
//     <>
//       <h1>Chai aur react</h1>
//       <h2>Counter value: {counter}</h2>

//       <button onClick={addValue}>Add value</button>
//       <br />
//       <button onClick={removeValue}>remove value</button>
//     </>
//   )
// }

// export default App


3
function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-purple-500">
      <h1 className="text-5xl font-bold text-white">Tailwind run</h1>
    </div>
  )
}
export default App