import { motion as Motion } from "framer-motion";
import { useState, useRef } from "react";
import { addClientMessage } from "../api/api";

const inputClasses = "peer w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-black focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300 outline-none transition-all";
const labelClasses = "pointer-events-none absolute left-4 top-3 text-black/50 transition-all peer-focus:-top-3 peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs peer-focus:text-yellow-600 peer-valid:-top-3 peer-valid:bg-white peer-valid:px-2 peer-valid:text-xs";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError("");

    // ✅ YOUR EXACT APPROACH - FormData → Object
    let formData = new FormData(e.target);
    let reqData = Object.fromEntries(formData.entries());

    // ✅ Frontend validation matching schema (5 fields only)
    const requiredFields = ['name', 'email', 'phone', 'company', 'message'];
    const missing = requiredFields.filter(field => !reqData[field] || reqData[field].trim() === '');
    
    if (missing.length > 0) {
      setSubmitError(`Please fill: ${missing.join(', ')}`);
      setLoading(false);
      return;
    }

    console.log('📤 Sending:', reqData);

    try {
      await addClientMessage(reqData);
      alert("✅ Message sent successfully!");
      e.target.reset();
    } catch (err) {
      console.error('❌ Error:', err);
      setSubmitError(err.response?.data?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-section bg-gradient-to-br from-yellow-50 to-white">
      <div className="container-grid max-w-4xl mx-auto">
        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center font-display text-4xl md:text-5xl font-semibold text-black"
        >
          Let's Talk
          <span className="block mt-2 h-1 w-20 bg-yellow-500 mx-auto rounded-full"></span>
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center max-w-2xl mx-auto text-black/70 text-lg mt-3"
        >
          Have a project in mind? Let's build something remarkable together.
        </Motion.p>

        <Motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid gap-6 md:grid-cols-2 bg-white p-8 rounded-3xl shadow-xl border border-black/10"
        >
          {/* ✅ 5 FIELDS MATCHING SCHEMA EXACTLY */}
          <div className="relative">
            <input type="text" name="name" className={inputClasses} required />
            <label className={labelClasses}>Full Name</label>
          </div>

          <div className="relative">
            <input type="email" name="email" className={inputClasses} required />
            <label className={labelClasses}>Email Address</label>
          </div>

          <div className="relative">
            <input type="tel" name="phone" className={inputClasses} required />
            <label className={labelClasses}>Phone Number</label>
          </div>

          <div className="relative">
            <input type="text" name="company" className={inputClasses} required />
            <label className={labelClasses}>Company Name</label>
          </div>

          <div className="relative md:col-span-2">
            <textarea name="message" rows="4" className={`${inputClasses} resize-none`} required />
            <label className={labelClasses}>Your Message</label>
          </div>

          {submitError && (
            <Motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:col-span-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
            >
              {submitError}
            </Motion.div>
          )}

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="md:col-span-2 text-center"
          >
            <button 
              type="submit" 
              disabled={loading}
              className="rounded-full bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed text-black font-semibold px-10 py-3 shadow-md transition-all hover:shadow-lg w-full md:w-auto"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </Motion.div>
        </Motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
