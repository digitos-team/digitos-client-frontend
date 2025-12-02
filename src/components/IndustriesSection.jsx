import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const industries = [
  {
    title: "Hospital Management",
    description: "Comprehensive systems for patient records, appointments, and hospital administration.",
    icon: "🏥",
    path: "/industries/hospital-management"
  },
  {
    title: "Student Portal",
    description: "Unified platforms for student enrollment, grades, and academic resources.",
    icon: "🎓",
    path: "/industries/student-portal"
  },
  {
    title: "E-commerce",
    description: "Scalable online stores with seamless checkout and inventory management.",
    icon: "🛒",
    path: "/industries/ecommerce"
  },
  {
    title: "Ticket Raising Tool",
    description: "Efficient support ticket systems for streamlined issue resolution.",
    icon: "🎫",
    path: "/industries/ticket-raising-tool"
  },
  {
    title: "Financial Services",
    description: "Digital banking, wealth platforms, and compliance automation.",
    icon: "💳",
    path: "/industries/financial-services"
  },
  {
    title: "Mobility",
    description: "Fleet telematics, connected vehicles, and EV charging networks.",
    icon: "🚗",
    path: "/industries/mobility"
  },
   {
    title: "Pathology",
    description: "Lab report automation, sample tracking, and diagnostic workflow management.",
    icon: "🧬",
    path: "/industries/pathology"
  }
];

const IndustriesSection = () => {
  const scrollContainerRef = useRef(null);

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

  const cardVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="page-section bg-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#fdf7ed]/30 to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="container-grid mb-12 md:mb-16">
          <Motion.div
            className="space-y-3 md:space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Motion.p
              variants={itemVariants}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-accent"
            >
              Industries
            </Motion.p>
            <Motion.h2
              variants={itemVariants}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary"
            >
              Deep domain expertise across regulated and high-growth sectors.
            </Motion.h2>
            <Motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-black/70 max-w-3xl leading-relaxed"
            >
              We embed subject-matter experts and solution architects to tailor roadmaps to your industry's compliance and scaling needs.
            </Motion.p>
            <Motion.p
              variants={itemVariants}
              className="text-sm text-black/50 flex items-center gap-2 pt-2"
            >
              <ChevronRight size={16} className="text-accent" />
              Scroll horizontally to explore more industries
            </Motion.p>
          </Motion.div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          className="relative overflow-hidden w-full"
        >
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div
              className="flex gap-6 md:gap-8 px-4 md:px-6 min-w-max"
            >
              {industries.map((industry, index) => (
                <Link
                  key={industry.title}
                  to={industry.path}
                  className="block"
                >
                  <Motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{
                      y: -12,
                    }}
                    className="group flex-shrink-0 w-72 md:w-80 rounded-3xl border-2 border-black/8 bg-white p-8 shadow-sm transition-all duration-300 cursor-pointer hover:border-accent/40 hover:shadow-lg scroll-snap-align-start"
                  >
                    {/* Icon */}
                    <Motion.div
                      className="text-5xl md:text-6xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {industry.icon}
                    </Motion.div>

                    {/* Title Badge */}
                    <p className="text-xs md:text-xs uppercase tracking-[0.4em] text-accent font-semibold mb-3">
                      {industry.title}
                    </p>

                    {/* Card Title */}
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-primary">
                      {industry.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm md:text-base text-black/70 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Arrow Indicator */}
                    <Motion.div
                      className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition duration-300"
                      whileHover={{ x: 8 }}
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide">Explore</span>
                      <ArrowRight size={16} />
                    </Motion.div>

                    {/* Hover line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  </Motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Scroll Indicator Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Scroll Instructions */}
        <div className="container-grid mt-8 text-center">
          <p className="text-xs text-black/40">
            ← Scroll to explore more →
          </p>
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default IndustriesSection;
