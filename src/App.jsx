import React from 'react';
import Navbar from './componets/Navbar';
import ShowDetail from './pages/ShowPage';
import FavouritesPage from './pages/FavoritesPage';

// App component: Main component that renders the Navbar, ShowDetail, and FavouritesPage components
const App = () => {
    // Example show ID to pass to the ShowDetail component
    const showId = '123'; // Replace with the actual show ID

    return (
        <div>
            {/* Render the Navbar component */}
            <Navbar />
            {/* Render the ShowDetail component and pass the show ID as a prop */}
            <ShowDetail showId={showId} />
            {/* Render the FavouritesPage component */}
            <FavouritesPage />
        </div>
    );
};

// Export the App component for use in other parts of the app
export default App;

