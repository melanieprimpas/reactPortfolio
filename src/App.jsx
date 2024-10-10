import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  return (
    <>
      <Nav />
        <Outlet />
    </>
  );
}

export default App;
/*import React, { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent"; // Import MainContent

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe'); // Manage the current page state

  const handlePageChange = (page) => setCurrentPage(page); // Function to change the current page

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} /> {/* Pass props to Header }
      <MainContent currentPage={currentPage} /> {/* Pass currentPage to MainContent }
    </div>
  );
}

export default App;*/
