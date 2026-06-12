import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Wordmark from './Wordmark'
import { projects } from '../data/content'

// Fixed glass navbar — mirrors the portfolio's shared nav (about / project ▾ /
// connect) with a circular Wïrk home button on the left.
export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 sm:px-7">
      <a
        href="../home.html"
        title="Home"
        className="flex h-[58px] w-[58px] flex-shrink-0 items-center justify-center rounded-full border-2 border-pink/40 bg-plum transition hover:scale-105 hover:border-pink"
      >
        <Wordmark className="text-[18px]" color="#F0B8CC" accent="#F0B8CC" />
      </a>

      <nav className="flex items-center gap-1.5 rounded-full border border-rose/40 bg-[rgba(30,12,24,0.82)] px-3 py-2 backdrop-blur-xl">
        <a href="../about.html" className="nav-tab rounded-full border border-transparent px-5 py-2 font-serif text-[15px] tracking-wide text-[#ffb3c6] transition hover:border-[#ffb3c6] hover:bg-[rgba(255,179,198,0.08)]">
          about
        </a>

        <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          <a href="#" className="rounded-full border border-transparent px-5 py-2 font-serif text-[15px] tracking-wide text-[#c9b3ff] transition hover:border-[#c9b3ff] hover:bg-[rgba(201,179,255,0.08)]">
            project
          </a>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 top-[calc(100%+10px)] min-w-[160px] -translate-x-1/2 rounded-2xl border border-rose/40 bg-[rgba(22,8,18,0.96)] p-2 shadow-2xl backdrop-blur-xl"
              >
                {projects.map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    className="block rounded-xl border border-transparent px-4 py-2 font-serif text-[13px] tracking-wide text-[#c9b3ff] transition hover:border-[#c9b3ff] hover:bg-[rgba(201,179,255,0.1)]"
                  >
                    {p.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a href="../connect.html" className="rounded-full border border-transparent px-5 py-2 font-serif text-[15px] tracking-wide text-[#b3d9ff] transition hover:border-[#b3d9ff] hover:bg-[rgba(179,217,255,0.08)]">
          connect
        </a>
      </nav>
    </header>
  )
}
