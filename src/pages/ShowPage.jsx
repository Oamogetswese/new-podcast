import React from 'react';
import { useParams } from 'react-router-dom';
import Show from '../components/ShowDetail';

// ShowPage component: Renders the Show component based on the matched route
const ShowPage = () => {
    const { id } = useParams(); // Get the 'id' parameter from the URL

    return (
        <div>
            {/* Render the Show component and pass the show ID as a prop */}
            <Show id={id} />
        </div>
    );
};

// Export the ShowPage component for use in other parts of the app
export default ShowPage;
