import axiosInstance from '../../../utils/axiosInstance';

// ==================== Authentication APIs ====================

export const authAPI = {
    login: async (data) => {
        const res = await axiosInstance.post('/auth/login', data);
        console.log('Login response:', res.data);
        // Backend wraps response in a 'data' object, extract it
        return res.data.data || res.data;
    },

    logout: async () => {
        const res = await axiosInstance.post('/auth/logout');
        return res.data;
    },

    // Verify if the current token is valid
    verifyToken: async () => {
        // This will use the token from Redux store via axios interceptor
        // If your backend has a specific verify endpoint, use that
        // Otherwise, we can use any protected endpoint to verify
        const res = await axiosInstance.get('/jobs/positions');
        return res.data;
    },

    updatePassword: async (data) => {
        const res = await axiosInstance.put('/auth/update-password', data);
        return res.data;
    },
};

// ==================== Application APIs ====================

export const applicationAPI = {
    getApplications: async (params) => {
        const res = await axiosInstance.get('/jobs/applications', { params });
        return res.data;
    },


    deleteApplication: async (id) => {
        const res = await axiosInstance.delete(`/jobs/applications/${id}`);
        return res.data;
    },
};

// ==================== Job Position APIs ====================

export const jobPositionAPI = {
    getJobPositions: async (params) => {
        const res = await axiosInstance.get('/jobs/positions', { params });
        return res.data;
    },

    createJobPosition: async (data) => {
        const res = await axiosInstance.post('/jobs/add-position', data);
        return res.data;
    },


    deleteJobPosition: async (id) => {
        const res = await axiosInstance.delete(`/jobs/deleteposition/${id}`);
        return res.data;
    },
};

// ==================== Client Message APIs ====================

export const clientMessageAPI = {
    getClientMessages: async (params) => {
        const res = await axiosInstance.get('/clients/getallmessages', { params });
        return res.data;
    },

    // getClientMessageById: async (id) => {
    //     const res = await axiosInstance.get(`/client-messages/${id}`);
    //     return res.data;
    // },

    // markAsRead: async (id) => {
    //     const res = await axiosInstance.patch(`/client-messages/${id}/read`);
    //     return res.data;
    // },

    deleteClientMessage: async (id) => {
        const res = await axiosInstance.delete(`/clients/deletemessage/${id}`);
        return res.data;
    },

    // replyToMessage: async (id, data) => {
    //     const res = await axiosInstance.post(`/client-messages/${id}/reply`, data);
    //     return res.data;
    // },
};

