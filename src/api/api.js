import axiosInstance from '../utils/axiosInstance';

export const applyForJob = async (formData) => {
    try {
        const response = await axiosInstance.post('/jobs/apply', formData, {
            headers: {
                'Content-Type': undefined,
            }
        });
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
