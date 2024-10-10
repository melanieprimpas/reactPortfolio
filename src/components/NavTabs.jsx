import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          AboutMe
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
/*import { Link } from 'react-router-dom';

import NavTabs from './UI/NavTabs';
import React from "react";

const styles = {
    nav: {
        background: '#A19EBD'
    }
}
function NavTabs({ currentPage, handlePageChange }) {
    return (

        <nav style={styles.nav}>
            <ul className="nav nav-tabs" >
                <li className="nav-item">
                    <a
                        href="#AboutMe"
                        onClick={() => handlePageChange('AboutMe')}
                        className={currentPage === 'AboutMe' ? 'nav-link' : 'nav-link'}>AboutMe</a>
                </li>
            </ul>
            <ul className="nav nav-tabs" >
                <li className="nav-item">
                    <a
                        href="#Portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link' : 'nav-link'}>Portfolio</a>
                </li>
            </ul>
            <ul className="nav nav-tabs" >
                <li className="nav-item">
                    <a
                        href="#Contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link' : 'nav-link'}>Contact</a>
                </li>
            </ul>
            <ul className="nav nav-tabs" >
                <li className="nav-item">
                    <a
                        href="#Resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link' : 'nav-link'}>Resume</a>
                </li>
            </ul>

        </nav>
    )
}

export default NavTabs*/