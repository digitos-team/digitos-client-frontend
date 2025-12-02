import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Code2,
    Layers,
    Database,
    Cloud,
    Lock,
    Zap,
    CheckCircle2,
    ArrowRight,
    Globe,
    Cpu
} from 'lucide-react';

const features = [
    {
        icon: Code2,
        title: 'Custom Software Solutions',
        description: 'Tailored applications built from the ground up to match your unique business processes and requirements.'
    },
    {
        icon: Layers,
        title: 'Full-Stack Development',
        description: 'End-to-end development expertise covering frontend, backend, databases, and infrastructure.'
    },
    {
        icon: Database,
        title: 'Scalable Architecture',
        description: 'Future-proof systems designed to grow with your business, handling increased load effortlessly.'
    },
    {
        icon: Lock,
        title: 'Security & Compliance',
        description: 'Industry-standard security practices with compliance for GDPR, HIPAA, and other regulations.'
    },
    {
        icon: Zap,
        title: 'Agile Methodology',
        description: 'Iterative development with regular sprints, continuous feedback, and rapid delivery cycles.'
    },
    {
        icon: Globe,
        title: 'API Integration',
        description: 'Seamless integration with third-party services, legacy systems, and modern cloud platforms.'
    }
];

const solutions = [
    {
        title: 'Web Applications',
        description: 'Responsive, high-performance web apps using React, Vue, Angular, and modern frameworks.',
        highlights: ['Progressive Web Apps', 'Single Page Applications', 'Real-time Dashboards']
    },
    {
        title: 'Enterprise Software',
        description: 'Complex business systems for large organizations with advanced workflows and integrations.',
        highlights: ['Workflow Automation', 'Document Management', 'Business Intelligence']
    },
    {
        title: 'SaaS Platforms',
        description: 'Multi-tenant cloud software with subscription management and analytics.',
        highlights: ['Multi-tenancy', 'Subscription Billing', 'Usage Analytics']
    },
    {
        title: 'Legacy Modernization',
        description: 'Transform outdated systems into modern, maintainable applications.',
        highlights: ['Code Refactoring', 'Cloud Migration', 'API Development']
    }
];

const techStack = {
    frontend: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript'],
    backend: ['Node.js', 'Python', 'Java', '.NET', 'Go'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'],
    cloud: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
};

const SoftwareDevelopment = () => {
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
                            Software Development
                        </p>
                        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
                            Enterprise-Grade Software Solutions
                        </h1>
                        <p className="text-xl text-black/70 mb-8 leading-relaxed">
                            From web applications to complex enterprise systems, we build scalable,
                            secure software that transforms your business operations and drives digital innovation.
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
                                    Start Your Project
                                    <ArrowRight size={20} />
                                </Link>
                            </Motion.div>
                            <Motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href="#solutions"
                                    className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold border-2 border-primary/20 hover:border-primary/40 transition"
                                >
                                    Explore Solutions
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
                            Our Expertise
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                            Comprehensive Development Capabilities
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

            {/* Solutions Section */}
            <section id="solutions" className="page-section bg-gradient-to-b from-[#fffaf0] to-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            What We Build
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                            Tailored Software Solutions
                        </h2>
                        <p className="text-lg text-black/70 max-w-2xl mx-auto">
                            We specialize in building custom software that solves real business challenges.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <Motion.div
                                key={solution.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-3xl p-8 border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="font-display text-2xl font-semibold text-primary mb-3">
                                    {solution.title}
                                </h3>
                                <p className="text-black/70 mb-6 leading-relaxed">
                                    {solution.description}
                                </p>
                                <div className="space-y-2">
                                    {solution.highlights.map((highlight) => (
                                        <div key={highlight} className="flex items-center gap-2">
                                            <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                                            <span className="text-sm text-black/80">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            Technology Stack
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                            Modern Technologies We Use
                        </h2>
                        <p className="text-lg text-black/70 max-w-2xl mx-auto">
                            We leverage cutting-edge technologies to build robust, scalable solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(techStack).map(([category, technologies], catIndex) => (
                            <Motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                                className="bg-gradient-to-br from-[#fdf7ed] to-white rounded-3xl p-6 border border-primary/10"
                            >
                                <h3 className="font-display text-lg font-semibold text-primary mb-4 capitalize">
                                    {category}
                                </h3>
                                <div className="space-y-2">
                                    {technologies.map((tech) => (
                                        <div key={tech} className="text-sm text-black/70 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="page-section bg-gradient-to-b from-[#fffaf0] to-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            Our Approach
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                            Agile Development Process
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                step: '01',
                                title: 'Requirements & Planning',
                                description: 'Deep dive into your business needs, technical requirements, and project scope.'
                            },
                            {
                                step: '02',
                                title: 'Design & Architecture',
                                description: 'Create system architecture, database design, and user interface mockups.'
                            },
                            {
                                step: '03',
                                title: 'Development & Testing',
                                description: 'Agile sprints with continuous integration, automated testing, and code reviews.'
                            },
                            {
                                step: '04',
                                title: 'Deployment & Training',
                                description: 'Smooth deployment to production with comprehensive user training and documentation.'
                            },
                            {
                                step: '05',
                                title: 'Support & Maintenance',
                                description: 'Ongoing support, bug fixes, performance optimization, and feature enhancements.'
                            },
                            {
                                step: '06',
                                title: 'Continuous Improvement',
                                description: 'Regular updates based on user feedback and evolving business requirements.'
                            }
                        ].map((phase, index) => (
                            <Motion.div
                                key={phase.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-3xl p-6 border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="text-4xl font-display font-bold text-primary/10 mb-3">
                                    {phase.step}
                                </div>
                                <h3 className="font-display text-xl font-semibold text-primary mb-3">
                                    {phase.title}
                                </h3>
                                <p className="text-sm text-black/70 leading-relaxed">
                                    {phase.description}
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
                            Let's Build Something Amazing
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Transform your vision into reality with our expert software development team.
                        </p>
                        <Motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                            >
                                Schedule a Consultation
                                <ArrowRight size={20} />
                            </Link>
                        </Motion.div>
                    </Motion.div>
                </div>
            </section>
        </>
    );
};

export default SoftwareDevelopment;
