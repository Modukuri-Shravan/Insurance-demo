import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000', // Replace with your API base URL
    timeout: 10000, // Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptors can be added here for request/response handling
api.interceptors.request.use(
    (config) => {
        // Add any custom logic before sending the request
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // Handle response data
        return response.data;
    },
    (error) => {
        // Handle errors
        return Promise.reject(error);
    }
);

export default api;