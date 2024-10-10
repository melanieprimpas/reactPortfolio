import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

import App from './App';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <AboutMe />,
            },
            {
                path: '/Portfolio',
                element: <Portfolio />,
            },
            {
                path: '/Contact',
                element: <Contact />,
            },
            {
                path: '/Resume',
                element: <Resume />,
            },
        ],
    },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
