import axiosInstance from '../utils/axiosInstance';

export const getAllJobPositions = async () => {
    try {
        const response = await axiosInstance.get('/jobs/positions');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const applyForJob = async (formData) => {
    try {
        const response = await axiosInstance.post('/jobs/apply', formData);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// New API for client messages
export const addClientMessage = async (data) => {
    try {
        const response = await axiosInstance.post('/clients/addmessage', data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};
