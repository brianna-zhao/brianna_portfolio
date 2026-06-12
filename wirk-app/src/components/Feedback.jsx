import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { feedback } from '../data/content'

// "Client Feedback & User Testing" + "Iteration & New Features" — the iteration
// before/after strip alongside the narrative.
export default function Feedback() {
  const paragraphs = feedback.body.split('\n\n')
  return (
    <section className="bg-bone py-24">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <SectionHeading eyebrow="04 — Iteration" title={feedback.title} align="left" />
        <Reveal delay={0.06} className="mt-1">
          <h3 className="font-cond text-subheading uppercase tracking-wide text-rose">{feedback.subtitle}</h3>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <Reveal className="rounded-card-lg border border-plum/10 bg-white p-5 shadow-card sm:p-7">
            <img
              src={feedback.image}
              alt="Wïrk iteration flow — early dashboards and tap-to-pay refined into the polished W-Bucks experience"
              loading="lazy"
              className="w-full"
            />
          </Reveal>
          <div className="flex flex-col gap-5">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="font-body text-[16px] leading-[1.8] text-plum/75">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
