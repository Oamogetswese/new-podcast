import React, { useState } from 'react';

// FavouritesPage component: Manages a list of favourite items
const FavouritesPage = () => {
    // State hook to store the list of favourite items
    const [favourites, setFavourites] = useState([]);

    // Function to add an item to the favourites list
    const addFavourite = (item) => {
        setFavourites([...favourites, item]);
    };

    // Function to remove an item from the favourites list
    const removeFavourite = (item) => {
        setFavourites(favourites.filter(fav => fav !== item));
    };

    return (
        <div>
            <h1>My Favourites</h1>
            <ul>
                {/* Map through the favourites array and display each item */}
                {favourites.map((item, index) => (
                    <li key={index}>
                        {item}
                        {/* Button to remove the item from the favourites list */}
                        <button onClick={() => removeFavourite(item)}>Remove</button>
                    </li>
                ))}
            </ul>
            {/* Example usage: Button to add a new favourite item */}
            <button onClick={() => addFavourite('New Favourite Item')}>Add Favourite</button>
        </div>
    );
};

// Export the FavouritesPage component for use in other parts of the app
export default FavouritesPage;
