import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    LineChart,
    Calculator,
    FileText,
    Shield,
    Clock,
    Users,
    CheckCircle2,
    ArrowRight,
    DollarSign,
    TrendingUp,
    Calendar,
    Bell
} from 'lucide-react';

const features = [
    {
        icon: Calculator,
        title: 'Automated Payroll Processing',
        description: 'Streamline salary calculations with automated tax deductions, allowances, and compliance checks.'
    },
    {
        icon: FileText,
        title: 'Digital Payslips',
        description: 'Generate and distribute secure, customizable payslips to employees via email or portal.'
    },
    {
        icon: Shield,
        title: 'Tax Compliance',
        description: 'Stay compliant with automatic tax calculations, statutory deductions, and regulatory updates.'
    },
    {
        icon: Clock,
        title: 'Time & Attendance',
        description: 'Integrated attendance tracking with leave management and overtime calculations.'
    },
    {
        icon: Users,
        title: 'Employee Self-Service',
        description: 'Empower employees with self-service portals for payslips, tax forms, and salary history.'
    },
    {
        icon: TrendingUp,
        title: 'Analytics & Reporting',
        description: 'Comprehensive reports on payroll costs, trends, and workforce analytics for better decisions.'
    }
];

const modules = [
    {
        title: 'Salary Management',
        description: 'Configure salary structures, components, and pay scales',
        features: ['Basic Pay', 'Allowances', 'Deductions', 'Bonuses & Incentives', 'Arrears Processing']
    },
    {
        title: 'Statutory Compliance',
        description: 'Automated compliance with tax and labor regulations',
        features: ['Income Tax', 'Provident Fund', 'Professional Tax', 'ESI & Gratuity', 'Form 16 Generation']
    },
    {
        title: 'Leave & Attendance',
        description: 'Comprehensive leave and attendance management',
        features: ['Leave Policies', 'Attendance Tracking', 'Overtime Calculation', 'Shift Management', 'Holiday Calendar']
    },
    {
        title: 'Reimbursements',
        description: 'Streamlined expense and reimbursement processing',
        features: ['Expense Claims', 'Travel Allowance', 'Medical Reimbursement', 'Approval Workflows', 'Receipt Management']
    }
];

const benefits = [
    {
        icon: DollarSign,
        title: 'Cost Savings',
        value: '40%',
        description: 'Reduction in payroll processing time and administrative costs'
    },
    {
        icon: CheckCircle2,
        title: 'Accuracy',
        value: '99.9%',
        description: 'Error-free calculations with automated validation checks'
    },
    {
        icon: Clock,
        title: 'Time Efficiency',
        value: '10x',
        description: 'Faster payroll processing compared to manual methods'
    },
    {
        icon: Shield,
        title: 'Compliance',
        value: '100%',
        description: 'Full compliance with statutory regulations and updates'
    }
];

