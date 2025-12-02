// src/pages/industries/Pathology.jsx
import { Link } from 'react-router-dom';
import { FlaskConical, ClipboardList, FileBarChart, Activity } from "lucide-react";

export default function Pathology() {
    return (
        <section className="min-h-screen w-full bg-white text-primary px-6 py-20">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold mb-4 text-accent">
                        Pathology Software Solutions
                    </h1>
                    <p className="text-primary/70 text-lg">
                        Smart, automated solutions for pathology labs — faster reporting,
                        error-free diagnostics, and seamless lab operations.
                    </p>
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <FeatureCard
                        icon={<FlaskConical className="w-8 h-8 text-accent" />}
                        title="Sample Tracking"
                        text="Track samples from collection to result delivery with automated updates."
                    />

                    <FeatureCard
                        icon={<ClipboardList className="w-8 h-8 text-accent" />}
                        title="Test Management"
                        text="Manage tests with ranges, categories, and reference values."
                    />

                    <FeatureCard
                        icon={<FileBarChart className="w-8 h-8 text-accent" />}
                        title="Report Automation"
                        text="Generate digital reports with templates and digital signatures."
                    />

                    <FeatureCard
                        icon={<Activity className="w-8 h-8 text-accent" />}
                        title="Analytics Dashboard"
                        text="Track test volume, revenue, and performance in real-time."
                    />

                    <FeatureCard
                        icon={<FlaskConical className="w-8 h-8 text-accent" />}
                        title="Machine Integration"
                        text="Connect analyzers to auto-import results and reduce manual errors."
                    />

                    <FeatureCard
                        icon={<ClipboardList className="w-8 h-8 text-accent" />}
                        title="Patient Portal"
                        text="Patients can download reports, book tests, and track status."
                    />

                </div>

                {/* CTA */}
                <div className="mt-16">
                    <Link
                        to="/contact"
                        className="inline-flex rounded-full bg-accent px-6 py-2 text-center font-semibold text-primary
               transition duration-300 hover:shadow-lg hover:shadow-accent/50 items-center justify-center gap-2"
                    >
                        Build Pathology Software →
                    </Link>
                </div>


            </div>
        </section>
    );
}

/* ---------- Reusable Feature Card ---------- */
function FeatureCard({ icon, title, text }) {
    return (
        <div className="bg-white border border-accent/30 p-6 rounded-xl space-y-4 shadow-sm hover:shadow-md transition">
            <div>{icon}</div>
            <h2 className="text-xl font-semibold text-primary">{title}</h2>
            <p className="text-primary/60 text-sm">{text}</p>
        </div>
    );
}
