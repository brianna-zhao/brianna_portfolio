import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { persona as p } from '../data/content'

function FloatDeco({ src, className, delay = 0 }) {
  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{ y: [0, -10, 0] }}
      transition={{ y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay }, opacity: { duration: 0.6 } }}
      draggable="false"
    />
  )
}

// "User Persona" (SpongeBob) + "App Behaviour & UX Opportunities".
// Dark playful section that mirrors the Figma artboard, with floating
// Bikini-Bottom flower & jellyfish accents.
export default function Persona() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-plum to-ink py-24">
      <FloatDeco src={p.flower} className="left-[3%] top-[12%] w-20 opacity-70 sm:w-28" />
      <FloatDeco src={p.flower} className="right-[5%] top-[40%] w-16 opacity-50" delay={1.2} />
      <FloatDeco src={p.jellyfish} className="right-[8%] top-[6%] w-16 opacity-80 sm:w-20" delay={0.6} />

      <div className="relative mx-auto max-w-content px-6 sm:px-10">
        <SectionHeading eyebrow="Meet the user" title={p.title} align="left" light />

        {/* persona hero card */}
        <Reveal delay={0.06} className="mt-10">
          <div className="grid gap-8 rounded-card-lg border border-pink/15 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-9 lg:grid-cols-[auto_1fr_1.1fr] lg:items-start">
            {/* photo */}
            <div className="relative mx-auto w-[200px] flex-shrink-0">
              <div className="absolute -inset-2 rounded-[26px] bg-gradient-to-br from-rose/40 to-pink/30 blur-md" />
              <img
                src={p.photo}
                alt="SpongeBob — the Wïrk user persona"
                className="relative w-full rounded-[22px] border-2 border-pink/40 object-cover shadow-phone"
                draggable="false"
              />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-rose px-4 py-1 font-display text-[20px] font-extrabold text-white shadow-lg">
                {p.name}
              </span>
            </div>

            {/* demographics */}
            <dl className="mt-6 flex flex-col gap-3 lg:mt-2">
              {p.demographics.map((d) => (
                <div key={d.label} className="grid grid-cols-[110px_1fr] gap-2">
                  <dt className="font-cond text-[15px] font-semibold uppercase tracking-wide text-rose">{d.label}</dt>
                  <dd className="font-body text-[14px] leading-relaxed text-pink/80">{d.value}</dd>
                </div>
              ))}
            </dl>

            {/* user needs */}
            <div className="rounded-card border border-pink/20 bg-plum/40 p-5">
              <h3 className="font-cond text-[18px] font-semibold uppercase tracking-wide text-pink">{p.needsTitle}</h3>
              <ul className="mt-3 flex flex-col gap-2.5">
                {p.needs.map((n, i) => (
                  <li key={i} className="flex gap-2.5 font-body text-[13.5px] leading-snug text-pink/75">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* app behaviour & ux opportunities */}
        <div className="mt-16">
          <Reveal>
            <h3 className="font-cond text-[clamp(22px,3vw,32px)] font-bold uppercase tracking-wide text-pink">
              {p.behaviourTitle}
            </h3>
          </Reveal>
          <Reveal delay={0.06} className="mt-5 max-w-3xl">
            <p className="whitespace-pre-line font-body text-[15px] leading-[1.8] text-pink/70">{p.behaviourIntro}</p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Reveal className="h-full">
              <div className="flex h-full flex-col rounded-card border border-pink/15 bg-white/[0.04] p-6">
                <h4 className="font-cond text-[18px] font-semibold uppercase tracking-wide text-rose">{p.painTitle}</h4>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {p.pains.map((x, i) => (
                    <li key={i} className="flex gap-2.5 font-body text-[13.5px] leading-snug text-pink/75">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="h-full">
              <div className="flex h-full flex-col rounded-card border border-pink/15 bg-white/[0.04] p-6">
                <h4 className="font-cond text-[18px] font-semibold uppercase tracking-wide text-rose">{p.motivationsTitle}</h4>
                <ul className="mt-3 flex flex-col gap-3">
                  {p.motivations.map((m) => (
                    <li key={m.k} className="font-body text-[13.5px] leading-snug text-pink/75">
                      <span className="font-semibold text-pink">{m.k}: </span>
                      {m.v}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.16} className="h-full">
              <div className="flex h-full flex-col rounded-card border border-rose/30 bg-rose/10 p-6">
                <h4 className="font-cond text-[18px] font-semibold uppercase tracking-wide text-pink">{p.fitTitle}</h4>
                <p className="mt-3 font-body text-[13.5px] leading-relaxed text-pink/80">{p.fit}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
