import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Layers,
    Database,
    TrendingUp,
    Users,
    Package,
    DollarSign,
    CheckCircle2,
    ArrowRight,
    BarChart3,
    ShoppingCart,
    Warehouse,
    FileText,
    Settings,
    Globe
} from 'lucide-react';

const features = [
    {
        icon: Database,
        title: 'Centralized Data Management',
        description: 'Unified database for all business operations, eliminating data silos and ensuring consistency.'
    },
    {
        icon: TrendingUp,
        title: 'Real-Time Analytics',
        description: 'Live dashboards and reports for instant insights into business performance and trends.'
    },
    {
        icon: Users,
        title: 'HR & Payroll Integration',
        description: 'Complete employee lifecycle management with integrated payroll, attendance, and performance tracking.'
    },
    {
        icon: Package,
        title: 'Inventory Management',
        description: 'Track stock levels, manage warehouses, and automate reordering with intelligent forecasting.'
    },
    {
        icon: DollarSign,
        title: 'Financial Management',
        description: 'Comprehensive accounting, budgeting, and financial reporting with multi-currency support.'
    },
    {
        icon: ShoppingCart,
        title: 'Sales & CRM',
        description: 'Manage customer relationships, sales pipelines, and order processing from one platform.'
    }
];

const modules = [
    {
        icon: FileText,
        title: 'Finance & Accounting',
        features: ['General Ledger', 'Accounts Payable/Receivable', 'Asset Management', 'Budgeting & Forecasting', 'Multi-Currency Support']
    },
    {
        icon: Users,
        title: 'Human Resources',
        features: ['Employee Database', 'Payroll Processing', 'Attendance & Leave', 'Performance Management', 'Recruitment']
    },
    {
        icon: Warehouse,
        title: 'Supply Chain',
        features: ['Inventory Control', 'Purchase Management', 'Warehouse Management', 'Supplier Management', 'Demand Planning']
    },
    {
        icon: ShoppingCart,
        title: 'Sales & Distribution',
        features: ['Order Management', 'Customer Portal', 'Pricing & Discounts', 'Delivery Tracking', 'Sales Analytics']
    },
    {
        icon: Package,
        title: 'Manufacturing',
        features: ['Production Planning', 'Bill of Materials', 'Quality Control', 'Work Orders', 'Capacity Planning']
    },
    {
        icon: BarChart3,
        title: 'Business Intelligence',
        features: ['Custom Dashboards', 'KPI Tracking', 'Predictive Analytics', 'Report Builder', 'Data Visualization']
    }
];

const benefits = [
    {
        title: 'Increased Efficiency',
        description: 'Automate repetitive tasks and streamline workflows across departments.',
        impact: '50% faster processing'
    },
    {
        title: 'Better Decision Making',
        description: 'Access real-time data and analytics for informed strategic decisions.',
        impact: 'Real-time insights'
    },
    {
        title: 'Cost Reduction',
        description: 'Eliminate redundant systems and reduce operational costs.',
        impact: '30% cost savings'
    },
    {
        title: 'Scalability',
        description: 'Grow your business without worrying about system limitations.',
        impact: 'Unlimited growth'
    }
];

const industries = [
    'Manufacturing',
    'Retail & E-commerce',
    'Healthcare',
    'Education',
    'Construction',
    'Logistics',
    'Hospitality',
    'Professional Services'
];

const ERPSolutions = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="page-section bg-gradient-to-br from-[#fdf7ed] via-white to-[#fff2dd] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

                <div className="container-grid relative z-10">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            ERP Solutions
                        </p>
                        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
                            Unified Business Management Platform
                        </h1>
                        <p className="text-xl text-black/70 mb-8 leading-relaxed">
                            Transform your business operations with our comprehensive ERP solution.
                            Integrate all departments, automate processes, and gain real-time visibility into your entire organization.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                                >
                                    Schedule Demo
                                    <ArrowRight size={20} />
                                </Link>
                            </Motion.div>
                            <Motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href="#modules"
                                    className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold border-2 border-primary/20 hover:border-primary/40 transition"
                                >
                                    Explore Modules
                                </a>
                            </Motion.div>
                        </div>
                    </Motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            Core Capabilities
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                            Complete Business Integration
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <Motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group p-6 rounded-3xl bg-gradient-to-br from-[#fdf7ed] to-white border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="font-display text-lg font-semibold text-primary mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-black/70 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </Motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Modules Section */}
            <section id="modules" className="page-section bg-gradient-to-b from-[#fffaf0] to-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            ERP Modules
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                            Comprehensive Business Modules
                        </h2>
                        <p className="text-lg text-black/70 max-w-2xl mx-auto">
                            Modular architecture that adapts to your business needs with seamless integration.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {modules.map((module, index) => {
                            const Icon = module.icon;
                            return (
                                <Motion.div
                                    key={module.title}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-3xl p-6 border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-4">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="font-display text-xl font-semibold text-primary mb-4">
                                        {module.title}
                                    </h3>
                                    <div className="space-y-2">
                                        {module.features.map((feature) => (
                                            <div key={feature} className="flex items-start gap-2">
                                                <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-black/70">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            Business Impact
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                            Transform Your Operations
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <Motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-gradient-to-br from-[#fdf7ed] to-white rounded-3xl p-8 border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="font-display text-2xl font-semibold text-primary">
                                        {benefit.title}
                                    </h3>
                                    <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
                                        {benefit.impact}
                                    </span>
                                </div>
                                <p className="text-black/70 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="page-section bg-gradient-to-b from-[#fffaf0] to-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            Industry Solutions
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                            Tailored for Your Industry
                        </h2>
                        <p className="text-lg text-black/70 max-w-2xl mx-auto">
                            Industry-specific configurations and best practices built into our ERP solution.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {industries.map((industry, index) => (
                            <Motion.div
                                key={industry}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white rounded-2xl p-6 border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
                            >
                                <Globe className="mx-auto mb-3 text-primary" size={32} />
                                <h3 className="font-display text-sm font-semibold text-primary">
                                    {industry}
                                </h3>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Process */}
            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            Implementation
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                            Seamless ERP Deployment
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-5 gap-4">
                        {[
                            { step: '01', title: 'Discovery', desc: 'Analyze current processes' },
                            { step: '02', title: 'Design', desc: 'Configure system modules' },
                            { step: '03', title: 'Development', desc: 'Customize & integrate' },
                            { step: '04', title: 'Training', desc: 'User onboarding' },
                            { step: '05', title: 'Go-Live', desc: 'Deploy & support' }
                        ].map((phase, index) => (
                            <Motion.div
                                key={phase.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative text-center"
                            >
                                {index < 4 && (
                                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -z-10"></div>
                                )}
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-display font-bold text-xl mb-3">
                                    {phase.step}
                                </div>
                                <h3 className="font-display text-lg font-semibold text-primary mb-1">
                                    {phase.title}
                                </h3>
                                <p className="text-sm text-black/70">
                                    {phase.desc}
                                </p>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="page-section bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
                </div>

                <div className="container-grid relative z-10 text-center">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Discover how our ERP solution can streamline operations, reduce costs, and drive growth.
                        </p>
                        <Motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                            >
                                Request Consultation
                                <ArrowRight size={20} />
                            </Link>
                        </Motion.div>
                    </Motion.div>
                </div>
            </section>
        </>
    );
};

export default ERPSolutions;
