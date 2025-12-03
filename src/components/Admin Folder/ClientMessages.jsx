import React, { useState, useEffect } from 'react';
import { clientMessageAPI } from './api/api';
import { MessageSquare, Trash2, X, Mail, Phone, Building, Clock } from 'lucide-react';

const ClientMessages = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedMessage, setSelectedMessage] = useState(null);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            setLoading(true);
            const response = await clientMessageAPI.getClientMessages();
            setMessages(response.data || response);
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch messages');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            try {
                await clientMessageAPI.deleteClientMessage(id);
                setSelectedMessage(null);
                fetchMessages();
            } catch (err) {
                alert(err.response?.data?.message || 'Failed to delete message');
            }
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-display text-primary mb-2">Client Messages</h1>
                <p className="text-gray-500">View and manage client inquiries</p>
            </div>

            {error && (
                <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl mb-6 text-sm font-medium">
                    {error}
                </div>
            )}

            {/* Messages Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {messages.length === 0 ? (
                    <div className="col-span-full text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                        <MessageSquare size={48} className="mx-auto text-gray-300 mb-3" />
                        <p className="text-gray-500 font-medium">No messages found</p>
                    </div>
                ) : (
                    messages.map((msg) => (
                        <div
                            key={msg._id || msg.id}
                            className={`
                                bg-white p-6 rounded-2xl border transition-all duration-300 cursor-pointer hover:shadow-lg group relative overflow-hidden
                                ${!msg.isRead ? 'border-accent/50 shadow-md shadow-accent/5' : 'border-gray-100 shadow-sm'}
                            `}
                            onClick={() => setSelectedMessage(msg)}
                        >
                            {!msg.isRead && (
                                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                                    <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 bg-accent text-primary text-[10px] font-bold py-1 w-24 text-center">
                                        NEW
                                    </div>
                                </div>
                            )}

                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold ${!msg.isRead ? 'bg-accent text-primary' : 'bg-gray-100 text-gray-500'}`}>
                                        {msg.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 leading-tight">{msg.name}</h3>
                                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                                            <Clock size={10} />
                                            {msg.createdAt ? new Date(msg.createdAt).toLocaleDateString() : 'N/A'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Mail size={14} className="text-gray-400" />
                                    <span className="truncate">{msg.email}</span>
                                </div>
                                {msg.company && (
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Building size={14} className="text-gray-400" />
                                        <span className="truncate">{msg.company}</span>
                                    </div>
                                )}
                            </div>

                            <div className="bg-gray-50 rounded-xl p-3 mb-4">
                                <p className="text-sm text-gray-600 line-clamp-3 italic">
                                    "{msg.message}"
                                </p>
                            </div>

                            <div className="flex justify-end pt-2 border-t border-gray-50">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete(msg._id || msg.id);
                                    }}
                                    className="text-xs font-medium text-gray-400 hover:text-red-600 flex items-center gap-1 transition-colors px-2 py-1 rounded hover:bg-red-50"
                                >
                                    <Trash2 size={12} /> Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Message Detail Modal */}
            {selectedMessage && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200"
                    onClick={() => setSelectedMessage(null)}
                >
                    <div
                        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-8">
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold font-display text-primary">Message Details</h2>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Received on {selectedMessage.createdAt ? new Date(selectedMessage.createdAt).toLocaleString() : 'N/A'}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedMessage(null)}
                                    className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Contact Info</label>
                                    <div className="space-y-3 mt-3">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500">
                                                <User size={14} />
                                            </div>
                                            <span className="font-medium text-gray-900">{selectedMessage.name}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500">
                                                <Mail size={14} />
                                            </div>
                                            <span className="text-gray-700">{selectedMessage.email}</span>
                                        </div>
                                        {selectedMessage.phone && (
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500">
                                                    <Phone size={14} />
                                                </div>
                                                <span className="text-gray-700">{selectedMessage.phone}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Company Info</label>
                                    <div className="space-y-3 mt-3">
                                        {selectedMessage.company ? (
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500">
                                                    <Building size={14} />
                                                </div>
                                                <span className="font-medium text-gray-900">{selectedMessage.company}</span>
                                            </div>
                                        ) : (
                                            <span className="text-gray-400 italic text-sm">No company information provided</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 block">Message Content</label>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-gray-700 leading-relaxed whitespace-pre-wrap">
                                    {selectedMessage.message}
                                </div>
                            </div>

                            <div className="flex justify-end pt-6 border-t border-gray-100">
                                <button
                                    onClick={() => handleDelete(selectedMessage._id || selectedMessage.id)}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 font-medium transition-colors"
                                >
                                    <Trash2 size={18} />
                                    Delete Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Missing import fix
import { User } from 'lucide-react';

export default ClientMessages;
