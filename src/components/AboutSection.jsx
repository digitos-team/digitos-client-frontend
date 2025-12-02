import { useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutImage =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80";

const AboutSection = ({ compact = false }) => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current || !sectionRef.current) return;

    const gsapContext = gsap.context(() => {
      // Parallax background effect
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
          markers: false,
        },
        backgroundPosition: "50% 25%",
        ease: "none",
      });

      // Card float animation
      gsap.to(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 60%",
          end: "center center",
          scrub: false,
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
      });
    });

    return () => gsapContext.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={aboutImage}
          className="w-full h-full object-cover"
          alt="About Digitos"
        />

        {/* Soft Black + Yellow Tint Overlay */}
        <Motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-yellow-900/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="relative container-grid flex justify-center">
        {/* Glass Card */}
        <Motion.div
          ref={cardRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl w-full rounded-3xl 
                     bg-white/10 backdrop-blur-xl 
                     p-8 md:p-12 shadow-2xl border border-white/20
                     hover:border-white/40 transition duration-500"
        >
          <Motion.p 
            variants={itemVariants}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-accent"
          >
            About Us
          </Motion.p>

          <Motion.h2 
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mt-4"
          >
            Strategists, designers, and engineers aligned around impact.
          </Motion.h2>

          <Motion.p 
            variants={itemVariants}
            className="mt-6 text-base md:text-lg text-white/85 leading-relaxed"
          >
            Digitos is a global digital innovation company headquartered in India with
            nearshore talent hubs across Asia and Europe. We assemble cross-functional
            teams that blend design thinking, product strategy, and full-stack
            engineering to accelerate transformation programs.
          </Motion.p>

          <Motion.p 
            variants={itemVariants}
            className="mt-4 text-white/70 text-base md:text-lg leading-relaxed"
          >
            We partner with enterprises in finance, healthcare, retail, mobility, and
            emerging industries to modernize systems, launch digital ventures, and
            reimagine customer experiences.
          </Motion.p>

          {/* Stats */}
          {!compact && (
            <Motion.div 
              variants={containerVariants}
              className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { label: "NPS", value: "72" },
                { label: "Projects Delivered", value: "50+" },
                { label: "Client Retention", value: "96%" },
              ].map((stat, index) => (
                <Motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -8, borderColor: "rgba(255, 255, 255, 0.6)" }}
                  className="rounded-2xl 
                             bg-white/10 backdrop-blur-md 
                             p-6 text-center shadow-lg 
                             border border-accent/30
                             transition duration-300 cursor-pointer
                             hover:bg-white/15"
                >
                  <p className="text-xs md:text-sm uppercase tracking-wide text-white/60 font-semibold">
                    {stat.label}
                  </p>
                  <Motion.p 
                    className="font-display text-3xl md:text-4xl font-semibold text-accent mt-3"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.value}
                  </Motion.p>
                </Motion.div>
              ))}
            </Motion.div>
          )}
        </Motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
