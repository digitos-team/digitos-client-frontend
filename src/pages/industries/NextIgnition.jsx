import { motion as Motion } from 'framer-motion';
import {
    Users,
    Rocket,
    TrendingUp,
    MessageCircle,
    Briefcase,
    Target,
    CheckCircle2,
    ArrowRight,
    Network,
    Lightbulb,
    DollarSign,
    Calendar,
    Award,
    Globe,
    Instagram,
    Linkedin,
    X
} from 'lucide-react';

const features = [
    {
        icon: Network,
        title: 'Startup Networking',
        description: 'Connect with fellow founders, entrepreneurs, and startup enthusiasts to build meaningful relationships.'
    },
    {
        icon: DollarSign,
        title: 'Investor Connections',
        description: 'Discover and connect with angel investors, VCs, and funding opportunities for your startup.'
    },
    {
        icon: Lightbulb,
        title: 'Idea Collaboration',
        description: 'Share ideas, get feedback, and collaborate with like-minded innovators on new ventures.'
    },
    {
        icon: Briefcase,
        title: 'Talent Acquisition',
        description: 'Find co-founders, team members, and advisors who share your vision and passion.'
    },
    {
        icon: MessageCircle,
        title: 'Community Forums',
        description: 'Engage in discussions, ask questions, and learn from experienced entrepreneurs.'
    },
    {
        icon: Award,
        title: 'Showcase Your Startup',
        description: 'Create a compelling profile to showcase your startup, achievements, and milestones.'
    }
];

const benefits = [
    {
        icon: Users,
        title: 'Growing Community',
        value: '10K+',
        description: 'Active founders and entrepreneurs in the ecosystem'
    },
    {
        icon: Rocket,
        title: 'Startups Listed',
        value: '500+',
        description: 'Innovative startups across various industries'
    },
    {
        icon: DollarSign,
        title: 'Funding Raised',
        value: '₹50Cr+',
        description: 'Total funding secured through platform connections'
    },
    {
        icon: TrendingUp,
        title: 'Success Rate',
        value: '85%',
        description: 'Startups that found co-founders or investors'
    }
];

const howItWorks = [
    {
        step: '01',
        title: 'Create Your Profile',
        description: 'Sign up and build a comprehensive profile showcasing your startup, skills, and goals.',
        icon: Users
    },
    {
        step: '02',
        title: 'Connect & Network',
        description: 'Discover and connect with founders, investors, and industry experts in your domain.',
        icon: Network
    },
    {
        step: '03',
        title: 'Collaborate & Grow',
        description: 'Join discussions, share insights, and collaborate on projects to accelerate growth.',
        icon: Rocket
    }
];

const useCases = [
    {
        title: 'For Founders',
        features: ['Find Co-founders', 'Network with Peers', 'Get Mentorship', 'Showcase Startup']
    },
    {
        title: 'For Investors',
        features: ['Discover Startups', 'Connect with Founders', 'Track Portfolio', 'Deal Flow']
    },
    {
        title: 'For Professionals',
        features: ['Join Startups', 'Offer Services', 'Build Network', 'Career Growth']
    }
];

const NextIgnition = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="page-section bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

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
                            className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold mb-6"
                        >
                            <Rocket size={20} />
                            <span>Our Product</span>
                        </Motion.div>

                        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
                            Next Ignition
                        </h1>
                        <p className="text-2xl md:text-3xl text-black/80 mb-4 font-semibold">
                            The LinkedIn for Startups
                        </p>
                        <p className="text-xl text-black/70 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Connect, collaborate, and grow with a vibrant community of founders, investors,
                            and startup enthusiasts. Your journey to success starts here.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Motion.a
                                href="https://nextignition.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                            >
                                Get Started
                                <ArrowRight size={20} />
                            </Motion.a>

                            <Motion.a
                                href="#features"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold border-2 border-yellow-200 hover:border-yellow-400 transition"
                            >
                                Learn More
                            </Motion.a>
                        </div>
                    </Motion.div>
                </div>
            </section>

            {/* Stats Section */}
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
                                    className="text-center p-6 rounded-3xl bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="inline-flex p-4 rounded-2xl bg-yellow-100 text-yellow-600 mb-4">
                                        <Icon size={32} />
                                    </div>
                                    <div className="text-4xl font-display font-bold text-primary mb-2">
                                        {benefit.value}
                                    </div>
                                    <h3 className="font-display text-lg font-semibold text-primary mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-black/70">
                                        {benefit.description}
                                    </p>
                                </Motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="page-section bg-gradient-to-b from-yellow-50 to-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600 mb-4">
                            Platform Features
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                            Everything You Need to Succeed
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
                                    className="group p-6 rounded-3xl bg-white border border-yellow-200 hover:border-yellow-400 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="inline-flex p-3 rounded-2xl bg-yellow-100 text-yellow-600 mb-4 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
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

            {/* How It Works */}
            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600 mb-4">
                            Getting Started
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                            How Next Ignition Works
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {howItWorks.map((step, index) => {
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
                                    {index < howItWorks.length - 1 && (
                                        <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-yellow-300 to-transparent -z-10"></div>
                                    )}
                                    <div className="inline-flex p-4 rounded-2xl bg-yellow-100 text-yellow-600 mb-4">
                                        <Icon size={32} />
                                    </div>
                                    <div className="text-sm font-semibold text-yellow-600 mb-2">
                                        Step {step.step}
                                    </div>
                                    <h3 className="font-display text-lg font-semibold text-primary mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-black/70">
                                        {step.description}
                                    </p>
                                </Motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="page-section bg-gradient-to-b from-yellow-50 to-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600 mb-4">
                            Who It's For
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                            Built for the Entire Startup Ecosystem
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {useCases.map((useCase, index) => (
                            <Motion.div
                                key={useCase.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-3xl p-6 border border-yellow-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="font-display text-xl font-semibold text-primary mb-4">
                                    {useCase.title}
                                </h3>
                                <div className="space-y-2">
                                    {useCase.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <CheckCircle2 size={16} className="text-yellow-600 flex-shrink-0" />
                                            <span className="text-sm text-black/70">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="page-section bg-gradient-to-br from-yellow-500 to-orange-500 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container-grid relative z-10 text-center">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                            Ready to Ignite Your Startup Journey?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Join thousands of founders, investors, and innovators building the future together.
                        </p>

                        <Motion.a
                            href="https://nextignition.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                        >
                            Join the Community
                            <ArrowRight size={20} />
                        </Motion.a>

                        {/* SOCIAL ICONS SECTION */}
                        <div className="mt-10">
                            <p className="text-white/80 text-sm mb-4 tracking-wide uppercase">
                                Follow Us
                            </p>

                            <div className="flex justify-center gap-6">
                                {[
                                    { Icon: Linkedin, href: "https://www.linkedin.com/company/nextignition-official/" },
                                    { Icon: Instagram, href: "https://www.instagram.com/next__ignition?igsh=ZnZ4N2ZmdHJvMHpo&utm_source=qr" },
                                    { Icon: X, href: "https://x.com/next_ignition?s=11" }
                                ].map(({ Icon, href }) => (
                                    <Motion.a
                                        key={href}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, opacity: 1 }}
                                        className="text-white/70 hover:text-white transition opacity-80"
                                    >
                                        <Icon size={30} />
                                    </Motion.a>
                                ))}
                            </div>
                        </div>
                    </Motion.div>
                </div>
            </section>
        </>
    );
};

export default NextIgnition;
