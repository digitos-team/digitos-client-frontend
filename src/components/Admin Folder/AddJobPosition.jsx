import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { jobPositionAPI } from "./api/api";
import { Plus, MapPin, Briefcase, Trash2, X } from 'lucide-react';

const AddJobPosition = () => {
    const adminId = useSelector((state) => state.auth.user?._id);

    const [positions, setPositions] = useState([]);
    const [loadingList, setLoadingList] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        experienceRequired: "",
        location: ""
    });

    const [loadingCreate, setLoadingCreate] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    // ------------------ Fetch Job Positions ------------------
    const fetchPositions = async () => {
        try {
            setLoadingList(true);
            const res = await jobPositionAPI.getJobPositions();
            setPositions(Array.isArray(res.data) ? res.data : []);
        } catch (err) {
            console.error("Failed to fetch job positions", err);
        } finally {
            setLoadingList(false);
        }
    };

    useEffect(() => {
        fetchPositions();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this job position?")) return;

        try {
            await jobPositionAPI.deleteJobPosition(id);
            fetchPositions(); // reload list
        } catch (err) {
            console.error("Failed to delete job position", err);
            alert("Failed to delete job");
        }
    };

    // ------------------ Form change ------------------
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // ------------------ Create Job Position ------------------
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingCreate(true);
        setError(null);
        setSuccess(false);

        try {
            await jobPositionAPI.createJobPosition({
                ...formData,
                adminId,
            });

            setSuccess(true);
            setFormData({
                title: "",
                description: "",
                experienceRequired: "",
                location: "",
            });

            await fetchPositions(); // reload list

            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to create job position");
        } finally {
            setLoadingCreate(false);
        }
    };

    return (
        <div className="p-8 max-w-7xl mx-auto">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold font-display text-primary">Job Positions</h1>
                    <p className="text-gray-500 mt-1">Manage and create job openings</p>
                </div>

                <button
                    onClick={() => setShowForm(!showForm)}
                    className={`
                        flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all duration-200 shadow-lg
                        ${showForm
                            ? 'bg-gray-100 text-gray-600 hover:bg-gray-200 shadow-none'
                            : 'bg-primary text-white hover:bg-black/90 shadow-primary/20 hover:shadow-primary/40'
                        }
                    `}
                >
                    {showForm ? <><X size={18} /> Close</> : <><Plus size={18} /> Add Job Position</>}
                </button>
            </div>

            {/* ---------------- Add Job Position Form ---------------- */}
            {showForm && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8 animate-in fade-in slide-in-from-top-4 duration-300">
                    <h2 className="text-lg font-bold text-primary mb-6 pb-4 border-b border-gray-100">Create New Position</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Job Title *</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                    placeholder="e.g. Senior React Developer"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Location *</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                    placeholder="e.g. Remote / New York"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Experience Required *</label>
                                <input
                                    type="text"
                                    name="experienceRequired"
                                    value={formData.experienceRequired}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                    placeholder="e.g. 3-5 Years"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Job Description</label>
                            <textarea
                                name="description"
                                rows="4"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                                placeholder="Describe the role responsibilities and requirements..."
                            />
                        </div>

                        {success && (
                            <div className="bg-green-50 border border-green-100 text-green-700 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Job position created successfully!
                            </div>
                        )}

                        {error && (
                            <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                {error}
                            </div>
                        )}

                        <div className="flex gap-4 pt-2">
                            <button
                                type="submit"
                                disabled={loadingCreate}
                                className="bg-accent text-primary hover:bg-yellow-400 font-bold px-6 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loadingCreate ? "Creating..." : "Create Position"}
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    setFormData({
                                        title: "",
                                        description: "",
                                        experienceRequired: "",
                                        location: "",
                                    })
                                }
                                className="px-6 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                                Clear Form
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* ---------------- Job Positions List ---------------- */}
            <div>
                <h2 className="text-xl font-bold text-primary mb-6">Current Openings</h2>

                {loadingList ? (
                    <div className="flex items-center justify-center h-32">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                    </div>
                ) : positions.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                        <Briefcase size={48} className="mx-auto text-gray-300 mb-3" />
                        <p className="text-gray-500 font-medium">No job positions found.</p>
                        <p className="text-sm text-gray-400">Create a new position to get started.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {positions.map((job) => (
                            <div key={job._id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="flex justify-between items-start mb-4">
                                    <div className="h-10 w-10 rounded-lg bg-gray-50 flex items-center justify-center text-primary">
                                        <Briefcase size={20} />
                                    </div>
                                    <button
                                        onClick={() => handleDelete(job._id)}
                                        className="text-gray-400 hover:text-red-600 transition-colors p-1.5 hover:bg-red-50 rounded-lg"
                                        title="Delete Position"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>

                                <h3 className="text-lg font-bold text-primary mb-1">{job.title}</h3>

                                <div className="flex flex-col gap-2 mt-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <MapPin size={14} className="text-accent" />
                                        {job.location}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Briefcase size={14} className="text-accent" />
                                        {job.experienceRequired}
                                    </div>
                                </div>

                                {job.description && (
                                    <div className="mt-4 pt-4 border-t border-gray-50">
                                        <p className="text-sm text-gray-500 line-clamp-2">{job.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddJobPosition;
