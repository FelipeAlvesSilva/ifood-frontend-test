import axios from 'axios';
import { FEATURED_PLAYLISTS_BASE_URL } from '../utils/constraints';

const api = axios.create({
  baseURL: FEATURED_PLAYLISTS_BASE_URL,
  headers: { }
});

export { api };