import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            // Backend returns 'admin' in response, map it to 'user' in state
            state.user = action.payload.admin || action.payload.user;
            state.token = action.payload.token;
            state.error = null;
            // Redux Persist will automatically save to localStorage
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
            // Redux Persist will automatically clear from localStorage
        },
        // Action to set credentials (used for token validation/rehydration)
        setCredentials: (state, action) => {
            state.user = action.payload.admin || action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout, setCredentials, clearError } = authSlice.actions;

export default authSlice.reducer;
