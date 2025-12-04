import { motion as Motion } from 'framer-motion'
import ServicesSection from '../components/ServicesSection'

const phases = [
  {
    title: 'Discover & Define',
    detail:
      'Stakeholder workshops, customer research, solution architecture, and ROI modeling within 3 weeks.',
  },
  {
    title: 'Design & Build',
    detail:
      'Agile pods iterate on prioritized journeys with a design system, automated testing, and continuous delivery pipelines.',
  },
  {
    title: 'Launch & Scale',
    detail:
      'Playbooks for go-live, observability, and growth optimization backed by 24/7 SRE and support coverage.',
  },
]

const Services = () => {
  return (
    <>
      <section className="page-section bg-white">
        <div className="container-grid space-y-3 sm:space-y-4 md:space-y-6">

          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent">
            Services
          </p>

          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">
            Full lifecycle delivery from strategy to run.
          </h1>

          <Motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl text-sm sm:text-base md:text-lg text-black/70"
          >
            Digitos deploys dedicated squads with product, design, engineering, QA, and
            DevOps to own critical initiatives end-to-end. We work in transparent
            increments with instrumentation across business and technical KPIs.
          </Motion.p>
        </div>
      </section>

      <ServicesSection />

      <section className="page-section bg-[#fffaf0] py-10 sm:py-12 md:py-16">
        <div className="container-grid grid gap-5 sm:gap-6 md:gap-8 md:grid-cols-3">
          {phases.map((phase) => (
            <Motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}

              className="
          group
          rounded-2xl sm:rounded-3xl 
          border border-black/10 
          bg-white 
          p-5 sm:p-6 md:p-8 
          shadow-sm 
          transition-all 
          duration-300 
          hover:-translate-y-3 
          hover:shadow-xl 
          hover:rotate-[1deg]
          hover:border-yellow-400
        "
            >

              {/* PHASE LABEL */}
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-black/40">
                Phase
              </p>

              {/* TITLE */}
              <h3 className="
            mt-3 sm:mt-4 font-display text-lg sm:text-xl md:text-2xl text-black 
            relative w-fit
            after:content-[''] 
            after:block 
            after:h-[2px] sm:after:h-[3px] 
            after:w-0 
            after:bg-yellow-400 
            after:transition-all 
            after:duration-300 
            group-hover:after:w-full
          "
              >
                {phase.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-black/70 leading-relaxed">
                {phase.detail}
              </p>

            </Motion.div>
          ))}
        </div>
      </section>

    </>
  )
}

export default Services
