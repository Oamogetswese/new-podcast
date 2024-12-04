import React, { useEffect, useState } from "react";
import { fetchShow } from "../data";
import FavoriteButton from "./FavoriteButton";
import AudioPlayer from "./AudioPlayer"; // Corrected the import statement

// ShowDetail component: Fetches and displays detailed information about a specific show
const ShowDetail = ({ showId }) => {
  // State hook to store the show details
  const [show, setShow] = useState(null);

  // useEffect hook to fetch show details when the component mounts or showId changes
  useEffect(() => {
    // Fetch the show data based on showId
    fetchShow(showId).then((response) => setShow(response.data));
  }, [showId]); // Dependency array ensures useEffect runs when showId changes

  // If the show data is not yet loaded, display a loading message
  if (!show) return <div>Loading...</div>;

  return (
    <div>
      <h2>{show.title}</h2>
      {/* Map through the seasons array and display each season */}
      {show.seasons.map((season) => (
        <div key={season.id}>
          <h3>{season.title}</h3>
          <ul>
            {/* Map through the episodes array and display each episode */}
            {season.episodes.map((episode) => (
              <li key={episode.id}>
                {episode.title} <FavoriteButton episode={episode} />
                <AudioPlayer src={episode.mp3} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Export the ShowDetail component for use in other parts of the app
export default ShowDetail;
