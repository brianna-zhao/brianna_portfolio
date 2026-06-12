import { motion } from 'framer-motion'
import { PROTOTYPE_URL } from '../data/content'

// Small multi-colour Figma glyph.
function FigmaIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 38 57" className={className} aria-hidden="true">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" fill="#1ABCFE" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" fill="#0ACF83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z" fill="#FF7262" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="#A259FF" />
    </svg>
  )
}

// The real "View Prototype" button — a rose pill with the Figma glyph and a
// serif label. On hover it flips to pink background + dark-blue text.
export default function PrototypeButton({ size = 'md', className = '' }) {
  const sizes = {
    md: 'h-12 px-6 text-[15px] gap-2.5',
    lg: 'h-14 px-8 text-[17px] gap-3',
  }
  return (
    <motion.a
      href={PROTOTYPE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View the Wïrk prototype on Figma"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 420, damping: 26 }}
      className={`group inline-flex items-center justify-center rounded-full bg-rose font-serif font-medium tracking-wide
        text-white shadow-[0_10px_30px_-8px_rgba(190,46,92,0.6)]
        transition-colors duration-200 hover:bg-pink hover:text-[#16235a]
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose
        ${sizes[size]} ${className}`}
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
    >
      <FigmaIcon className="h-[1.05em] w-auto transition-transform duration-200 group-hover:rotate-[-6deg]" />
      View Prototype
      <svg
        viewBox="0 0 24 24"
        className="h-[0.95em] w-auto transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.a>
  )
}
