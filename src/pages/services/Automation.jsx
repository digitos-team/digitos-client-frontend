import { useRef } from 'react';
import {
    CheckCircle2,
    Workflow,
    Database,
    Mail,
    FileText,
    ShieldCheck,
    Zap,
    Cpu,
    Server,
    Clock,
    TrendingUp,
    AlertTriangle,
    XCircle,
    Link
} from 'lucide-react';

const Automation = () => {
    const contactRef = useRef(null);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/contact';
        }
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#fff7ea] to-[#fffaf0] pt-20 pb-12 sm:pt-24 sm:pb-20">
                <div className="container-grid text-center relative z-10">
                    <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-accent mb-6 sm:mb-8">
                        <Zap size={16} />
                        <span>Automate. Scale. Succeed.</span>
                    </div>
                    <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary leading-tight mb-6">
                        Business Process <br /> <span className="text-accent">Automation Services</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-black/70 mb-8 sm:mb-10 leading-relaxed">
                        We automate repetitive business workflows to reduce errors, save time, and scale operations without hiring.
                    </p>
                    <button
                        onClick={scrollToContact}
                        className="rounded-full bg-primary px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent hover:shadow-xl hover:-translate-y-1"
                    >
                        Discuss Automation
                    </button>
                </div>

                {/* Background Elements */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            </section>

            {/* Problems Section */}
            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">Problems We Solve</h2>
                        <p className="text-black/60 max-w-2xl mx-auto">Eliminate bottlenecks that hold your business back.</p>
                    </div>

                    <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            { icon: FileText, title: "Manual Data Entry", desc: "Wasted hours copying data across multiple tools." },
                            { icon: Link, title: "Disconnected Systems", desc: "Tools that don't talk to each other, creating silos." },
                            { icon: AlertTriangle, title: "Human Errors", desc: "Costly mistakes due to repetitive manual tasks." },
                            { icon: Clock, title: "Slow Approvals", desc: "Delays in reporting and decision-making cycles." },
                        ].map((problem, idx) => (
                            <div key={idx} className="group p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                                <div className="mb-4 inline-flex p-3 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-200 transition-colors">
                                    <problem.icon size={24} />
                                </div>
                                <h3 className="font-display text-xl font-bold text-primary mb-2">{problem.title}</h3>
                                <p className="text-sm text-black/70 leading-relaxed">{problem.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="page-section bg-neutral-900 text-white">
                <div className="container-grid">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">What We Automate</h2>
                        <p className="text-white/60 max-w-2xl mx-auto">Comprehensive automation solutions for every department.</p>
                    </div>

                    <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { icon: TrendingUp, title: "CRM & Lead Automation", desc: "Capture, qualify, and follow up with leads automatically." },
                            { icon: FileText, title: "Billing & Invoicing", desc: "Generate and send invoices on schedule without manual input." },
                            { icon: Mail, title: "Smart Notifications", desc: "Automated Email & WhatsApp alerts for critical updates." },
                            { icon: Database, title: "Data Sync", desc: "Keep your inventory, customer, and sales data in perfect sync." },
                            { icon: Monitor, title: "Reports & Dashboards", desc: "Real-time insights generated and delivered automatically." },
                            { icon: ShieldCheck, title: "Approval Workflows", desc: "Role-based approvals to maintain control and compliance." },
                        ].map((service, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                <div className="mb-4 text-accent">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="font-display text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="page-section bg-[#fffaf0]">
                <div className="container-grid">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">Our Automation Process</h2>
                        <p className="text-black/60 max-w-2xl mx-auto">A strategic approach to seamless implementation.</p>
                    </div>

                    <div className="relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-black/10 -translate-y-1/2"></div>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
                            {[
                                { step: "01", title: "Analysis", desc: "Mapping your current workflows." },
                                { step: "02", title: "Strategy", desc: "Designing the automation blueprint." },
                                { step: "03", title: "Selection", desc: "Choosing the right tools (No-code/Custom)." },
                                { step: "04", title: "Develop", desc: "Building and testing the solution." },
                                { step: "05", title: "Deploy", desc: "Live implementation and monitoring." },
                            ].map((item, idx) => (
                                <div key={idx} className="group relative bg-white p-6 rounded-2xl shadow-sm border border-black/5 text-center hover:translate-y-[-5px] transition-transform duration-300">
                                    <div className="w-12 h-12 mx-auto bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 group-hover:bg-accent transition-colors">
                                        {item.step}
                                    </div>
                                    <h3 className="font-display text-lg font-bold text-primary mb-2">{item.title}</h3>
                                    <p className="text-xs text-black/60">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">Tools & Technologies</h2>
                        <p className="text-black/60">We leverage the best tools for the job.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        {["Zapier", "Make", "n8n", "Custom APIs", "Python", "Node.js", "AWS Lambda"].map((tool, idx) => (
                            <span key={idx} className="px-6 py-3 rounded-xl bg-neutral-100 text-primary font-semibold text-sm sm:text-base border border-neutral-200 hover:border-accent/50 hover:bg-white hover:shadow-md transition-all cursor-default">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes Section */}
            <section className="page-section bg-primary text-white overflow-hidden relative">
                {/* Background Patterns */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="container-grid relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">What You Gain</h2>
                            <p className="text-white/80 text-lg mb-8 leading-relaxed">
                                Transform your operations from manual and slow to automated and scalable.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "40–70% reduction in manual work",
                                    "Faster operational output",
                                    "Zero human error in data handling",
                                    "Scalable systems ready for growth"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-lg font-medium">
                                        <CheckCircle2 className="text-accent shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-center">
                            <div className="text-6xl font-bold text-accent mb-2">70%</div>
                            <div className="text-xl text-white/90 mb-6">Average Efficiency Increase</div>
                            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                <div className="h-full bg-accent w-[70%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 sm:py-28 bg-white text-center">
                <div className="container-grid max-w-4xl">
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
                        Let’s automate what’s slowing your business down.
                    </h2>
                    <p className="text-lg text-black/60 mb-10 max-w-2xl mx-auto">
                        Book a consultation to discover your automation potential.
                    </p>
                    <button
                        onClick={scrollToContact}
                        className="rounded-full bg-primary px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-accent hover:scale-105"
                    >
                        Start Automation
                    </button>
                </div>
            </section>
        </div>
    );
};

// Helper Icon for services loop
const Monitor = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
);

export default Automation;
