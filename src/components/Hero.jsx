import { motion as Motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-[880px] sm:h-[90vh] overflow-hidden flex items-start sm:items-center justify-center pt-24 sm:pt-0">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover hero-video"
        src="https://videos.pexels.com/video-files/854088/854088-hd_1920_1080_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 container-grid flex flex-col gap-8 px-6 text-white max-w-4xl">

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-accent"
        >
          Digital Engineering Partner
        </Motion.p>

        <Motion.h1
          initial={{ opacity: 0, y: 20, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Building software that moves businesses forward.
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-lg md:text-xl text-white/85 max-w-2xl"
        >
          Digitos architects future-ready digital products for ambitious brands
          worldwide. From strategy and design to engineering and launch, we ship
          measurable outcomes.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          {/* Primary Button */}
          <Motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/services"
              className="group rounded-full bg-accent px-8 py-3 text-center font-semibold text-primary transition duration-300 hover:shadow-lg hover:shadow-accent/50 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Explore Services
              <Motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight size={18} />
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
              className="group rounded-full bg-white/20 px-8 py-3 text-center font-semibold
              text-white border-2 border-white backdrop-blur-lg
              transition duration-300 hover:bg-white/30 hover:shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Why Digitos
              <Motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </Motion.span>
            </Link>
          </Motion.div>
        </Motion.div>

        {/* Stats Row */}
        <div className="flex items-center gap-6 text-sm text-white/80 mt-2">
          <div>
            <p className="font-display text-3xl font-semibold">3+</p>
            <p>Years Delivering</p>
          </div>
          <div>
            <p className="font-display text-3xl font-semibold">15+</p>
            <p>Enterprise Clients</p>
          </div>
          <div>
            <p className="font-display text-3xl font-semibold">20+</p>
            <p>Specialists</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
