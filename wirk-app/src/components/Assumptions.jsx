import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { assumptions } from '../data/content'

// "Customer Assumptions & Design Response" — long-form reflection on a soft
// pink panel, set as a comfortable reading column.
export default function Assumptions() {
  return (
    <section className="bg-gradient-to-b from-bone to-pink-wash py-24">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <SectionHeading eyebrow="05 — Reflection" title={assumptions.title} />
        <div className="mx-auto mt-12 max-w-prose">
          <div className="flex flex-col gap-5 rounded-card-lg border border-rose/15 bg-white/70 p-7 shadow-card backdrop-blur-sm sm:p-10">
            {assumptions.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="font-body text-[16px] leading-[1.85] text-plum/80">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
