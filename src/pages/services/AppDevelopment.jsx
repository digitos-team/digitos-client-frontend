import { motion as Motion } from 'framer-motion';
import {
    Smartphone,
    Zap,
    Shield,
    Users,
    Code2,
    Layers,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';

const features = [
    {
        icon: Smartphone,
        title: 'Cross-Platform Excellence',
        description: 'Build once, deploy everywhere. Native iOS, Android, and cross-platform solutions using React Native, Flutter, and Swift/Kotlin.'
    },
    {
        icon: Zap,
        title: 'Performance Optimized',
        description: 'Lightning-fast apps with optimized code, efficient data handling, and smooth animations that delight users.'
    },
    {
        icon: Shield,
        title: 'Security First',
        description: 'Enterprise-grade security with encrypted data storage, secure authentication, and compliance with industry standards.'
    },
    {
        icon: Users,
        title: 'User-Centric Design',
        description: 'Intuitive interfaces crafted through user research, prototyping, and iterative testing for maximum engagement.'
    }
];

const technologies = [
    'React Native',
    'Flutter',
    'Swift',
    'Kotlin',
    'Firebase',
    'AWS Amplify',
    'GraphQL',
    'REST APIs'
];

const process = [
    {
        phase: '01',
        title: 'Discovery & Strategy',
        description: 'We analyze your business goals, target audience, and competitive landscape to define a clear product roadmap.',
        deliverables: ['Market Research', 'User Personas', 'Technical Specification', 'Project Timeline']
    },
    {
        phase: '02',
        title: 'Design & Prototyping',
        description: 'Our designers create stunning, user-friendly interfaces with interactive prototypes for validation.',
        deliverables: ['Wireframes', 'UI/UX Design', 'Interactive Prototype', 'Design System']
    },
    {
        phase: '03',
        title: 'Development & Testing',
        description: 'Agile development sprints with continuous integration, automated testing, and regular client demos.',
        deliverables: ['Sprint Releases', 'Automated Tests', 'Code Reviews', 'Performance Optimization']
    },
    {
        phase: '04',
        title: 'Launch & Support',
        description: 'Seamless deployment to app stores with ongoing maintenance, updates, and feature enhancements.',
        deliverables: ['App Store Deployment', 'Analytics Setup', 'User Training', '24/7 Support']
    }
];

const AppDevelopment = () => {
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
                            App Development
                        </p>
                        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
                            Build Mobile Apps That Users Love
                        </h1>
                        <p className="text-xl text-black/70 mb-8 leading-relaxed">
                            Transform your ideas into powerful mobile applications that engage users,
                            drive growth, and deliver exceptional experiences across iOS and Android platforms.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                            >
                                Start Your Project
                                <ArrowRight size={20} />
                            </Motion.a>
                            <Motion.a
                                href="#process"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold border-2 border-primary/20 hover:border-primary/40 transition"
                            >
                                Our Process
                            </Motion.a>
                        </div>
                    </Motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            Why Choose Us
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                            Comprehensive Mobile Solutions
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <Motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group p-8 rounded-3xl bg-gradient-to-br from-[#fdf7ed] to-white border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="font-display text-xl font-semibold text-primary mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-black/70 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </Motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="page-section bg-gradient-to-b from-[#fffaf0] to-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            Technology Stack
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                            Cutting-Edge Technologies
                        </h2>
                        <p className="text-lg text-black/70 max-w-2xl mx-auto">
                            We leverage the latest frameworks and tools to build robust, scalable mobile applications.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <Motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="px-6 py-3 rounded-full bg-white border-2 border-primary/20 text-primary font-semibold shadow-md hover:shadow-lg hover:border-primary/40 transition-all cursor-default"
                            >
                                {tech}
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className="page-section bg-white">
                <div className="container-grid">
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            Our Process
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                            From Concept to Launch
                        </h2>
                        <p className="text-lg text-black/70 max-w-2xl mx-auto">
                            A proven methodology that ensures your app is delivered on time, within budget, and exceeds expectations.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {process.map((step, index) => (
                            <Motion.div
                                key={step.phase}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">
                                    {/* Phase Number */}
                                    <div className="relative">
                                        <div className="text-6xl font-display font-bold text-primary/10">
                                            {step.phase}
                                        </div>
                                        {index < process.length - 1 && (
                                            <div className="hidden md:block absolute left-1/2 top-full h-16 w-0.5 bg-gradient-to-b from-primary/30 to-transparent"></div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="bg-gradient-to-br from-[#fdf7ed] to-white rounded-3xl p-8 border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                                        <h3 className="font-display text-2xl font-semibold text-primary mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-black/70 mb-6 leading-relaxed">
                                            {step.description}
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {step.deliverables.map((deliverable) => (
                                                <div key={deliverable} className="flex items-center gap-2 text-sm">
                                                    <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                                                    <span className="text-black/80">{deliverable}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
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
                            Ready to Build Your App?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Let's discuss your project and create a mobile experience that drives results.
                        </p>
                        <Motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                        >
                            Get Started Today
                            <ArrowRight size={20} />
                        </Motion.a>
                    </Motion.div>
                </div>
            </section>
        </>
    );
};

export default AppDevelopment;
