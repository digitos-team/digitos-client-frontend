import { motion as Motion } from 'framer-motion';
import {
    ShoppingBag,
    Globe,
    MessageSquare,
    ShieldCheck,
    LayoutDashboard,
    Users,
    CheckCircle2,
    ArrowRight,
    Languages,
    ArrowLeftRight
} from 'lucide-react';

const features = [
    {
        icon: ShieldCheck,
        title: 'Secure Admin Login',
        description: 'Robust authentication system allowing administrators to manage the platform securely.'
    },
    {
        icon: ShoppingBag,
        title: 'Product Management',
        description: 'Effortlessly add, update, and delete products to keep your inventory up to date.'
    },
    {
        icon: ArrowLeftRight,
        title: 'Bi-language Support',
        description: 'Switch between English and Marathi seamlessly for better accessibility.'
    },
    {
        icon: MessageSquare,
        title: 'Customer Support',
        description: 'Integrated module for users to submit queries and for admins to manage them efficiently.'
    },
    {
        icon: LayoutDashboard,
        title: 'Intuitive Dashboard',
        description: 'A simple and usable admin panel for effective product and customer management.'
    },
    {
        icon: Users,
        title: 'Customer Interaction',
        description: 'Streamlined tools to enhance engagement and manage customer relationships.'
    }
];

const benefits = [
    {
        icon: ShoppingBag,
        title: 'Efficient',
        value: '100%',
        description: 'Streamlined product management'
    },
    {
        icon: Globe,
        title: 'Accessible',
        value: '2',
        description: 'Languages supported'
    },
    {
        icon: MessageSquare,
        title: 'Responsive',
        value: '24/7',
        description: 'Customer query management'
    },
    {
        icon: ShieldCheck,
        title: 'Secure',
        value: 'Top',
        description: 'Admin data protection'
    }
];

const KuberProject = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="page-section bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden !pt-6 sm:!pt-10 md:!pt-16 !pb-4 sm:!pb-8">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

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
                            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
                        >
                            <ShoppingBag size={16} className="sm:w-5 sm:h-5" />
                            <span>Product & Customer Management</span>
                        </Motion.div>

                        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-primary mb-3 sm:mb-4 md:mb-6">
                            Kuber Project
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black/80 mb-2 sm:mb-3 md:mb-4 font-semibold">
                            Simplicity in Management
                        </p>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/70 mb-5 sm:mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
                            A web-based application designed to manage products and customer interactions efficiently,
                            focusing on simplicity, usability, and effective administration.
                        </p>
                    </Motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="page-section bg-white !pt-4 sm:!pt-8 !pb-0 md:!pb-4">
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
                                    className="text-center p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="inline-flex p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-accent/10 text-accent mb-3 sm:mb-4">
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

            {/* Features Section */}
            <section id="features" className="page-section bg-gray-50/50 !pt-8 md:!pt-12">
                <div className="container-grid">
                    <div className="text-center mb-6 sm:mb-8 md:mb-12">
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent mb-2 sm:mb-4">
                            Key Capabilities
                        </p>
                        <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                            Manage with Ease
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
                                    className="group p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-white border border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="inline-flex p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-accent/10 text-accent mb-3 sm:mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
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
        </>
    );
};

export default KuberProject;
