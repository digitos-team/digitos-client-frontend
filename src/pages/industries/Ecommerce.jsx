import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ShoppingCart, CreditCard, Package, TrendingUp, Shield, Zap } from "lucide-react";

const Ecommerce = () => {
    const features = [
        {
            icon: <ShoppingCart className="w-6 h-6" />,
            title: "Product Management",
            description: "Comprehensive catalog management with variants, pricing, and inventory tracking."
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "Payment Gateway",
            description: "Secure multi-currency payment processing with all major payment methods."
        },
        {
            icon: <Package className="w-6 h-6" />,
            title: "Order Fulfillment",
            description: "Automated order processing, shipping integration, and tracking systems."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Sales Analytics",
            description: "Real-time insights into sales performance, customer behavior, and trends."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Fraud Protection",
            description: "Advanced security measures and fraud detection to protect your business."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Fast Performance",
            description: "Lightning-fast page loads and optimized checkout for maximum conversions."
        }
    ];

    const benefits = [
        "Increase conversion rates by up to 35%",
        "Reduce cart abandonment significantly",
        "Scale to handle millions of transactions",
        "Integrate with existing business systems",
        "Mobile-first responsive design",
        "SEO-optimized for better visibility"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50 opacity-60"></div>

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
                            <span className="text-6xl">🛒</span>
                            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary">
                                E-commerce Platform
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
                            Build your online empire with our scalable e-commerce solution. From startup to enterprise,
                            we power seamless shopping experiences that drive growth.
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
                            Everything you need to sell online
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
                            Grow Your Online Business
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
                            Ready to launch your store?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Let's build an e-commerce platform that converts visitors into loyal customers.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block rounded-full bg-accent px-10 py-4 text-lg font-semibold text-primary hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
                        >
                            Start Selling Today
                        </Link>
                    </Motion.div>
                </div>
            </section>
        </div>
    );
};

export default Ecommerce;
