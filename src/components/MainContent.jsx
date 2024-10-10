import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const MainContent = ({ currentPage }) => {
    const renderPage = () => {
        switch (currentPage) {
            case 'AboutMe':
                return <AboutMe />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <AboutMe />;
        }
    };

    return <main className="mx-3">{renderPage()}</main>;
};

export default MainContent;

/*import { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function MainContent () {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
          return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        if (currentPage === 'Resume') {
          return <Resume />;
        }
    };
    //const handlePageChange = (page) => setCurrentPage(page);
}*/
