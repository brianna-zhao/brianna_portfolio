// The Wïrk wordmark. Rendered as live text in the geometric "Jost" face
// (a Futura analogue) so it stays crisp at every size. The "ï" already carries
// the two dots; an optional smile arc under it recreates the brand's face motif.
export default function Wordmark({ className = '', smile = false, accent = '#BE2E5C', color = '#14091F' }) {
  return (
    <span
      className={`relative inline-flex items-baseline font-display font-extrabold leading-none tracking-tight ${className}`}
      style={{ color }}
    >
      W
      <span className="relative">
        <span style={{ color: accent }}>ï</span>
        {smile && (
          <svg
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ bottom: '0.04em', width: '0.62em', height: '0.30em' }}
            viewBox="0 0 24 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 2 C 6 11, 18 11, 22 2"
              stroke={color}
              strokeWidth="3.4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        )}
      </span>
      rk
    </span>
  )
}
