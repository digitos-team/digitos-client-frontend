import { motion as Motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutSection from "../components/AboutSection";
import { Rocket, Eye, Lightbulb, Target, Lock, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Outcome Obsessed",
    detail: "We focus on measurable business impact—not vanity metrics.",
    icon: Target,
    gradient: "from-green-400/20 to-emerald-600/20",
    borderColor: "border-green-300/40",
    accentColor: "text-green-600",
    bgColor: "bg-green-50/50"
  },
  {
    title: "Transparent Delivery",
    detail: "Real-time dashboards, open communication, and zero guesswork.",
    icon: Zap,
    gradient: "from-orange-400/20 to-red-600/20",
    borderColor: "border-orange-300/40",
    accentColor: "text-orange-600",
    bgColor: "bg-orange-50/50"
  },
  {
    title: "Security First",
    detail: "Every build follows strict compliance, audits & shift-left security.",
    icon: Lock,
    gradient: "from-indigo-400/20 to-blue-600/20",
    borderColor: "border-indigo-300/40",
    accentColor: "text-indigo-600",
    bgColor: "bg-indigo-50/50"
  },
];

// animation presets
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const scaleCard = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
};

const About = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff7ea] to-[#fffaf0]">
        <Motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="container-grid space-y-3 sm:space-y-4 md:space-y-6 py-12 sm:py-16 md:py-20 text-center"
        >
          <Motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.4em] text-accent"
          >
            About Digitos IT Solutions Pvt. Ltd.
          </Motion.p>

          <Motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-primary leading-tight"
          >
            Building Future-Ready Software with AI, Automation & Engineering Excellence.
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mx-auto max-w-3xl text-sm sm:text-base md:text-lg text-black/70"
          >
            We help organizations reimagine processes, modernize legacy systems, and engineer high-performance digital products that scale effortlessly.
          </Motion.p>
        </Motion.div>
      </section>

      {/* HISTORY */}
      <Motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="page-section bg-white"
      >
        <div className="container-grid space-y-4 sm:space-y-6">
          <Motion.h2
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary"
          >
            Our Journey
          </Motion.h2>

          <Motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl text-sm sm:text-base md:text-lg text-black/70 leading-relaxed"
          >
            Founded in <strong>June 2024</strong> in Chhatrapati Sambhajinagar, Maharashtra, Digitos IT Solutions Pvt. Ltd.
            started as a small but focused digital engineering studio. Today, we partner with
            startups, SMBs, legal firms, and high-growth companies to build scalable, secure,
            and cost-efficient software solutions — powered by AI, automation & modern cloud architectures.
          </Motion.p>
        </div>
      </Motion.section>

      {/* MISSION / VISION / PURPOSE */}
      <section className="page-section bg-gradient-to-b from-[#fffaf0] to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <Motion.div
            className="absolute top-10 left-1/4 w-72 h-72 bg-accent/8 rounded-full blur-3xl"
            animate={{
              y: [0, 40, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <Motion.div
            className="absolute bottom-10 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container-grid relative z-10">
          {/* Section Header */}
          <Motion.div
            className="mb-6 sm:mb-8 md:mb-12 text-center space-y-2 sm:space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent">
              Core Pillars
            </p>
            <h2 className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-primary">
              Mission, Vision & Purpose
            </h2>
          </Motion.div>

          {/* Cards Grid */}
          <div className="grid gap-4 sm:gap-6 md:gap-6 md:grid-cols-3">
            {[
              {
                label: "Mission",
                title: "What Drives Us",
                text: "To empower businesses with intelligent, automation-first software that reduces operational friction and unlocks exponential growth.",
                icon: Rocket,
                gradient: "from-blue-400/20 to-blue-600/20",
                borderColor: "border-blue-300/40",
                accentColor: "text-blue-600",
                bgColor: "bg-blue-50/50"
              },
              {
                label: "Vision",
                title: "Where We're Going",
                text: "To become India's most trusted engineering partner for AI-powered digital transformation across global enterprises.",
                icon: Eye,
                gradient: "from-purple-400/20 to-purple-600/20",
                borderColor: "border-purple-300/40",
                accentColor: "text-purple-600",
                bgColor: "bg-purple-50/50"
              },
              {
                label: "Purpose",
                title: "Why We Exist",
                text: "To revolutionize industries with reliable, scalable, human-centric technology that delivers real-world impact.",
                icon: Lightbulb,
                gradient: "from-yellow-400/20 to-amber-600/20",
                borderColor: "border-yellow-300/40",
                accentColor: "text-amber-600",
                bgColor: "bg-yellow-50/50"
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -12 }}
                  className={`group relative rounded-2xl sm:rounded-3xl backdrop-blur-md border-2 ${item.borderColor} ${item.bgColor} p-5 sm:p-6 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 group-hover:opacity-60 transition duration-300`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <Motion.div
                      className={`inline-flex rounded-xl sm:rounded-2xl p-2 sm:p-3 mb-4 sm:mb-6 ${item.bgColor} border-2 ${item.borderColor}`}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className={`${item.accentColor} w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7`} />
                    </Motion.div>

                    {/* Label */}
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold text-black/60 group-hover:text-primary transition duration-300">
                      {item.label}
                    </p>

                    {/* Title */}
                    <h3 className={`mt-2 sm:mt-4 font-display text-base sm:text-lg md:text-xl font-bold ${item.accentColor} group-hover:text-primary transition duration-300`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-black/75 leading-relaxed font-medium">
                      {item.text}
                    </p>

                    {/* Decorative line */}
                    <Motion.div
                      className={`mt-4 sm:mt-6 h-0.5 sm:h-1 bg-gradient-to-r ${item.gradient} rounded-full`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.3, duration: 0.8 }}
                    />
                  </div>

                  {/* Hover shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br from-white via-transparent to-transparent rounded-2xl sm:rounded-3xl" />
                </Motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="page-section bg-gradient-to-b from-white to-[#fffaf0] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <Motion.div
            className="absolute top-0 right-1/4 w-72 h-72 bg-green-300/8 rounded-full blur-3xl"
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <Motion.div
            className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-300/8 rounded-full blur-3xl"
            animate={{
              y: [0, 40, 0],
              x: [0, -30, 0],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container-grid relative z-10">
          {/* Section Header */}
          <Motion.div
            className="mb-6 sm:mb-8 md:mb-12 text-center space-y-2 sm:space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent">
              Core Values
            </p>
            <h2 className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-primary">
              How We Work
            </h2>
          </Motion.div>

          {/* Cards Grid */}
          <Motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="grid gap-4 sm:gap-6 md:gap-6 md:grid-cols-3"
          >
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Motion.article
                  key={value.title}
                  variants={fadeUp}
                  transition={{ duration: 0.45 }}
                  whileHover={{ y: -12 }}
                  className={`group relative rounded-2xl sm:rounded-3xl backdrop-blur-md border-2 ${value.borderColor} ${value.bgColor} p-5 sm:p-6 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-40 group-hover:opacity-60 transition duration-300`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <Motion.div
                      className={`inline-flex rounded-xl sm:rounded-2xl p-2 sm:p-3 mb-4 sm:mb-6 ${value.bgColor} border-2 ${value.borderColor}`}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className={`${value.accentColor} w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7`} />
                    </Motion.div>

                    {/* Label */}
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold text-black/60 group-hover:text-primary transition duration-300">
                      We  Value
                    </p>

                    {/* Title */}
                    <h3 className={`mt-2 sm:mt-4 font-display text-base sm:text-lg md:text-xl font-bold ${value.accentColor} group-hover:text-primary transition duration-300`}>
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-black/75 leading-relaxed font-medium">
                      {value.detail}
                    </p>

                    {/* Decorative line */}
                    <Motion.div
                      className={`mt-4 sm:mt-6 h-0.5 sm:h-1 bg-gradient-to-r ${value.gradient} rounded-full`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.3, duration: 0.8 }}
                    />
                  </div>

                  {/* Hover shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br from-white via-transparent to-transparent rounded-2xl sm:rounded-3xl" />
                </Motion.article>
              );
            })}
          </Motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
