import React from 'react';
import Show from '../components/Show';

// ShowPage component: Renders the Show component based on the matched route
const ShowPage = ({ match }) => (
  <div>
    {/* Render the Show component and pass the show ID from the URL parameters */}
    <Show id={match.params.id} />
  </div>
);

// Export the ShowPage component for use in other parts of the app
export default ShowPage;