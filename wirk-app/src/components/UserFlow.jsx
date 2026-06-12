import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { userFlow } from '../data/content'

// A real, built flow diagram (not an image) for the "User Flow & Possible
// Impact" section: numbered step chips connected by rose arrows.
export default function UserFlow() {
  return (
    <section className="relative overflow-hidden bg-plum py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #F0B8CC 1px, transparent 0)', backgroundSize: '28px 28px' }} />
      <div className="relative mx-auto max-w-content px-6 sm:px-10">
        <SectionHeading eyebrow="01 — Flow" title={userFlow.title} align="left" light />

        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-stretch">
          {userFlow.steps.map((step, i) => (
            <div key={step.label} className="flex flex-1 flex-col items-stretch gap-4 lg:flex-row lg:items-center">
              <Reveal delay={i * 0.08} className="flex-1">
                <div className="flex h-full flex-col gap-2 rounded-card border border-pink/15 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors hover:border-rose/60">
                  <span className="font-cond text-[13px] font-semibold uppercase tracking-[0.2em] text-rose">
                    Step {i + 1}
                  </span>
                  <span className="font-cond text-[22px] font-semibold uppercase tracking-wide text-pink">
                    {step.label}
                  </span>
                  <span className="font-body text-[14px] leading-relaxed text-pink/65">{step.desc}</span>
                </div>
              </Reveal>
              {i < userFlow.steps.length - 1 && (
                <motion.svg
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2 }}
                  className="mx-auto h-6 w-6 flex-shrink-0 rotate-90 text-rose lg:rotate-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              )}
            </div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 max-w-3xl">
          <p className="border-l-2 border-rose pl-5 font-body text-[16px] leading-relaxed text-pink/75">
            <span className="font-cond uppercase tracking-[0.2em] text-rose">Possible impact — </span>
            {userFlow.impact}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
