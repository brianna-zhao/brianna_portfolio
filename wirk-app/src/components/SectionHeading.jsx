import Reveal from './Reveal'

// Consistent section header: optional eyebrow + condensed title + optional lede.
export default function SectionHeading({ eyebrow, title, lede, align = 'center', accent = false, light = false }) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center'
  const titleColor = accent ? 'text-rose' : light ? 'text-bone' : 'text-plum'
  const ledeColor = light ? 'text-pink/70' : 'text-plum/70'
  return (
    <Reveal className={`flex max-w-prose flex-col gap-3 ${alignment} ${align === 'center' ? 'mx-auto' : ''}`}>
      {eyebrow && (
        <span className="font-body text-caption uppercase tracking-[0.28em] text-rose/70">{eyebrow}</span>
      )}
      <h2 className={`font-cond text-[clamp(28px,4vw,42px)] font-bold uppercase leading-[1.1] tracking-wide ${titleColor}`}>
        {title}
      </h2>
      {lede && <p className={`font-body text-[17px] leading-relaxed ${ledeColor}`}>{lede}</p>}
    </Reveal>
  )
}
