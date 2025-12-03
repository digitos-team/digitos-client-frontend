import { Link } from "react-router-dom";
import {
  Code2,
  Layers,
  LineChart,
  Cpu,
  ShieldCheck,
  Rocket,
} from "lucide-react";

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

const ServicesSection = ({ fullList = true }) => {
  const list = fullList ? services : services.slice(0, 3);

  return (
    <section className="page-section bg-gradient-to-b from-[#fdf7ed] to-[#fff2dd] relative overflow-hidden">
      <div className="container-grid relative z-10">
        {/* Heading */}
        <div className="mb-12 md:mb-16 max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Services
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">
            Integrated teams shipping high-impact software products.
          </h2>
          <p className="text-base md:text-lg text-black/70 leading-relaxed">
            Every engagement is led by seasoned product strategists, experience
            designers, and platform engineers to shorten feedback loops and
            accelerate outcomes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.title} to={service.link}>
                <article
                  className="group relative rounded-3xl border-2 border-white/60 bg-white/50 backdrop-blur-md 
                      p-6 md:p-8 shadow-[0_0_20px_rgba(0,0,0,0.07)] 
                      transition-all duration-300 cursor-pointer
                      hover:border-accent/60 hover:bg-white/70 hover:shadow-lg"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-white via-transparent to-transparent"></div>

                  {/* Icon Container */}
                  <div className="mb-6 inline-flex rounded-2xl bg-accent/10 p-3 text-primary transition-all duration-300 group-hover:bg-accent/20 group-hover:shadow-md">
                    <Icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-black/70 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <span className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    Learn more
                    <span className="block h-[2.5px] w-6 bg-primary rounded-full transition-all duration-300 group-hover:bg-accent group-hover:w-8" />
                  </span>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
