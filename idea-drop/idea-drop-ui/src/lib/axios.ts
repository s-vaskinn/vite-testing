import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  withCredentials: true, // Include cookies in requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;