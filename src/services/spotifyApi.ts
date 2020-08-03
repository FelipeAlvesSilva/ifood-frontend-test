import axios from 'axios';
import { SPOTIFY_API_BASE_URL } from '../utils/constraints';

// Spotify
const spotifyAPI = axios.create({
  baseURL: SPOTIFY_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

spotifyAPI.interceptors.request.use();

export { spotifyAPI };