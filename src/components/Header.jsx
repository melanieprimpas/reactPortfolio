import NavTabs from './NavTabs';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
}