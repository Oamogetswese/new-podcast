import React, { useEffect, useState } from 'react';
import axios from 'axios';

// EpisodeList component: Fetches and displays a list of episodes for a given show ID
const EpisodeList = ({ showId }) => {
    // State hook to store the list of episodes
    const [episodes, setEpisodes] = useState([]);
    
    // State hook to store any error that might occur during the fetch operation
    const [error, setError] = useState(null);

    // useEffect hook to fetch episodes when the component mounts or when showId changes
    useEffect(() => {
        // Asynchronous function to fetch episodes from the API
        const fetchEpisodes = async () => {
            try {
                // Make GET request to the API to fetch episodes for the given showId
                const response = await axios.get(`https://podcast-api.netlify.app/shows/${showId}/episodes`);
                // Update the episodes state with the fetched data
                setEpisodes(response.data);
            } catch (err) {
                // Update the error state with the error message if fetch fails
                setError('Error fetching episodes: ' + err.message);
            }
        };
        // Call the fetchEpisodes function
        fetchEpisodes();
    }, [showId]); // Dependency array ensures useEffect runs when showId changes

    // If there's an error, display the error message
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Episode List</h1>
            <ul>
                {/* Map through the episodes array and display each episode */}
                {episodes.map((episode) => (
                    <li key={episode.id}>
                        <h2>{episode.title}</h2>
                        <p>{episode.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Export the EpisodeList component for use in other parts of the app
export default EpisodeList;

