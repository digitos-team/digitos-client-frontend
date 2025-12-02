import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Calculator,
  FileText,
  Shield,
  Clock,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  Calendar,
  Bell,
  BarChart3,
  Download,
  Lock,
  Zap,
  Building
} from 'lucide-react';

import AdminDashboard from '../../assets/Admin-Dashboard.png';
import HRDashboard from '../../assets/HR-Dashboard.jpg';
import CADashboard from '../../assets/CA-Dashboard.png';

const features = [
  {
    icon: Calculator,
    title: 'Automated Salary Processing',
    description: 'Calculate salaries, deductions, and allowances automatically with zero errors.'
  },
  {
    icon: FileText,
    title: 'Digital Payslips',
    description: 'Generate and distribute secure payslips to employees instantly via email or portal.'
  },
  {
    icon: Shield,
    title: 'Tax Calculations',
    description: 'Automatic tax calculations and TDS computations with real-time accuracy.'
  },
  {
    icon: DollarSign,
    title: 'Revenue Management',
    description: 'Track and manage company revenue streams with detailed financial insights.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Reports',
    description: 'Generate comprehensive payroll reports, analytics, and insights for better decisions.'
  },
  {
    icon: TrendingUp,
    title: 'Profit Analytics',
    description: 'Monitor profit margins and financial performance with real-time dashboards.'
  }
];

const userRoles = [
  {
    role: 'Company Admin',
    icon: Building,
    features: ['Manage Employees', 'Order Management', 'Revenue Management', 'Expense Management', 'Profit Management']
  },
  {
    role: 'HR Professionals',
    icon: Users,
    features: ['Salary Generation', 'Manage Leaves & Holidays', 'Approval Management', 'Manage Attendance', 'Add/Remove Employees']
  },
  {
    role: 'Chartered Accountants',
    icon: Calculator,
    features: ['View All Expenses', 'View Revenue', 'View Tax Reports', 'View Profit & Loss', 'Financial Analysis']
  },
  {
    role: 'Employees',
    icon: FileText,
    features: ['View Payslips', 'Add Leave Requests', 'Mark Attendance', 'Coming Soon: More Features']
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Time Savings',
    value: '80%',
    description: 'Reduce payroll processing time with automation'
  },
  {
    icon: CheckCircle2,
    title: 'Accuracy',
    value: '99.9%',
    description: 'Error-free calculations with automated validation'
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    value: '50%',
    description: 'Lower operational costs and administrative overhead'
  },
  {
    icon: TrendingUp,
    title: 'Revenue Growth',
    value: '35%',
    description: 'Better financial insights drive revenue optimization'
  }
];

const modules = [
  {
    title: 'Salary Management',
    features: ['Salary Structures', 'Pay Components', 'Arrears Processing', 'Bonus Calculation', 'Increment Management']
  },
  {
    title: 'Statutory Compliance',
    features: ['Income Tax', 'PF & ESI', 'Professional Tax', 'Form 16 & 24Q', 'Gratuity Calculation']
  },
  {
    title: 'Leave & Attendance',
    features: ['Leave Policies', 'Attendance Tracking', 'Overtime Management', 'Shift Scheduling', 'Holiday Calendar']
  },
  {
    title: 'Reimbursements',
    features: ['Expense Claims', 'Travel Allowance', 'Medical Reimbursement', 'Approval Workflows', 'Receipt Upload']
  },
  {
    title: 'Reports & Analytics',
    features: ['Payroll Reports', 'Cost Analysis', 'Headcount Reports', 'Tax Reports', 'Custom Reports']
  },
  {
    title: 'Employee Self-Service',
    features: ['Payslip Download', 'Tax Forms', 'Leave Application', 'Attendance View', 'Profile Management']
  }
];

