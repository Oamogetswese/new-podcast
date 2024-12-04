import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


// HomePage component: Fetches and displays a list of shows
const HomePage = () => {
  // State hook to store the list of shows
  const [shows, setShows] = useState([]);

  // useEffect hook to fetch shows when the component mounts
  useEffect(() => {
    // Asynchronous function to fetch shows from the API
    const fetchShows = async () => {
      try {
        // Make GET request to the API to fetch shows
        const response = await axios.get('https://podcast-api.netlify.app');
        // Sort the shows alphabetically by title
        const sortedShows = response.data.sort((a, b) => a.title.localeCompare(b.title));
        // Update the shows state with the sorted data
        setShows(sortedShows);
      } catch (error) {
        // Log the error to the console if the fetch fails
        console.error('Error fetching shows:', error);
      }
    };
    // Call the fetchShows function
    fetchShows();
  }, []); // Empty dependency array ensures useEffect runs only once when component mounts

  // If shows data is not yet loaded, display a loading message
  if (!shows.length) return <div>Loading...</div>;

  return (
    <div>
      {/* Map through the shows array and display each show */}
      {shows.map(show => (
        <div key={show.id} className="show-preview">
          {/* Link to the show detail page */}
          <h2><Link to={`/show/${show.id}`}>{show.title}</Link></h2>
          <p>{show.description}</p>
          <img src={show.previewImage} alt={show.title} />
        </div>
      ))}
    </div>
  );
};

// Export the HomePage component for use in other parts of the app
export default HomePage;
