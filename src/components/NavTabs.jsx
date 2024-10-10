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

export default NavTabs