const PayrollManagementProduct = () => {
  const [activeDashboard, setActiveDashboard] = useState('admin');

  const dashboards = [
    {
      id: 'admin',
      title: 'Admin Dashboard',
      description: 'Complete control over payroll operations, employee management, and system configuration',
      image: AdminDashboard,
      icon: Building
    },
    {
      id: 'hr',
      title: 'HR Dashboard',
      description: 'Streamlined HR operations with employee management, leave tracking, and payroll processing',
      image: HRDashboard,
      icon: Users
    },
    {
      id: 'ca',
      title: 'CA Dashboard',
      description: 'Comprehensive tax calculations, statutory compliance, and financial reporting tools',
      image: CADashboard,
      icon: Calculator
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="page-section bg-gradient-to-br from-slate-50 via-white to-yellow-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>

        <div className="container-grid relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 px-4 py-2 rounded-full font-semibold mb-6 border border-yellow-500/40"
            >
              <Calculator size={20} />
              <span>Our Product</span>
            </Motion.div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-black mb-6">
              Payroll Management System
            </h1>
            <p className="text-2xl md:text-3xl text-slate-700 mb-4 font-semibold">
              Complete Payroll Automation for Modern Businesses
            </p>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Streamline your entire payroll process with our comprehensive solution designed for
              companies, HR professionals, CAs, and employees. Automate calculations, ensure compliance,
              and save time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:bg-yellow-400 transition"
                >
                  Request Demo
                  <ArrowRight size={20} />
                </Link>
              </Motion.div>
              <Motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 bg-transparent text-yellow-600 px-8 py-4 rounded-full font-semibold border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition"
                >
                  Explore Features
                </a>
              </Motion.div>
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
              Experience intuitive, role-specific dashboards designed for seamless payroll management
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
                  className="text-center p-6 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-yellow-500/30 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-yellow-500/10 text-yellow-600 mb-4">
                    <Icon size={32} />
                  </div>
                  <div className="text-4xl font-display font-bold text-yellow-500 mb-2">
                    {benefit.value}
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

      {/* Features Section */}
      <section id="features" className="page-section bg-gradient-to-b from-white via-slate-50 to-yellow-50">
        <div className="container-grid">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600 mb-4">
              Core Features
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black">
              Everything You Need for Payroll
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
                  className="group p-6 rounded-3xl bg-white border border-yellow-500/30 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="inline-flex p-3 rounded-2xl bg-yellow-500/10 text-yellow-600 mb-4 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Roles */}
      <section className="page-section bg-white">
        <div className="container-grid">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600 mb-4">
              Built For Everyone
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black">
              Designed for All Stakeholders
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userRoles.map((user, index) => {
              const Icon = user.icon;
              return (
                <Motion.div
                  key={user.role}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-6 border border-yellow-500/30 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="inline-flex p-3 rounded-2xl bg-yellow-500/10 text-yellow-600 mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-black mb-4">
                    {user.role}
                  </h3>
                  <div className="space-y-2">
                    {user.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-yellow-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="page-section bg-white">
        <div className="container-grid">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600 mb-4">
              Simple Process
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-black">
            {[
              { step: '01', icon: Users, title: 'Setup', desc: 'Configure company, employees & salary structures' },
              { step: '02', icon: Calendar, title: 'Attendance', desc: 'Sync attendance, leaves & overtime data' },
              { step: '03', icon: Calculator, title: 'Process', desc: 'One-click automated payroll processing' },
              { step: '04', icon: Download, title: 'Distribute', desc: 'Generate payslips & process payments' }
            ].map((phase, index) => {
              const Icon = phase.icon;
              return (
                <Motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-yellow-500/60 to-transparent -z-10"></div>
                  )}
                  <div className="inline-flex p-4 rounded-2xl bg-yellow-500/10 text-yellow-600 mb-3">
                    <Icon size={32} />
                  </div>
                  <div className="text-sm font-semibold text-yellow-600 mb-2">
                    Step {phase.step}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-black mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {phase.desc}
                  </p>
                </Motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section bg-gradient-to-br from-white to-slate-50 text-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-grid relative z-10 text-center">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-black">
              Ready to Automate Your Payroll?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that trust our payroll system for accurate, compliant, and timely processing.
            </p>
            <Motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:bg-yellow-400 transition"
              >
                Get Started Today
                <ArrowRight size={20} />
              </Link>
            </Motion.div>
          </Motion.div>
        </div>
      </section>
    </>
  );
};

export default PayrollManagementProduct;
