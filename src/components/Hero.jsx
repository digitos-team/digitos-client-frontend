import { motion as Motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// import heroimage from "../assets/herosectionimg.jpeg";
import herosection from "../assets/herosection.jpeg";
const Hero = () => {
  return (
    <section className="relative w-full h-[650px] sm:h-[85vh] overflow-hidden flex items-center justify-center">

      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover hero-image"
        src={herosection}
        alt="Hero Background"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 container-grid flex flex-col gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 text-white max-w-4xl">

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent"
        >
          Digital Engineering Partner
        </Motion.p>

        <Motion.h1
          initial={{ opacity: 0, y: 20, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Building software that moves businesses forward.
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-sm sm:text-base md:text-xl text-white/85 max-w-2xl"
        >
          Digitos architects future-ready digital products for ambitious brands
          worldwide. From strategy and design to engineering and launch, we ship
          measurable outcomes.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col gap-3 sm:gap-4 sm:flex-row"
        >
          {/* Primary Button */}
          <Motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/services"
              className="group rounded-full bg-accent px-5 sm:px-8 py-2.5 sm:py-3 text-center text-sm sm:text-base font-semibold text-primary transition duration-300 hover:shadow-lg hover:shadow-accent/50 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Explore Services
              <Motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Motion.span>
            </Link>
          </Motion.div>

          {/* Glass Button */}
          <Motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/about"
              className="group rounded-full bg-white/20 px-5 sm:px-8 py-2.5 sm:py-3 text-center text-sm sm:text-base font-semibold
              text-white border-2 border-white backdrop-blur-lg
              transition duration-300 hover:bg-white/30 hover:shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Why Digitos
              <Motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              >
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Motion.span>
            </Link>
          </Motion.div>
        </Motion.div>

        {/* Stats Row */}
        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/80 mt-2">
          <div>
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-semibold">3+</p>
            <p className="text-xs sm:text-sm">Years Delivering</p>
          </div>
          <div>
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-semibold">15+</p>
            <p className="text-xs sm:text-sm">Enterprise Clients</p>
          </div>
          <div>
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-semibold">20+</p>
            <p className="text-xs sm:text-sm">Specialists</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
