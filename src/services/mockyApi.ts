import axios from 'axios';
import { MOCK_API_BASE_URL } from "../utils/constraints";

// Mocky Filters
const mockyAPI = axios.create({
  baseURL: MOCK_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export { mockyAPI };