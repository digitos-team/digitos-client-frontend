import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Brain,
    Sparkles,
    Zap,
    Target,
    Workflow,
    Bot,
    CheckCircle2,
    ArrowRight,
    LineChart,
    MessageSquare,
    Image as ImageIcon,
    Code2,
    Database,
    Cpu
} from 'lucide-react';

const features = [
    {
        icon: Brain,
        title: 'Custom AI Models',
        description: 'Develop and train custom AI models tailored to your specific business needs and data.'
    },
    {
        icon: Bot,
        title: 'Intelligent Automation',
        description: 'Automate complex workflows with AI-powered decision-making and process optimization.'
    },
    {
        icon: MessageSquare,
        title: 'Natural Language Processing',
        description: 'Build chatbots, sentiment analysis, and text processing tools using advanced NLP.'
    },
    {
        icon: ImageIcon,
        title: 'Computer Vision',
        description: 'Image recognition, object detection, and visual analysis for various applications.'
    },
    {
        icon: LineChart,
        title: 'Predictive Analytics',
        description: 'Leverage machine learning for forecasting, trend analysis, and data-driven insights.'
    },
    {
        icon: Workflow,
        title: 'AI Integration',
        description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.'
    }
];

const solutions = [
    {
        title: 'AI Chatbots & Virtual Assistants',
        description: 'Intelligent conversational AI for customer support and engagement',
        capabilities: ['24/7 Customer Support', 'Multi-language Support', 'Context-Aware Responses', 'Integration with CRM']
    },
    {
        title: 'Document Processing',
        description: 'Automated extraction and analysis of information from documents',
        capabilities: ['OCR & Text Extraction', 'Data Classification', 'Invoice Processing', 'Contract Analysis']
    },
    {
        title: 'Recommendation Systems',
        description: 'Personalized recommendations based on user behavior and preferences',
        capabilities: ['Product Recommendations', 'Content Personalization', 'Collaborative Filtering', 'Real-time Updates']
    },
    {
        title: 'Anomaly Detection',
        description: 'Identify unusual patterns and potential issues in your data',
        capabilities: ['Fraud Detection', 'Quality Control', 'System Monitoring', 'Predictive Maintenance']
    }
];

const technologies = {
    frameworks: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
    nlp: ['OpenAI GPT', 'Hugging Face', 'spaCy', 'BERT'],
    cloud: ['AWS SageMaker', 'Azure ML', 'Google AI Platform', 'Vertex AI'],
    tools: ['Jupyter', 'MLflow', 'Weights & Biases', 'Docker']
};

const benefits = [
    {
        icon: Zap,
        title: 'Productivity Boost',
        value: '70%',
        description: 'Increase productivity by automating repetitive tasks with AI'
    },
    {
        icon: Target,
        title: 'Accuracy',
        value: '95%+',
        description: 'Achieve high accuracy in predictions and classifications'
    },
    {
        icon: LineChart,
        title: 'Cost Reduction',
        value: '50%',
        description: 'Reduce operational costs through intelligent automation'
    },
    {
        icon: Sparkles,
        title: 'Innovation',
        value: '∞',
        description: 'Unlock new possibilities with cutting-edge AI technology'
    }
];

const AIToolDevelopment = () => {
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
                            AI Tool Development
                        </p>
                        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
                            Transform Your Business with Custom AI Solutions
                        </h1>
                        <p className="text-xl text-black/70 mb-8 leading-relaxed">
                            Harness the power of artificial intelligence to automate workflows, gain insights,
                            and create intelligent applications that drive innovation and competitive advantage.
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
                                    Start AI Project
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
                            AI Capabilities
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                            Comprehensive AI Development Services
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

            {/* Solutions Section */}
            <section id="solutions" className="page-section bg-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            AI Solutions
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                            Custom AI Tools We Build
                        </h2>
                        <p className="text-lg text-black/70 max-w-2xl mx-auto">
                            From chatbots to predictive analytics, we create AI solutions that solve real business challenges.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <Motion.div
                                key={solution.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-gradient-to-br from-[#fdf7ed] to-white rounded-3xl p-8 border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="font-display text-2xl font-semibold text-primary mb-3">
                                    {solution.title}
                                </h3>
                                <p className="text-black/70 mb-6 leading-relaxed">
                                    {solution.description}
                                </p>
                                <div className="space-y-2">
                                    {solution.capabilities.map((capability) => (
                                        <div key={capability} className="flex items-center gap-2">
                                            <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                                            <span className="text-sm text-black/80">{capability}</span>
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
                            Leading AI Technologies & Frameworks
                        </h2>
                        <p className="text-lg text-black/70 max-w-2xl mx-auto">
                            We leverage state-of-the-art AI frameworks and tools to build powerful, scalable solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                    {category === 'nlp' ? 'NLP' : category}
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

            {/* Development Process */}
            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            Our Process
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                            AI Development Workflow
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                step: '01',
                                icon: Target,
                                title: 'Problem Definition',
                                description: 'Identify use cases, define objectives, and assess data requirements'
                            },
                            {
                                step: '02',
                                icon: Database,
                                title: 'Data Preparation',
                                description: 'Collect, clean, and prepare data for model training and validation'
                            },
                            {
                                step: '03',
                                icon: Brain,
                                title: 'Model Development',
                                description: 'Design, train, and optimize AI models using best practices'
                            },
                            {
                                step: '04',
                                icon: Code2,
                                title: 'Integration',
                                description: 'Integrate AI models into your applications and workflows'
                            },
                            {
                                step: '05',
                                icon: Cpu,
                                title: 'Deployment',
                                description: 'Deploy models to production with monitoring and scaling'
                            },
                            {
                                step: '06',
                                icon: LineChart,
                                title: 'Optimization',
                                description: 'Continuous monitoring, retraining, and performance improvement'
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

            {/* Use Cases */}
            <section className="page-section bg-gradient-to-b from-[#fffaf0] to-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-4">
                            Use Cases
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                            AI Across Industries
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { industry: 'E-commerce', use: 'Product recommendations, demand forecasting' },
                            { industry: 'Healthcare', use: 'Medical image analysis, patient diagnosis' },
                            { industry: 'Finance', use: 'Fraud detection, risk assessment' },
                            { industry: 'Manufacturing', use: 'Quality control, predictive maintenance' },
                            { industry: 'Retail', use: 'Inventory optimization, customer insights' },
                            { industry: 'Marketing', use: 'Content generation, campaign optimization' }
                        ].map((item, index) => (
                            <Motion.div
                                key={item.industry}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="bg-white rounded-2xl p-6 border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="font-display text-lg font-semibold text-primary mb-2">
                                    {item.industry}
                                </h3>
                                <p className="text-sm text-black/70">
                                    {item.use}
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
                            Ready to Leverage AI for Your Business?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Let's build intelligent solutions that automate workflows, unlock insights, and drive innovation.
                        </p>
                        <Motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                            >
                                Start Your AI Journey
                                <ArrowRight size={20} />
                            </Link>
                        </Motion.div>
                    </Motion.div>
                </div>
            </section>
        </>
    );
};

export default AIToolDevelopment;
