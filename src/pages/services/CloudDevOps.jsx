import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Cloud,
    Rocket,
    Shield,
    Zap,
    GitBranch,
    Server,
    CheckCircle2,
    ArrowRight,
    Lock,
    Gauge,
    RefreshCw,
    Database,
    Code2,
    Activity
} from 'lucide-react';

const features = [
    {
        icon: Cloud,
        title: 'Cloud Infrastructure',
        description: 'Scalable, secure cloud architecture on AWS, Azure, or Google Cloud with high availability and disaster recovery.'
    },
    {
        icon: GitBranch,
        title: 'CI/CD Pipelines',
        description: 'Automated build, test, and deployment pipelines for faster releases and reduced human error.'
    },
    {
        icon: Server,
        title: 'Container Orchestration',
        description: 'Docker and Kubernetes deployment for microservices architecture and seamless scaling.'
    },
    {
        icon: Shield,
        title: 'Security & Compliance',
        description: 'Infrastructure security, vulnerability scanning, and compliance with industry standards.'
    },
    {
        icon: Activity,
        title: 'Monitoring & Logging',
        description: 'Real-time monitoring, alerting, and centralized logging for proactive issue resolution.'
    },
    {
        icon: RefreshCw,
        title: 'Infrastructure as Code',
        description: 'Terraform and CloudFormation for version-controlled, reproducible infrastructure.'
    }
];

const services = [
    {
        title: 'Cloud Migration',
        description: 'Seamlessly migrate your applications and data to the cloud',
        benefits: ['Zero Downtime Migration', 'Cost Optimization', 'Performance Tuning', 'Legacy System Modernization']
    },
    {
        title: 'DevOps Automation',
        description: 'Implement CI/CD pipelines and automation workflows',
        benefits: ['Automated Testing', 'Continuous Deployment', 'Release Management', 'Configuration Management']
    },
    {
        title: 'Cloud Architecture',
        description: 'Design scalable, resilient cloud-native architectures',
        benefits: ['Microservices Design', 'Serverless Computing', 'Auto-scaling', 'Multi-region Deployment']
    },
    {
        title: 'Managed Services',
        description: '24/7 monitoring, maintenance, and support for your infrastructure',
        benefits: ['Proactive Monitoring', 'Incident Response', 'Performance Optimization', 'Security Patches']
    }
];

const technologies = {
    cloud: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'],
    containers: ['Docker', 'Kubernetes', 'Helm', 'Istio'],
    cicd: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI'],
    iac: ['Terraform', 'CloudFormation', 'Ansible', 'Pulumi'],
    monitoring: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog']
};

const benefits = [
    {
        icon: Gauge,
        title: 'Faster Deployment',
        value: '10x',
        description: 'Deploy code to production 10 times faster with automated pipelines'
    },
    {
        icon: Zap,
        title: 'Reduced Downtime',
        value: '99.9%',
        description: 'Achieve 99.9% uptime with high availability architecture'
    },
    {
        icon: Lock,
        title: 'Enhanced Security',
        value: '100%',
        description: 'Complete security coverage with automated vulnerability scanning'
    },
    {
        icon: Database,
        title: 'Cost Savings',
        value: '40%',
        description: 'Reduce infrastructure costs through optimization and automation'
    }
];

