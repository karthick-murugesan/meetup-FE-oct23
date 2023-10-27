// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// App.js

import "./index.css";
import Feedback from "./components/Feedback";
import Banner from "./components/Banner";
function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const value = data.get("username");

  console.log({ value });
}
function App() {
  return (
    <div className="App">
      <Banner />
      {/* <style>
        {
          "body { background: linear-gradient(to bottom, #fefcea 0%,#f1da36 150%); }"
        }
      </style> */}
      <Feedback />
    </div>
  );
}

export default App;
