import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, DollarSign, PieChart, Lock, TrendingUp, FileCheck, Globe } from "lucide-react";

const FinancialServices = () => {
    const features = [
        {
            icon: <DollarSign className="w-6 h-6" />,
            title: "Digital Banking",
            description: "Modern banking solutions with mobile-first experiences and real-time transactions."
        },
        {
            icon: <PieChart className="w-6 h-6" />,
            title: "Wealth Management",
            description: "Comprehensive portfolio management and investment tracking platforms."
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Security & Compliance",
            description: "Bank-grade security with PCI DSS, SOC 2, and regulatory compliance built-in."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Financial Analytics",
            description: "Advanced analytics and reporting for data-driven financial decisions."
        },
        {
            icon: <FileCheck className="w-6 h-6" />,
            title: "Automated Compliance",
            description: "Streamlined KYC, AML, and regulatory reporting automation."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Multi-Currency Support",
            description: "Global payment processing with real-time currency conversion."
        }
    ];

    const benefits = [
        "Reduce operational costs by 40%",
        "Ensure 99.99% uptime and reliability",
        "Meet all regulatory requirements",
        "Process millions of transactions daily",
        "Real-time fraud detection and prevention",
        "Seamless third-party integrations"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-60"></div>

                <div className="container-grid relative z-10">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/industries"
                            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
                            <span className="font-medium">Back to Industries</span>
                        </Link>

                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-6xl">💳</span>
                            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary">
                                Financial Services Platform
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
                            Power the future of finance with our secure, scalable fintech solutions.
                            From digital banking to wealth management, we build trust through technology.
                        </p>
                    </Motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white">
                <div className="container-grid">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            Key Features
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
                            Enterprise-grade financial technology
                        </h2>
                    </Motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300 bg-white"
                            >
                                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="font-display text-xl font-semibold text-primary mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
                <div className="container-grid">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            Benefits
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
                            Trusted Financial Infrastructure
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <Motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                    <p className="text-lg text-white/90">{benefit}</p>
                                </Motion.div>
                            ))}
                        </div>
                    </Motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container-grid text-center">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                            Ready to innovate in finance?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Let's build secure, compliant financial solutions that your customers will trust.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block rounded-full bg-accent px-10 py-4 text-lg font-semibold text-primary hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
                        >
                            Partner With Us
                        </Link>
                    </Motion.div>
                </div>
            </section>
        </div>
    );
};

export default FinancialServices;
