import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginStart, loginSuccess, loginFailure } from './redux/authSlice';
import { authAPI } from './api/api';
// 1. Import Eye and EyeOff icons
import { Mail, Lock, ArrowRight, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import digitoslogo from '../../assets/RGB-Dark.png';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // 2. Add state to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/admin/applications');
        }
    }, [isAuthenticated, navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Attempting login with:', { email: formData.email });
        dispatch(loginStart());

        try {
            const response = await authAPI.login(formData);
            console.log('Login successful, response:', response);
            dispatch(loginSuccess(response));
            navigate('/admin/applications');
        } catch (err) {
            console.error('Login error - Full error object:', err);
            const errorMessage = err.response?.data?.message ||
                err.response?.data?.error ||
                err.message ||
                'Login failed';

            console.error('Final error message:', errorMessage);
            dispatch(loginFailure(errorMessage));
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-3xl animate-pulse"></div>
                <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gray-50 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-gray-50/50 to-transparent"></div>
            </div>

            <div className="card max-w-md w-full relative z-10 bg-white/90 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <div className="text-center mb-10">
                    <div className="flex justify-center mb-6">
                        <img src={digitoslogo} alt="Digitos Logo" className="h-14 w-auto object-contain" />
                    </div>
                    <h1 className="text-2xl font-bold font-display text-primary mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-gray-500 text-sm">Enter your credentials to access the admin panel</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Mail size={18} className="text-gray-400 group-focus-within:text-accent transition-colors" />
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all bg-gray-50/50 focus:bg-white text-gray-900 placeholder-gray-400 font-medium text-sm"
                                placeholder="admin@digitos.com"
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Lock size={18} className="text-gray-400 group-focus-within:text-accent transition-colors" />
                            </div>
                            <input
                                // 3. Dynamic type based on state
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                // 4. Increased padding-right (pr-12) to make room for the eye icon
                                className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all bg-gray-50/50 focus:bg-white text-gray-900 placeholder-gray-400 font-medium text-sm"
                                placeholder="••••••••"
                            />
                            {/* 5. Toggle Button */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer outline-none"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2 animate-in slide-in-from-top-2">
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white hover:bg-black/90 font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2 group"
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Authenticating...
                            </>
                        ) : (
                            <>
                                Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
                        <ShieldCheck size={14} className="text-accent" />
                        <span>Secure Admin Portal • Authorized Access Only</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;