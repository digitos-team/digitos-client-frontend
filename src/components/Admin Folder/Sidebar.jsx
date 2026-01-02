import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Admin Folder/redux/authSlice';
import {
    LayoutDashboard,
    Briefcase,
    MessageSquare,
    LogOut,
    X,
    Lock
} from 'lucide-react';
import digitoslogo from '../../assets/RGB-Dark.png'; // Assuming this exists based on Navbar
import ChangePasswordModal from './ChangePasswordModal';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/digitos/admin');
    };

    const navItems = [
        { path: '/admin/applications', label: 'Applications', icon: LayoutDashboard },

        { path: '/admin/messages', label: 'Messages', icon: MessageSquare },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed top-0 left-0 h-full bg-white border-r border-gray-200 w-64 transform transition-transform duration-300 ease-in-out z-30
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        {/* Using text for now if logo path is tricky, but trying to match style */}
                        {/* <h2 className="text-2xl font-bold font-display tracking-tight">
                            DIGITOS<span className="text-accent">.</span>
                        </h2> */}
                        <img src={digitoslogo} alt="Digitos Logo" className="w-auto h-12" />
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="lg:hidden text-gray-500 hover:text-primary transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav className="mt-8 px-4 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`
                                    flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium
                                    ${isActive
                                        ? 'bg-accent text-primary shadow-md shadow-accent/20 font-bold'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                                    }
                                `}
                            >
                                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-100 bg-gray-50/50 space-y-2">
                    <button
                        onClick={() => setIsPasswordModalOpen(true)}
                        className="flex items-center gap-3 px-4 py-3 w-full text-gray-600 hover:bg-gray-100 hover:text-primary rounded-xl transition-all duration-200 group"
                    >
                        <Lock size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Change Password</span>
                    </button>

                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200 group"
                    >
                        <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </div>

            <ChangePasswordModal
                isOpen={isPasswordModalOpen}
                onClose={() => setIsPasswordModalOpen(false)}
            />
        </>
    );
};

export default Sidebar;
