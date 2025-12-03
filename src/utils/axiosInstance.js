import axios from 'axios';
import { store } from '../components/Admin Folder/redux/store';
import { logout } from '../components/Admin Folder/redux/authSlice';

// Create axios instance with base configuration
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor - Add auth token to requests
axiosInstance.interceptors.request.use(
    (config) => {
        // Skip adding token for login and register endpoints
        const isAuthEndpoint = config.url?.includes('/auth/login') || config.url?.includes('/auth/register');

        if (!isAuthEndpoint) {
            // Get token from Redux store (single source of truth)
            const state = store.getState();
            const token = state.auth.token;

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor - Handle errors globally
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            // Handle specific error codes
            switch (error.response.status) {
                case 401:
                    // Only logout if it's not a login/register endpoint failure
                    const isAuthEndpoint = error.config?.url?.includes('/auth/login') ||
                        error.config?.url?.includes('/auth/register');

                    if (!isAuthEndpoint) {
                        // Unauthorized on protected route - clear token and redirect
                        console.error('Session expired or invalid token');
                        store.dispatch(logout());
                        window.location.href = '/digitos/admin';
                    }
                    // If it's a login failure, let the component handle it
                    break;
                case 403:
                    console.error('Access forbidden');
                    break;
                case 404:
                    console.error('Resource not found');
                    break;
                case 500:
                    console.error('Server error');
                    break;
                default:
                    const errorMessage = error.response?.data?.message || error.response?.data || error.message;
                    console.error('An error occurred:', errorMessage);
            }
        } else if (error.request) {
            console.error('No response received from server');
        } else {
            console.error('Error setting up request:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
