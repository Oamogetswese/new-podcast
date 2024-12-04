import React, { useEffect, useState } from 'react';
import axios from 'axios';

// PreviewList component: Fetches and displays a list of podcast previews
const PreviewList = () => {
    // State hook to store the list of previews
    const [previews, setPreviews] = useState([]);
    
    // State hook to store any error that might occur during the fetch operation
    const [error, setError] = useState(null);

    // useEffect hook to fetch previews when the component mounts
    useEffect(() => {
        // Asynchronous function to fetch previews from the API
        const fetchPreviews = async () => {
            try {
                // Make GET request to the API to fetch preview data
                const response = await axios.get('https://podcast-api.netlify.app/previews');
                // Update the previews state with the fetched data
                setPreviews(response.data);
            } catch (err) {
                // Update the error state with the error message if fetch fails
                setError('Error fetching previews: ' + err.message);
            }
        };
        // Call the fetchPreviews function
        fetchPreviews();
    }, []); // Empty dependency array ensures useEffect runs only once when component mounts

    // If there's an error, display the error message
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Preview List</h1>
            <ul>
                {/* Map through the previews array and display each preview */}
                {previews.map((preview) => (
                    <li key={preview.id}>
                        <h2>{preview.title}</h2>
                        <p>{preview.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Export the PreviewList component for use in other parts of the app
export default PreviewList;