const CloudDevOps = () => {
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
                            Cloud & DevOps
                        </p>
                        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
                            Accelerate Innovation with Cloud & DevOps
                        </h1>
                        <p className="text-xl text-black/70 mb-8 leading-relaxed">
                            Transform your development and operations with modern cloud infrastructure,
                            automated CI/CD pipelines, and DevOps best practices that enable rapid, reliable deployments.
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
                                    Get Started
                                    <ArrowRight size={20} />
                                </Link>
                            </Motion.div>
                            <Motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href="#services"
                                    className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold border-2 border-primary/20 hover:border-primary/40 transition"
                                >
                                    Our Services
                                </a>
                            </Motion.div>
                        </div>
                    </Motion.div>
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
                                    className="text-center p-6 rounded-3xl bg-gradient-to-br from-[#fdf7ed] to-white border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4">
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

            {/* Features Grid */}
            <section className="page-section bg-gradient-to-b from-[#fffaf0] to-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            Core Capabilities
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                            Complete Cloud & DevOps Solutions
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
                                    className="group p-6 rounded-3xl bg-white border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
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

            {/* Services Section */}
            <section id="services" className="page-section bg-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            What We Offer
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                            Comprehensive Cloud & DevOps Services
                        </h2>
                        <p className="text-lg text-black/70 max-w-2xl mx-auto">
                            End-to-end cloud and DevOps solutions tailored to your business needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <Motion.div
                                key={service.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-gradient-to-br from-[#fdf7ed] to-white rounded-3xl p-8 border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="font-display text-2xl font-semibold text-primary mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-black/70 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="space-y-2">
                                    {service.benefits.map((benefit) => (
                                        <div key={benefit} className="flex items-center gap-2">
                                            <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                                            <span className="text-sm text-black/80">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="page-section bg-gradient-to-b from-[#fffaf0] to-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            Technology Stack
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                            Industry-Leading Tools & Platforms
                        </h2>
                        <p className="text-lg text-black/70 max-w-2xl mx-auto">
                            We leverage the best cloud and DevOps technologies to deliver reliable, scalable solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {Object.entries(technologies).map(([category, tools], catIndex) => (
                            <Motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                                className="bg-white rounded-3xl p-6 border border-primary/10"
                            >
                                <h3 className="font-display text-lg font-semibold text-primary mb-4 capitalize">
                                    {category === 'cicd' ? 'CI/CD' : category === 'iac' ? 'IaC' : category}
                                </h3>
                                <div className="space-y-2">
                                    {tools.map((tool) => (
                                        <div key={tool} className="text-sm text-black/70 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                                            {tool}
                                        </div>
                                    ))}
                                </div>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DevOps Process */}
            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            Our Approach
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                            DevOps Implementation Process
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                step: '01',
                                icon: Code2,
                                title: 'Assessment',
                                description: 'Analyze current infrastructure, workflows, and identify optimization opportunities'
                            },
                            {
                                step: '02',
                                icon: GitBranch,
                                title: 'Strategy',
                                description: 'Design cloud architecture and DevOps roadmap aligned with business goals'
                            },
                            {
                                step: '03',
                                icon: Server,
                                title: 'Implementation',
                                description: 'Set up cloud infrastructure, CI/CD pipelines, and automation tools'
                            },
                            {
                                step: '04',
                                icon: Shield,
                                title: 'Security',
                                description: 'Implement security best practices, compliance, and vulnerability management'
                            },
                            {
                                step: '05',
                                icon: Activity,
                                title: 'Monitoring',
                                description: 'Deploy monitoring, logging, and alerting for proactive issue detection'
                            },
                            {
                                step: '06',
                                icon: RefreshCw,
                                title: 'Optimization',
                                description: 'Continuous improvement through performance tuning and cost optimization'
                            }
                        ].map((phase, index) => {
                            const Icon = phase.icon;
                            return (
                                <Motion.div
                                    key={phase.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gradient-to-br from-[#fdf7ed] to-white rounded-3xl p-6 border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="text-3xl font-display font-bold text-primary/20">
                                            {phase.step}
                                        </div>
                                        <div className="inline-flex p-2 rounded-xl bg-primary/10 text-primary">
                                            <Icon size={24} />
                                        </div>
                                    </div>
                                    <h3 className="font-display text-xl font-semibold text-primary mb-3">
                                        {phase.title}
                                    </h3>
                                    <p className="text-sm text-black/70 leading-relaxed">
                                        {phase.description}
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
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                            Ready to Modernize Your Infrastructure?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Let's build a scalable, secure cloud infrastructure with automated DevOps workflows that accelerate your business.
                        </p>
                        <Motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                            >
                                Start Your Cloud Journey
                                <ArrowRight size={20} />
                            </Link>
                        </Motion.div>
                    </Motion.div>
                </div>
            </section>
        </>
    );
};

export default CloudDevOps;
