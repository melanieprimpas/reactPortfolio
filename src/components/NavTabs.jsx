import { Link, useLocation } from 'react-router-dom';

const styles = {
    nav: {
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/c/c2/Glorious-blue-mountain-range.jpg")`,
        backgroundSize: 'max-width', 
        backgroundPosition: 'center', 
        height: '100px', 
        padding: '0 20px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        color: "#ffffff",
        fontFamily: "cursive",
        
    },
    h1: {
        display: 'flex',
        justifyContent: 'left',
    },
    item: {
        display: 'flex',
        justifyContent: 'right',
        color: "#ffffff"
    }
}

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav" style = {styles.nav}>
      <h1 style = {styles.h1} >Melanie Primpas</h1>
      <nav style = {styles.item}>
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
      </nav>
    </ul>
  );
}

export default NavTabs;
