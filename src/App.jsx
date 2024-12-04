import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';
import ShowPage from './pages/ShowPage';
import FavouritesPage from './pages/FavoritesPage';

// App component: Main component that renders the Navbar and sets up routes for ShowPage and FavouritesPage
const App = () => {
    return (
        <Router>
            <div>
                {/* Render the Navbar component */}
                <Navbar />
                <Routes>
                    {/* Define routes for different components */}
                    <Route path="/show/:id" element={<ShowPage />} />
                    <Route path="/favorites" element={<FavouritesPage />} />
                </Routes>
            </div>
        </Router>
    );
};

// Export the App component for use in other parts of the app
export default App;
