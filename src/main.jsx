// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import React from 'react'
// import './index.css'


// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com', target: '_blank'},
//   'click me to visit google'
// )

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <div style={{display: 'flex', gap: '10px'}}> 
//       {reactElement}
//       {anotherElement}
//     </div>
//   </StrictMode>
// )

// 2

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// 4

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// 7

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// )

// 9

// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import { UserProvider } from "./Context/UserContext";
// import "./index.css"; // ye line bhi ho

// createRoot(document.getElementById("root")).render(
//   <UserProvider>
//     <App />
//   </UserProvider>
// );

// 10

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import { ThemeProvider } from "./Context/10ThemeContext.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   </StrictMode>
// );


// 12

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";

// import App from "./App.jsx";
// import { store } from "./store.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>
// );

// 13
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);