import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import PhoneFrame from './PhoneFrame'
import { abTest } from '../data/content'

// "A/B Test & Iteration" — Version A vs Version B dashboards side by side,
// joined by a "vs" marker, with the testing note beneath.
export default function ABTest() {
  return (
    <section className="bg-gradient-to-b from-pink-wash to-bone py-24">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <SectionHeading eyebrow="03 — Validation" title={abTest.title} />

        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {abTest.versions.map((v, i) => (
            <Reveal key={v.label} delay={i * 0.12} className="flex flex-col items-center">
              <span className="mb-4 rounded-full bg-plum px-4 py-1.5 font-cond text-[14px] font-semibold uppercase tracking-[0.2em] text-pink">
                {v.label}
              </span>
              <PhoneFrame src={v.image} width={240} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mx-auto mt-12 max-w-prose text-center">
          <p className="font-body text-[16px] leading-relaxed text-plum/70">{abTest.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
