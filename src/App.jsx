import React from 'react';

const App = () => {
    const showId = '123'; // Replace with the actual show ID

    return (
        <div>
            <Navbar />
            <ShowDetail showId={showId} />
            <FavouritesPage />
        </div>
    );
};

export default App;