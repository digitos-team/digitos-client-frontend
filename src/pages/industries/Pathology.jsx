import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
    FileBarChart,
    Receipt,
    Wallet,
    Users,
    Stethoscope,
    CheckCircle2,
    ArrowRight,
    Zap,
    Shield,
    Clock,
    Layout,
    BarChart3 // Added for dashboard icon if needed, though using existing ones
} from 'lucide-react';

import PathDashboard from '../../assets/Path Dashboard.png';
import ReceptionistDashboard from '../../assets/Receptionist dashboard.png';
import PathPatient from '../../assets/Path Patient.png';

/* ---------- Feature Data ---------- */
const modules = [
    {
        title: 'Report Generation',
        icon: FileBarChart,
        features: [
            'Manual Test Result Entry',
            'PDF Report Upload',
            'Auto-Generated Templates',
            'Instant Printing',
            'Download & Share (WhatsApp/Email)',
            'Search & Filter Reports'
        ]
    },
    {
        title: 'Billing & Invoicing',
        icon: Receipt,
        features: [
            'Digital Bill Generation',
            'Multiple Tests in One Bill',
            'Auto Tax & Total Calculations',
            'Flat & Percentage Discounts',
            'Daily Billing Summary',
            'Export to Excel/PDF'
        ]
    },
    {
        title: 'Expense Management',
        icon: Wallet,
        features: [
            'Daily/Monthly Expense Entry',
            'Category-wise Tracking',
            'Auto-Commission Entry',
            'Advanced Expense Filters',
            'Profit & Loss Analysis',
            'Yearly Financial Summaries'
        ]
    },
    {
        title: 'Patient Records',
        icon: Users,
        features: [
            'Admin-Managed Patient Profiles',
            'Complete Test History',
            '1-Year Record Access',
            'Quick Search (Mobile/Name)',
            'Reprint Facility',
            'Address & Contact Management'
        ]
    },
    {
        title: 'Doctor Management',
        icon: Stethoscope,
        features: [
            'Manage Doctor Profiles',
            'Set Commission Percentages',
            'Auto-Calculate Referral Fees',
            'Commission-Expense Linking',
            'Monthly Settlement Reports',
            'Export Statements'
        ]
    }
];

const benefits = [
    {
        icon: Zap,
        title: 'Faster Reporting',
        description: 'Reduce report generation time with automated templates'
    },
    {
        icon: Shield,
        title: 'Secure Data',
        description: 'Enterprise-grade security for all patient records and test data'
    },
    {
        icon: Clock,
        title: 'Save Admin Time',
        description: 'Daily time saved in administrative and tracking tasks'
    },
    {
        icon: CheckCircle2,
        title: 'Better Compliance',
        description: 'Maintain perfect records and financial audit trails'
    }
];

const userRoles = [
    {
        role: 'Admin',
        icon: Shield,
        description: 'Full control over lab configuration, staff, finances, and settings.',
        features: ['Financial Reports', 'Staff Management', 'Doctor Commission Configuration', 'System Settings']
    },
    {
        role: 'Receptionist',
        icon: Layout,
        description: 'Streamlined interface for daily operations and patient handling.',
        features: ['Patient Registration', 'Bill Generation', 'Test Result Entry', 'Report Printing']
    }
];

