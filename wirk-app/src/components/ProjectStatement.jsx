import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { projectStatement as ps } from '../data/content'

// "Project Statement" + "Key Features" — dark intro block sitting between the
// hero and the persona, matching the Figma artboard order.
export default function ProjectStatement() {
  const paragraphs = ps.body.split('\n\n')
  return (
    <section className="bg-plum py-24">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          {/* statement */}
          <div>
            <SectionHeading title={ps.title} align="left" light />
            <div className="mt-6 flex flex-col gap-4">
              {paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className="whitespace-pre-line font-body text-[16px] leading-[1.8] text-pink/75">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* key features card */}
          <Reveal delay={0.1}>
            <div className="rounded-card-lg border border-pink/15 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-8">
              <h3 className="font-cond text-subheading uppercase tracking-wide text-rose">{ps.featuresTitle}</h3>
              <ul className="mt-5 flex flex-col gap-4">
                {ps.features.map((f, i) => (
                  <li key={i} className="flex gap-3 font-body text-[15px] leading-relaxed text-pink/80">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
