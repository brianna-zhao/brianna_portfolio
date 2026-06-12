import Wordmark from './Wordmark'
import PrototypeButton from './PrototypeButton'

export default function Footer() {
  return (
    <footer className="bg-ink py-16">
      <div className="mx-auto flex max-w-content flex-col items-center gap-7 px-6 text-center sm:px-10">
        <Wordmark className="text-[44px]" color="#F3F2F0" accent="#BE2E5C" smile />
        <p className="max-w-md font-body text-[15px] leading-relaxed text-pink/55">
          A speculative payments concept — buy now, Wïrk later. Designed &amp; prototyped by Brianna Zhao.
        </p>
        <PrototypeButton />
        <p className="font-body text-[12px] text-pink/30">© {new Date().getFullYear()} Brianna Zhao · Wïrk case study</p>
      </div>
    </footer>
  )
}
