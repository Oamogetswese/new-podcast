import React, { useState } from "react";

// FavoriteButton component: Allows users to mark episodes as favorite or unfavorite
const FavoriteButton = ({ episode }) => {
  // State hook to manage the favorite status (true for favorite, false for not favorite)
  const [isFavorite, setIsFavorite] = useState(false);

  // Function to handle the button click event and toggle the favorite status
  const handleClick = () => {
    // Toggle the favorite status
    setIsFavorite(!isFavorite);
    // Save the favorite status to local storage or a database (commented out for now)
  };

  return (
    <button onClick={handleClick}>
      {/* Conditional rendering to display the correct button label */}
      {isFavorite ? "Unfavorite" : "Favorite"}
    </button>
  );
};

// Export the FavoriteButton component for use in other parts of the app
export default FavoriteButton;

