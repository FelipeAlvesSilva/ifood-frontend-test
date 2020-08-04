import axios from 'axios';
import { SPOTIFY_API_BASE_URL } from '../utils/constraints';

const spotifyAPI = axios.create({
  baseURL: SPOTIFY_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export { spotifyAPI };