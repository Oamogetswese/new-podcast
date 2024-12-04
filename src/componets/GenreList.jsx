import React, { useEffect, useState } from 'react';
import { getGenres } from '../services/services';

// GenreList component: Fetches and displays a list of genres
const GenreList = () => {
    // State hook to store the list of genres
    const [genres, setGenres] = useState([]);
    
    // State hook to store any error that might occur during the fetch operation
    const [error, setError] = useState(null);

    // useEffect hook to fetch genres when the component mounts
    useEffect(() => {
        // Asynchronous function to fetch genres from the API
        const fetchGenres = async () => {
            try {
                // Make request to getGenres function to fetch data
                const data = await getGenres();
                // Update the genres state with the fetched data
                setGenres(data);
            } catch (err) {
                // Update the error state with the error message if fetch fails
                setError('Error fetching genres: ' + err.message);
            }
        };
        // Call the fetchGenres function
        fetchGenres();
    }, []); // Empty dependency array ensures useEffect runs only once when component mounts

    // If there's an error, display the error message
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Genre List</h1>
            <ul>
                {/* Map through the genres array and display each genre */}
                {genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </div>
    );
};

// Export the GenreList component for use in other parts of the app
export default GenreList;

