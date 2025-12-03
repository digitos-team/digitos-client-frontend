import React, { useState, useEffect } from 'react';
import { applicationAPI } from './api/api';
import { Search, Trash2, FileText, Calendar, Phone, User } from 'lucide-react';

const ApplicationList = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            setLoading(true);
            const response = await applicationAPI.getApplications();
            setApplications(response.data || response);
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch applications');
        } finally {
            setLoading(false);
        }
    };

    // Helper function to get position title
    const getPositionTitle = (positionApplyingFor) => {
        if (!positionApplyingFor) return 'General Application';
        return positionApplyingFor.title || positionApplyingFor || 'General Application';
    };

    // Helper function to get resume URL
    const getResumeUrl = (resumePath) => {
        if (!resumePath) return null;
        // If it's already a full URL, return it
        if (resumePath.startsWith('http')) return resumePath;
        // Extract filename from the path (handles both Windows and Unix paths)
        const filename = resumePath.split(/[\\/]/).pop();
        // Return the backend URL for the resume
        const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
        return `${baseUrl}/uploads/resumes/${filename}`;
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this application?')) {
            try {
                await applicationAPI.deleteApplication(id);
                fetchApplications(); // Refresh list
            } catch (err) {
                alert(err.response?.data?.message || 'Failed to delete application');
            }
        }
    };

    const filteredApplications = applications.filter((app) => {
        const positionTitle = getPositionTitle(app.positionApplyingFor);
        const matchesSearch =
            app.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            positionTitle.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesSearch;
    });

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-display text-primary">Job Applications</h1>
                    <p className="text-gray-500 mt-1">Manage and review incoming talent</p>
                </div>

                {/* Search Filter */}
                <div className="relative w-full md:w-96">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search size={18} className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search applicants..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white shadow-sm"
                    />
                </div>
            </div>

            {error && (
                <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl mb-6 text-sm font-medium">
                    {error}
                </div>
            )}

            {/* Applications Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-100">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Applicant
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Contact
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Applied Date
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Resume
                                </th>
                                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {filteredApplications.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-6 py-12 text-center text-gray-400">
                                        <div className="flex flex-col items-center gap-2">
                                            <User size={32} className="opacity-20" />
                                            <p>No applications found matching your search</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                filteredApplications.map((app) => {
                                    const positionTitle = getPositionTitle(app.positionApplyingFor);
                                    return (
                                        <tr key={app._id || app.id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-lg mr-3">
                                                        {app.name?.charAt(0).toUpperCase() || '?'}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-bold text-gray-900">{app.name || 'N/A'}</div>
                                                        <div className="text-sm text-gray-500 truncate max-w-48">
                                                            {positionTitle}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex flex-col gap-1">
                                                    <div className="text-sm text-gray-600 flex items-center gap-2">
                                                        <span className="w-4 h-4 flex items-center justify-center text-gray-400">@</span>
                                                        {app.email || 'N/A'}
                                                    </div>
                                                    <div className="text-sm text-gray-600 flex items-center gap-2">
                                                        <Phone size={14} className="text-gray-400" />
                                                        {app.phone || 'N/A'}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-600 flex items-center gap-2">
                                                    <Calendar size={14} className="text-gray-400" />
                                                    {app.createdAt ? new Date(app.createdAt).toLocaleDateString() : 'N/A'}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {app.resume ? (
                                                    <a
                                                        href={getResumeUrl(app.resume)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                                                    >
                                                        <FileText size={14} />
                                                        View Resume
                                                    </a>
                                                ) : (
                                                    <span className="text-sm text-gray-400 italic">No resume</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button
                                                    onClick={() => handleDelete(app._id || app.id)}
                                                    className="text-gray-400 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-lg"
                                                    title="Delete Application"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer/Pagination area */}
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/30 text-xs text-gray-500 flex justify-between items-center">
                    <span>Showing {filteredApplications.length} applications</span>
                    <span>Total: {applications.length}</span>
                </div>
            </div>
        </div>
    );
};

export default ApplicationList;
