import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import IndustriesSection from "../components/IndustriesSection";

const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Industries = () => {
    return (
        <>
            {/* ------------------------------------------------
          TOP SECTION — Soft Yellow Gradient
      ------------------------------------------------- */}
            <section className="relative page-section overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 to-white"></div>

                <div className="relative container-grid space-y-6">
                    <Motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500"
                    >
                        Industries
                    </Motion.p>

                    <Motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="font-display text-4xl md:text-5xl font-semibold text-black"
                    >
                        Vertical expertise that accelerates adoption.
                        <span className="block mt-2 h-1 w-20 bg-yellow-400 rounded-full"></span>
                    </Motion.h1>

                    <Motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="max-w-3xl text-lg text-black/70"
                    >
                        We map compliance requirements, legacy constraints, and customer expectations
                        for each sector to deliver solutions that are both innovative and resilient.
                    </Motion.p>
                </div>
            </section>

            {/* ------------------------------------------------
          OUR PRODUCTS SECTION
      ------------------------------------------------- */}
            <section className="page-section bg-white">
                <div className="container-grid space-y-12">
                    <Motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center md:text-left"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
                            Our Products
                        </p>
                        <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-black">
                            Innovative solutions built by us
                            <span className="block mt-2 h-[3px] w-16 bg-yellow-400 rounded-full"></span>
                        </h2>
                    </Motion.div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Next Ignition */}
                        <Link to="/industries/next-ignition">
                            <Motion.div
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="group rounded-3xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                            >
                                <div className="mb-4 inline-flex rounded-2xl bg-yellow-100 px-4 py-2">
                                    <span className="text-sm font-semibold text-yellow-700">Product</span>
                                </div>
                                <h3 className="font-display text-2xl font-bold text-black">
                                    Next Ignition
                                </h3>
                                <p className="mt-4 text-lg text-black/70 leading-relaxed">
                                    A LinkedIn-type platform designed specifically for startups to connect, collaborate, and grow. Network with founders, investors, and industry experts to accelerate your startup journey.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {["Networking", "Collaboration", "Startup Ecosystem", "Growth"].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Motion.div>
                        </Link>

                        {/* Payroll System */}
                        <Link to="/industries/payroll-management">
                            <Motion.div
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="group rounded-3xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                            >
                                <div className="mb-4 inline-flex rounded-2xl bg-yellow-100 px-4 py-2">
                                    <span className="text-sm font-semibold text-yellow-700">Product</span>
                                </div>
                                <h3 className="font-display text-2xl font-bold text-black">
                                    Payroll Management System
                                </h3>
                                <p className="mt-4 text-lg text-black/70 leading-relaxed">
                                    Comprehensive payroll solution for companies, admins, CAs, HR professionals, and employees. Automate salary processing, tax compliance, and generate reports with ease.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {["Payroll", "Tax Compliance", "HR Management", "Automation"].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Motion.div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Industries Grid Section */}
            <IndustriesSection />
        </>
    );
};

export default Industries;
