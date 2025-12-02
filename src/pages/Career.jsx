import { useState, useRef, useEffect } from "react";
import { Briefcase, Loader2 } from "lucide-react";
import { getAllJobPositions, applyForJob } from "../api/api";
import { motion as Motion } from "framer-motion";

const inputClasses =
    "peer w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-black focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 outline-none transition-all";

const labelClasses =
    "pointer-events-none absolute left-4 top-3 text-black/50 transition-all peer-focus:-top-3 peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs peer-focus:text-yellow-600 peer-valid:-top-3 peer-valid:bg-white peer-valid:px-2 peer-valid:text-xs";

const Career = () => {
    const formRef = useRef(null);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        positionApplyingFor: "",
        resume: null,
    });

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true);
                const response = await getAllJobPositions();

                if (!response.success || !Array.isArray(response.data)) {
                    setJobs([]);
                    return;
                }

                setJobs(response.data);
            } catch (error) {
                console.error("Error fetching job positions:", error);
                setJobs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "resume") {
            setForm({ ...form, resume: files[0] });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.resume) {
            alert("Please upload your resume");
            return;
        }

        try {
            setSubmitting(true);

            const formData = new FormData();
            formData.append("name", form.name);
            formData.append("email", form.email);
            formData.append("phone", form.phone);
            formData.append("positionApplyingFor", form.positionApplyingFor);
            formData.append("resume", form.resume);

            console.log("FormData contents:");
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }

            await applyForJob(formData);
            alert("Application submitted successfully! We'll get back to you soon.");
            setForm({ name: "", email: "", phone: "", positionApplyingFor: "", resume: null });

            const fileInput = document.querySelector('input[type="file"]');
            if (fileInput) fileInput.value = "";
        } catch (error) {
            console.error("Error submitting application:", error);
            alert(error.message || "There was an error submitting your application. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleSelectJob = (jobId) => {
        setForm({ ...form, positionApplyingFor: jobId });
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-[#fff7ea] to-[#fffaf0] pt-24 pb-12 md:pt-32 md:pb-20">
                <div className="container-grid text-center relative z-10">
                    <Motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 font-display text-4xl font-bold text-primary md:text-6xl leading-tight"
                    >
                        Build the Future With Us
                    </Motion.h1>
                    <Motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mx-auto mt-6 max-w-2xl text-lg text-black/70"
                    >
                        We are always looking for passionate individuals who want to make an
                        impact. Explore our open positions and find your next challenge.
                    </Motion.p>
                </div>
            </section>

            <section className="page-section bg-white">
                <div className="container-grid">
                    <div className="mb-12 text-center">
                        <h2 className="font-display text-3xl font-semibold text-primary">Current Openings</h2>
                        <p className="mt-2 text-black/60">Find the role that fits your skills and aspirations.</p>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <Loader2 className="animate-spin text-accent" size={48} />
                        </div>
                    ) : jobs.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-lg text-black/60">No positions available at the moment. Please check back later!</p>
                        </div>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {jobs.map((job, index) => (
                                <Motion.div
                                    key={job._id}
                                    onClick={() => handleSelectJob(job._id)}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="cursor-pointer group relative flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-accent/30"
                                >
                                    <div>
                                        <div className="mb-4 flex items-center justify-end">
                                            <Briefcase size={20} className="text-black/30" />
                                        </div>

                                        <div className="space-y-1 mb-6">
                                            <h3 className="font-display text-xl font-bold text-primary group-hover:text-accent transition-colors">
                                                {job.title}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-black/70">
                                                {job.experienceRequired && (
                                                    <span className="flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        {job.experienceRequired}
                                                    </span>
                                                )}
                                                {job.location && (
                                                    <span className="flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        {job.location}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-sm text-black/60 leading-relaxed">{job.description}</p>

                                        <button
                                            type="button"
                                            className="mt-6 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-accent hover:shadow-lg"
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                </Motion.div>
                            ))}
                        </div>
                    )}

                    {/* Section to contact HR if user didn’t find a job */}
                    <div className="text-center mt-12">
                        <p className="text-lg text-black/70">
                            Didn't find a role that matches your skills? You can send your profile and resume directly to{" "}
                            <a
                                href="mailto:hr@digitos.com"
                                className="text-accent font-semibold underline"
                            >
                                hr@digitositsolutions.com
                            </a>
                            . We’ll keep your application on file and reach out when a suitable position becomes available.
                        </p>
                    </div>
                </div>
            </section>

            <section ref={formRef} className="page-section bg-[#fffaf0]">
                <div className="container-grid max-w-3xl">
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-white p-8 shadow-xl md:p-12"
                    >
                        <div className="mb-8 text-center">
                            <h2 className="font-display text-3xl font-semibold text-primary">
                                Apply Now
                            </h2>
                            <p className="mt-2 text-black/60">
                                Fill in your details below to submit your application.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        className={inputClasses}
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        placeholder=" "
                                    />
                                    <label className={labelClasses}>Full Name</label>
                                </div>

                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        className={inputClasses}
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        placeholder=" "
                                    />
                                    <label className={labelClasses}>Email Address</label>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="phone"
                                        className={inputClasses}
                                        value={form.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder=" "
                                    />
                                    <label className={labelClasses}>Phone Number</label>
                                </div>

                                <div className="relative">
                                    <select
                                        name="positionApplyingFor"
                                        className={`${inputClasses} appearance-none`}
                                        value={form.positionApplyingFor}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled></option>
                                        {jobs.map((job) => (
                                            <option key={job._id} value={job._id}>
                                                {job.title}
                                            </option>
                                        ))}
                                    </select>
                                    <label className={labelClasses}>Applying For</label>
                                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/30">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block mb-2 text-sm font-semibold text-black/70">
                                    Upload Resume *
                                </label>
                                <input
                                    type="file"
                                    name="resume"
                                    onChange={handleChange}
                                    accept=".pdf,.doc,.docx"
                                    required
                                    className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-black file:mr-4 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-primary focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 outline-none transition-all"
                                />
                                <p className="mt-2 text-xs text-black/50">
                                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                                </p>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-accent hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                                >
                                    {submitting ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} />
                                            Submitting...
                                        </>
                                    ) : (
                                        "Submit Application"
                                    )}
                                </button>
                            </div>
                        </form>
                    </Motion.div>
                </div>
            </section>
        </>
    );
};

export default Career;
