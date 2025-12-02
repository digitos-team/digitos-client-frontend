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
                <div className="container-grid space-y-6">

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                        Services
                    </p>

                    <h1 className="font-display text-4xl font-semibold text-primary md:text-5xl">
                        Full lifecycle delivery from strategy to run.
                    </h1>

                    <Motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-3xl text-lg text-black/70"
                    >
                        Digitos deploys dedicated squads with product, design, engineering, QA, and
                        DevOps to own critical initiatives end-to-end. We work in transparent
                        increments with instrumentation across business and technical KPIs.
                    </Motion.p>
                </div>
            </section>

            <ServicesSection />

          <section className="page-section bg-[#fffaf0] py-16">
  <div className="container-grid grid gap-8 md:grid-cols-3">
    {phases.map((phase) => (
      <Motion.div
        key={phase.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}

        className="
          group
          rounded-3xl 
          border border-black/10 
          bg-white 
          p-8 
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
        <p className="text-xs uppercase tracking-[0.4em] text-black/40">
          Phase
        </p>

        {/* TITLE */}
        <h3 className="
            mt-4 font-display text-2xl text-black 
            relative w-fit
            after:content-[''] 
            after:block 
            after:h-[3px] 
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
        <p className="mt-3 text-black/70 leading-relaxed">
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
