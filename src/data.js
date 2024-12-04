import axios from 'axios';

export const BASE_URL = "https://podcast-api.netlify.app";

// Fetch endpoints
export const fetchPreviews = () => axios.get(`${BASE_URL}/previews`);
export const fetchGenre = (id) => axios.get(`${BASE_URL}/genre/${id}`);
export const fetchShow = (id) => axios.get(`${BASE_URL}/id/${id}`);

// Define entities
export class SHOW {
  constructor(id, title, seasons) {
    this.id = id;
    this.title = title;
    this.seasons = seasons; // Array of SEASON objects
  }
}

export class SEASON {
  constructor(id, title, episodes) {
    this.id = id;
    this.title = title;
    this.episodes = episodes; // Array of EPISODE objects
  }
}

export class EPISODE {
  constructor(id, title, mp3) {
    this.id = id;
    this.title = title;
    this.mp3 = mp3; // MP3 file URL
  }
}

export class PREVIEW {
  constructor(id, title, genreIds) {
    this.id = id;
    this.title = title;
    this.genreIds = genreIds; // Array of Genre IDs
  }
}

export class GENRE {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}