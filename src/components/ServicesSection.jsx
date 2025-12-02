import { useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Layers,
  LineChart,
  Cpu,
  ShieldCheck,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "App Development",
    description:
      "Custom mobile applications for iOS and Android, built for performance and scalability.",
    icon: Code2,
    link: "/services/app-development",
  },
  {
    title: "Software Development",
    description:
      "End-to-end software solutions tailored to your business needs, from web apps to enterprise systems.",
    icon: Layers,
    link: "/services/software-development",
  },
  {
    title: "Payroll Management System",
    description:
      "Automated payroll processing, tax compliance, and salary slip generation for seamless HR operations.",
    icon: LineChart,
    link: "/services/payroll-management",
  },
  {
    title: "ERP Solutions",
    description:
      "Integrated Enterprise Resource Planning systems to streamline operations and improve efficiency.",
    icon: Layers,
    link: "/services/erp-solutions",
  },

  {
    title: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure and automated CI/CD pipelines to accelerate deployment and reliability.",
    icon: Rocket,
    link: "/services/cloud-devops",
  },
  {
    title: "AI Tool Development",
    description:
      "Custom AI tools and applications to automate workflows and improve productivity.",
    icon: Rocket,
    link: "/services/ai-tool-development",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const ServicesSection = ({ fullList = true }) => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = cardRefs.current.filter(Boolean);
    
    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
          markers: false,
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const list = fullList ? services : services.slice(0, 3);

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
    <section className="page-section bg-gradient-to-b from-[#fdf7ed] to-[#fff2dd] relative overflow-hidden">

      {/* Animated Glow Effects */}
      <Motion.div 
        className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        animate={{
          y: [0, 30, -30, 0],
          opacity: [0.3, 0.5, 0.3, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container-grid relative z-10">
        {/* Heading */}
        <Motion.div 
          className="mb-12 md:mb-16 max-w-3xl space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Motion.p 
            variants={itemVariants}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-accent"
          >
            Services
          </Motion.p>
          <Motion.h2 
            variants={itemVariants}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary"
          >
            Integrated teams shipping high-impact software products.
          </Motion.h2>
          <Motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-black/70 leading-relaxed"
          >
            Every engagement is led by seasoned product strategists, experience
            designers, and platform engineers to shorten feedback loops and
            accelerate outcomes.
          </Motion.p>
        </Motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link key={service.title} to={service.link}>
                <Motion.article
                  ref={(el) => {
                    if (el) cardRefs.current[index] = el;
                  }}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={index}
                  whileHover={{ 
                    y: -12,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }}
                  className="group relative rounded-3xl border-2 border-white/60 bg-white/50 backdrop-blur-md 
                             p-6 md:p-8 shadow-[0_0_20px_rgba(0,0,0,0.07)] 
                             transition-all duration-300 cursor-pointer
                             hover:border-accent/60 hover:bg-white/70"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition bg-gradient-to-br from-white via-transparent to-transparent"></div>

                  {/* Icon Container */}
                  <Motion.div 
                    className="mb-6 inline-flex rounded-2xl bg-accent/10 p-3 text-primary transition-all duration-300 group-hover:bg-accent/20 group-hover:shadow-md"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 10,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={28} className="group-hover:scale-110 transition duration-300" />
                  </Motion.div>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-primary">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-black/70 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Animated Learn More */}
                  <Motion.span 
                    className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-primary group-hover:text-accent transition duration-300"
                    initial={{ x: 0 }}
                    whileHover={{ x: 8 }}
                  >
                    Learn more
                    <Motion.span
                      className="block h-[2.5px] w-6 bg-primary rounded-full transition-all group-hover:bg-accent group-hover:w-8"
                      whileHover={{ width: "32px" }}
                    />
                  </Motion.span>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </Motion.article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