const PayrollManagement = () => {
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
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent mb-2 sm:mb-4">
                            Payroll Management System
                        </p>
                        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-primary mb-3 sm:mb-4 md:mb-6">
                            Simplify Payroll, Empower Your Team
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/70 mb-5 sm:mb-6 md:mb-8 leading-relaxed">
                            Automate your entire payroll process with our comprehensive solution.
                            From salary calculations to tax compliance, we handle it all so you can focus on growing your business.
                        </p>
                        <div className="flex flex-wrap gap-3 sm:gap-4">
                            <Motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-primary text-white px-5 sm:px-8 py-2.5 sm:py-4 text-sm sm:text-base rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                                >
                                    Request Demo
                                    <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                                </Link>
                            </Motion.div>
                            <Motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href="#features"
                                    className="inline-flex items-center gap-2 bg-white text-primary px-5 sm:px-8 py-2.5 sm:py-4 text-sm sm:text-base rounded-full font-semibold border-2 border-primary/20 hover:border-primary/40 transition"
                                >
                                    Explore Features
                                </a>
                            </Motion.div>
                        </div>
                    </Motion.div>
                </div>
            </section>

            {/* Benefits Stats */}
            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <Motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#fdf7ed] to-white border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="inline-flex p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-primary/10 text-primary mb-3 sm:mb-4">
                                        <Icon size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
                                    </div>
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary mb-1 sm:mb-2">
                                        {benefit.value}
                                    </div>
                                    <h3 className="font-display text-xs sm:text-sm md:text-lg font-semibold text-primary mb-1 sm:mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-[10px] sm:text-xs md:text-sm text-black/70">
                                        {benefit.description}
                                    </p>
                                </Motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="page-section bg-gradient-to-b from-[#fffaf0] to-white">
                <div className="container-grid">
                    <div className="text-center mb-6 sm:mb-8 md:mb-12">
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent mb-2 sm:mb-4">
                            Core Features
                        </p>
                        <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                            Everything You Need for Payroll
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <Motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-white border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="inline-flex p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-primary/10 text-primary mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <Icon size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                                    </div>
                                    <h3 className="font-display text-base sm:text-lg font-semibold text-primary mb-1 sm:mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </Motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Modules Section */}
            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="text-center mb-6 sm:mb-8 md:mb-12">
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent mb-2 sm:mb-4">
                            System Modules
                        </p>
                        <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 sm:mb-4">
                            Comprehensive Payroll Modules
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-black/70 max-w-2xl mx-auto">
                            Integrated modules that work together seamlessly for complete payroll management.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                        {modules.map((module, index) => (
                            <Motion.div
                                key={module.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-gradient-to-br from-[#fdf7ed] to-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-2 sm:mb-3">
                                    {module.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-black/70 mb-4 sm:mb-6 leading-relaxed">
                                    {module.description}
                                </p>
                                <div className="space-y-1.5 sm:space-y-2">
                                    {module.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <CheckCircle2 size={16} className="text-accent flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                                            <span className="text-xs sm:text-sm text-black/80">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="page-section bg-gradient-to-b from-[#fffaf0] to-white">
                <div className="container-grid">
                    <div className="text-center mb-6 sm:mb-8 md:mb-12">
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent mb-2 sm:mb-4">
                            Simple Process
                        </p>
                        <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 sm:mb-4">
                            How It Works
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            {
                                step: '01',
                                icon: Users,
                                title: 'Employee Setup',
                                description: 'Add employees with salary details, bank accounts, and tax information'
                            },
                            {
                                step: '02',
                                icon: Calendar,
                                title: 'Attendance Sync',
                                description: 'Automatically sync attendance, leaves, and overtime data'
                            },
                            {
                                step: '03',
                                icon: Calculator,
                                title: 'Process Payroll',
                                description: 'One-click payroll processing with automated calculations'
                            },
                            {
                                step: '04',
                                icon: Bell,
                                title: 'Distribute Payslips',
                                description: 'Send digital payslips and process bank transfers instantly'
                            }
                        ].map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <Motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative text-center"
                                >
                                    {index < 3 && (
                                        <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -z-10"></div>
                                    )}
                                    <div className="inline-flex p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-primary/10 text-primary mb-3 sm:mb-4">
                                        <Icon size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
                                    </div>
                                    <div className="text-xs sm:text-sm font-semibold text-accent mb-1 sm:mb-2">
                                        Step {step.step}
                                    </div>
                                    <h3 className="font-display text-sm sm:text-base md:text-lg font-semibold text-primary mb-1 sm:mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-[10px] sm:text-xs md:text-sm text-black/70">
                                        {step.description}
                                    </p>
                                </Motion.div>
                            );
                        })}
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
                        <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6">
                            Ready to Automate Your Payroll?
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
                            Join hundreds of businesses that trust our payroll management system for accurate, compliant, and timely payroll processing.
                        </p>
                        <Motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                            >
                                Get Started Today
                                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                            </Link>
                        </Motion.div>
                    </Motion.div>
                </div>
            </section>
        </>
    );
};

export default PayrollManagement;
