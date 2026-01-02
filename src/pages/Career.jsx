import { useState, useRef } from "react";
import { toast } from 'react-hot-toast';
import { Loader2 } from "lucide-react";
import { applyForJob } from "../api/api";

const inputClasses =
  "peer w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-black focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 outline-none transition-all";

const labelClasses =
  "pointer-events-none absolute left-4 top-3 text-black/50 transition-all peer-focus:-top-3 peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs peer-focus:text-yellow-600 peer-valid:-top-3 peer-valid:bg-white peer-valid:px-2 peer-valid:text-xs";

const Career = () => {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });

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
      toast.error("Please upload your resume");
      return;
    }

    try {
      setSubmitting(true);

      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("message", form.message);
      formData.append("resume", form.resume);

      await applyForJob(formData);
      toast.success("Application submitted successfully! We'll get back to you soon.");
      setForm({ name: "", email: "", phone: "", message: "", resume: null });

      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error(error.message || "There was an error submitting your application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff7ea] to-[#fffaf0] pt-16 pb-8 sm:pt-20 sm:pb-10 md:pt-32 md:pb-20">
        <div className="container-grid text-center relative z-10">
          <h1 className="mt-2 sm:mt-4 font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-primary leading-tight">
            Build the Future With Us
          </h1>
          <p className="mx-auto mt-3 sm:mt-4 md:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-black/70">
            We are always looking for passionate individuals who want to make an
            impact. Send us your resume and let's see how we can work together.
          </p>
        </div>
      </section>

      <section ref={formRef} className="page-section bg-white">
        <div className="container-grid max-w-3xl">
          <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 md:p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="mb-5 sm:mb-6 md:mb-8 text-center">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-primary">
                Apply Now
              </h2>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-black/60">
                Fill in your details below to submit your application.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
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

              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
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
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  className={`${inputClasses} min-h-[120px]`}
                  value={form.message}
                  onChange={handleChange}
                  placeholder=" "
                ></textarea>
                <label className={labelClasses}>Message (Optional)</label>
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
                  className="rounded-full bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:bg-accent hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
