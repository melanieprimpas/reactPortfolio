import React, { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent"; // Import MainContent

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe'); // Manage the current page state

  const handlePageChange = (page) => setCurrentPage(page); // Function to change the current page

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} /> {/* Pass props to Header */}
      <MainContent currentPage={currentPage} /> {/* Pass currentPage to MainContent */}
    </div>
  );
}

export default App;
/*import Header from "./components/Header"
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <div>
      <Header    />
      <PortfolioContainer />
    </div>
  )
}

export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/
//export default App
