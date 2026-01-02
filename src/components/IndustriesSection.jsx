import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";

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
    title: "Agricultural Website",
    description: "Manage products and customer interactions with simplicity and efficiency.",
    icon: "📦",
    path: "/industries/agricultural-website"
  }
];

const IndustriesSection = () => {
  return (
    <section className="page-section bg-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#fdf7ed]/30 to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="container-grid mb-8 md:mb-16">
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent">
              Industries
            </p>
            <h2 className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-primary">
              Deep domain expertise across regulated and high-growth sectors.
            </h2>
            <p className="text-sm md:text-lg text-black/70 max-w-3xl leading-relaxed">
              We embed subject-matter experts and solution architects to tailor roadmaps to your industry's compliance and scaling needs.
            </p>
            <p className="text-xs sm:text-sm text-black/50 flex items-center gap-2 pt-1 sm:pt-2">
              <ChevronRight size={14} className="text-accent sm:w-4 sm:h-4" />
              Scroll horizontally to explore more industries
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative overflow-hidden w-full">
          <div
            className="flex overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="flex gap-4 sm:gap-6 md:gap-8 px-3 sm:px-4 md:px-6 min-w-max">
              {industries.map((industry) => (
                <Link
                  key={industry.title}
                  to={industry.path}
                  className="block"
                >
                  <div className="group flex-shrink-0 w-56 sm:w-64 md:w-80 rounded-2xl sm:rounded-3xl border-2 border-black/8 bg-white p-5 sm:p-6 md:p-8 shadow-sm transition-all duration-300 cursor-pointer hover:border-accent/40 hover:shadow-lg scroll-snap-align-start">
                    {/* Icon */}
                    <div className="text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>

                    {/* Title Badge */}
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-accent font-semibold mb-2 sm:mb-3">
                      {industry.title}
                    </p>

                    {/* Card Title */}
                    <h3 className="font-display text-base sm:text-lg md:text-2xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                      {industry.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-black/70 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Arrow Indicator */}
                    <div className="mt-4 sm:mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide">Explore</span>
                      <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                    </div>

                    {/* Hover line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Scroll Indicator Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Scroll Instructions */}
        <div className="container-grid mt-5 sm:mt-8 text-center">
          <p className="text-[10px] sm:text-xs text-black/40">
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
