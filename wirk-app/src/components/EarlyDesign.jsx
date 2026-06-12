import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { earlyDesign } from '../data/content'

// "Wireframe & Early Design" — section copy + the early-wireframe frame strip.
export default function EarlyDesign() {
  return (
    <section className="bg-bone py-24">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <SectionHeading eyebrow="02 — Foundations" title={earlyDesign.title} align="left" />
        <Reveal delay={0.08} className="mt-4 max-w-prose">
          <p className="font-body text-[17px] leading-relaxed text-plum/70">{earlyDesign.body}</p>
        </Reveal>
        <Reveal delay={0.12} className="mt-12">
          <div className="rounded-card-lg border border-plum/10 bg-white p-6 shadow-card sm:p-10">
            <img
              src={earlyDesign.image}
              alt="Early Wïrk wireframes — Hello dashboard, tap-to-pay, and Wïrk Units confirmation"
              loading="lazy"
              className="mx-auto w-full max-w-[920px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