/* ---------- Main Component ---------- */
const Pathology = () => {
    const [activeDashboard, setActiveDashboard] = useState('admin');

    const dashboards = [
        {
            id: 'admin',
            title: 'Admin Dashboard',
            description: 'Complete control over lab configuration, staff, finances, and settings.',
            image: PathDashboard,
            icon: Shield
        },
        {
            id: 'receptionist',
            title: 'Receptionist Dashboard',
            description: 'Streamlined interface for daily operations, patient registration, and billing.',
            image: ReceptionistDashboard,
            icon: Layout
        },
        {
            id: 'patient',
            title: 'Patient Records',
            description: 'Secure access for patients to view test history and download reports.',
            image: PathPatient,
            icon: Users
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="page-section bg-gradient-to-br from-slate-50 via-white to-yellow-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>

                <div className="container-grid relative z-10 text-center">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 px-4 py-2 rounded-full font-semibold mb-6 border border-yellow-500/40"
                        >
                            <FileBarChart size={20} />
                            <span>Our Product</span>
                        </Motion.div>

                        <h1 className="font-display text-4xl md:text-6xl font-bold text-black mb-6">
                            Pathology Management System
                        </h1>
                        <p className="text-2xl md:text-3xl text-slate-700 mb-6 font-semibold">
                            Digitize Your Lab Operations
                        </p>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                            A comprehensive solution designed solely for Admins and Receptionists to streamline
                            pathology lab operations—from report generation to billing and commission management.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:bg-yellow-400 transition"
                            >
                                Request Demo
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </Motion.div>
                </div>
            </section>

            {/* Dashboard Showcase Section */}
            <section className="page-section bg-gradient-to-b from-white via-slate-50 to-yellow-50">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600 mb-4">
                            Dashboard Previews
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
                            Powerful Dashboards for Every Role
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Experience intuitive, role-specific dashboards designed for seamless lab management
                        </p>
                    </div>

                    {/* Dashboard Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {dashboards.map((dashboard) => {
                            const Icon = dashboard.icon;
                            return (
                                <Motion.button
                                    key={dashboard.id}
                                    onClick={() => setActiveDashboard(dashboard.id)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeDashboard === dashboard.id
                                        ? 'bg-yellow-500 text-black shadow-lg'
                                        : 'bg-white text-yellow-600 border-2 border-yellow-500/40 hover:border-yellow-400'
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span>{dashboard.title}</span>
                                </Motion.button>
                            );
                        })}
                    </div>

                    {/* Dashboard Display */}
                    {dashboards.map((dashboard) => (
                        <Motion.div
                            key={dashboard.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: activeDashboard === dashboard.id ? 1 : 0,
                                y: activeDashboard === dashboard.id ? 0 : 20,
                                display: activeDashboard === dashboard.id ? 'block' : 'none'
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-yellow-500/30">
                                <div className="mb-6 text-center">
                                    <h3 className="font-display text-2xl md:text-3xl font-bold text-black mb-3">
                                        {dashboard.title}
                                    </h3>
                                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                        {dashboard.description}
                                    </p>
                                </div>

                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-500/30 bg-white">
                                    <Motion.img
                                        src={dashboard.image}
                                        alt={`${dashboard.title} Screenshot`}
                                        className="w-full h-auto"
                                        initial={{ scale: 1.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </section>

            {/* Modules Grid */}
            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600 mb-4">
                            Key Features
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-black">
                            Comprehensive Modules
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {modules.map((module, index) => {
                            const Icon = module.icon;
                            return (
                                <Motion.div
                                    key={module.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="inline-flex p-4 rounded-2xl bg-white text-yellow-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-black mb-4">
                                        {module.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {module.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                                <CheckCircle2 size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Roles Section */}
            <section className="page-section bg-gradient-to-br from-white to-yellow-50/50">
                <div className="container-grid">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
                            Role-Based Access Control
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Dedicated interfaces for your staff to ensure security and efficiency.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {userRoles.map((role, index) => {
                            const Icon = role.icon;
                            return (
                                <Motion.div
                                    key={role.role}
                                    initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white rounded-3xl p-8 shadow-lg border border-yellow-100"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-600">
                                            <Icon size={28} />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-2xl font-bold text-black">
                                                {role.role}
                                            </h3>
                                            <p className="text-sm text-slate-500">Access Level</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 mb-6">
                                        {role.description}
                                    </p>
                                    <div className="space-y-2">
                                        {role.features.map((item) => (
                                            <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </Motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Stats */}
            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <Motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center p-6 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-yellow-200 transition-all duration-300"
                                >
                                    <div className="inline-flex p-4 rounded-2xl bg-yellow-500/10 text-yellow-600 mb-4">
                                        <Icon size={32} />
                                    </div>

                                    <h3 className="font-display text-lg font-semibold text-black mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-slate-600">
                                        {benefit.description}
                                    </p>
                                </Motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="page-section bg-black text-white text-center">
                <div className="container-grid">
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white">
                        Transform Your Lab Today
                    </h2>
                    <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                        Get a centralized system for all your pathology needs. No complex setups, just efficiency.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-yellow-500 text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-colors duration-300"
                    >
                        Get Started
                        <ArrowRight size={22} />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Pathology;
