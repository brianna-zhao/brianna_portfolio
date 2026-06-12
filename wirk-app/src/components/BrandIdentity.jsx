import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import Wordmark from './Wordmark'
import { brand } from '../data/content'

// "Brand Identity" — the palette swatches, wordmark and type pairing, rebuilt
// as live components with the brand board shown for reference.
export default function BrandIdentity() {
  return (
    <section className="bg-bone py-24">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <SectionHeading eyebrow="07 — System" title={brand.title} accent />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* live brand panel */}
          <div className="flex flex-col gap-8">
            <Reveal>
              <Wordmark className="text-[clamp(64px,9vw,108px)]" color="#14091F" accent="#BE2E5C" smile />
            </Reveal>

            <Reveal delay={0.06} className="grid grid-cols-5 overflow-hidden rounded-card shadow-card">
              {brand.swatches.map((s) => (
                <div key={s.name} className="flex aspect-[3/4] flex-col justify-end p-3" style={{ background: s.hex }}>
                  <span className={`font-cond text-[12px] font-semibold uppercase tracking-wide ${s.hex === '#E9E9E9' ? 'text-plum' : 'text-white/90'}`}>
                    {s.name}
                  </span>
                  <span className={`font-body text-[10px] ${s.hex === '#E9E9E9' ? 'text-plum/60' : 'text-white/55'}`}>
                    {s.hex}
                  </span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.12} className="rounded-card border border-plum/10 bg-white p-6 shadow-card">
              <p className="font-cond text-[26px] font-bold uppercase tracking-wide text-plum">{brand.type.display}</p>
              <p className="mt-2 font-body text-[15px] leading-relaxed text-plum/70">
                Headlines run in a condensed geometric bold; body copy is set in {brand.type.body} for clean,
                financial-app legibility.
              </p>
            </Reveal>
          </div>

          {/* reference board */}
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-card-lg border border-plum/10 shadow-card">
              <img
                src={brand.image}
                alt="Wïrk brand identity board — palette, wordmark and typography"
                loading="lazy"
                className="w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
