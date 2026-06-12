import { motion } from 'framer-motion'

// iPhone bezel for 393×852 Figma exports — screen fills edge-to-edge so the
// border doesn’t peek through top/bottom letterboxing.
export default function PhoneFrame({ src, label, frame, width = 220, onClick, dark = false, className = '' }) {
  const Tag = onClick ? motion.button : motion.div
  const labelColor = dark ? 'text-pink/90 group-hover:text-white' : 'text-plum group-hover:text-rose'
  const frameColor = dark ? 'text-pink/45' : 'text-plum/45'
  return (
    <Tag
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`group flex flex-col items-center gap-3 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{ width }}
    >
      <div
        className="relative w-full overflow-hidden rounded-[12%] border-[3px] border-plum bg-plum shadow-phone transition-shadow duration-300 group-hover:shadow-phone-hover"
        style={{ aspectRatio: '393 / 852' }}
      >
        <img
          src={src}
          alt={`${label} screen`}
          loading="lazy"
          className="absolute inset-0 h-full w-full select-none object-cover object-center scale-[1.015]"
          draggable="false"
        />
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
      </div>
      {label && (
        <div className="flex flex-col items-center text-center">
          <span className={`font-cond text-[13px] font-semibold uppercase tracking-[0.16em] transition-colors ${labelColor}`}>
            {label}
          </span>
          {frame && <span className={`font-body text-[11px] ${frameColor}`}>{frame}</span>}
        </div>
      )}
    </Tag>
  )
}
