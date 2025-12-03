import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * ProtectedRoute Component
 * Wraps routes that require authentication
 * Redirects to login if user is not authenticated
 */
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, token } = useSelector((state) => state.auth);

    // Check if user is authenticated
    if (!isAuthenticated || !token) {
        // Redirect to login page if not authenticated
        return <Navigate to="/digitos/admin" replace />;
    }

    // Render the protected component if authenticated
    return children;
};

export default ProtectedRoute;
