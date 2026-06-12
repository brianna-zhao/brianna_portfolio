import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import PhoneFrame from './PhoneFrame'
import PrototypeButton from './PrototypeButton'
import { prototype, PROTOTYPE_URL } from '../data/content'

// "Final Prototype" — gallery of the corresponding polished Figma frames as
// phones. Clicking a phone opens a lightbox; the CTA links to the live prototype.
export default function Prototype() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink to-plum py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-rose/15 blur-[140px]" />
      <div className="relative mx-auto max-w-content px-6 sm:px-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading eyebrow="06 — Ship" title={prototype.title} light lede="The corresponding frames from the Figma file, placed as interactive screens. Tap any phone to enlarge, or open the full clickable prototype." />
          <PrototypeButton size="lg" />
        </div>

        <div className="mt-16 grid grid-cols-2 justify-items-center gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {prototype.screens.map((s, i) => (
            <PhoneFrame
              key={s.label}
              src={s.src}
              label={s.label}
              frame={s.frame}
              width={200}
              dark
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-6 backdrop-blur-xl"
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="fixed right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-pink/50 bg-ink/70 text-pink transition hover:scale-110 hover:bg-rose/60"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
            </button>
            <motion.div
              key={active}
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 20 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center gap-5"
            >
              <PhoneFrame src={prototype.screens[active].src} width={300} />
              <a
                href={PROTOTYPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-cond text-[14px] uppercase tracking-[0.2em] text-pink/80 underline-offset-4 hover:text-pink hover:underline"
              >
                {prototype.screens[active].label} — open prototype →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
