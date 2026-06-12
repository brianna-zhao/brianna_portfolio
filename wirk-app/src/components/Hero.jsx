import { motion } from 'framer-motion'
import Wordmark from './Wordmark'
import PrototypeButton from './PrototypeButton'
import { hero, PROTOTYPE_URL } from '../data/content'

// Hero: dark-plum stage that blends into the isometric phone mockup (which is
// exported on the same plum canvas), with the wordmark, intro and CTA on the left.
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink via-plum to-plum-deep">
      {/* soft brand glow */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[460px] w-[460px] rounded-full bg-rose/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-pink/20 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-content flex-col items-center gap-10 px-6 pb-16 pt-32 sm:px-10 lg:flex-row lg:gap-8 lg:pt-28">
        {/* left — copy */}
        <div className="flex w-full flex-col items-start gap-6 lg:w-[42%]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-script text-[clamp(26px,3.4vw,40px)] leading-tight text-pink"
          >
            {hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
          >
            <Wordmark className="text-[clamp(72px,11vw,128px)]" color="#F3F2F0" accent="#BE2E5C" smile />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
            className="max-w-md font-body text-[17px] leading-relaxed text-pink/80"
          >
            {hero.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: 'easeOut' }}
          >
            <PrototypeButton size="lg" />
          </motion.div>
        </div>

        {/* right — clickable isometric phone composition */}
        <motion.a
          href={PROTOTYPE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the Wïrk prototype"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02, rotate: -0.4 }}
          className="group relative block w-full lg:w-[58%]"
        >
          <img
            src={hero.image}
            alt="Wïrk app — isometric showcase of the dashboard, tap-to-pay, connect and boost screens"
            className="w-full select-none rounded-card-lg drop-shadow-2xl"
            draggable="false"
          />
          <span className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-pink/40 bg-ink/60 px-3 py-1 font-body text-caption text-pink/90 opacity-0 backdrop-blur transition group-hover:opacity-100">
            Tap to open prototype →
          </span>
        </motion.a>
      </div>
    </section>
  )
}
