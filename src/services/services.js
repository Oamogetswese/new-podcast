import axios from 'axios';

// Base URL for the podcast API
const API_BASE_URL = 'https://podcast-api.netlify.app';

// Function to get genres
export const getGenres = async () => {
    try {
        // Make GET request to the API to fetch genres
        const response = await axios.get(`${API_BASE_URL}/genres`);
        // Return the response data
        return response.data;
    } catch (error) {
        // Throw an error if the fetch fails
        throw new Error('Error fetching genres: ' + error.message);
    }
};

// Function to get previews
export const getPreviews = async () => {
    try {
        // Make GET request to the API to fetch previews
        const response = await axios.get(`${API_BASE_URL}/previews`);
        // Return the response data
        return response.data;
    } catch (error) {
        // Throw an error if the fetch fails
        throw new Error('Error fetching previews: ' + error.message);
    }
};

// Function to get episodes for a specific show
export const getEpisodes = async (showId) => {
    try {
        // Make GET request to the API to fetch episodes for the given show ID
        const response = await axios.get(`${API_BASE_URL}/shows/${showId}/episodes`);
        // Return the response data
        return response.data;
    } catch (error) {
        // Throw an error if the fetch fails
        throw new Error('Error fetching episodes: ' + error.message);
    }
};
