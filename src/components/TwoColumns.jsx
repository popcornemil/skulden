import { useScrollReveal } from '../hooks/useScrollReveal'

export default function TwoColumns() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2">
        <div className="relative p-6 md:p-[50px]">
          {/* Left line */}
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          {/* Right line */}
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          {/* Bottom line */}
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <p className={`font-serif text-[22px] text-midnight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>One connected platform.</p>
        </div>
        <div className="relative p-6 md:p-[50px]">
          {/* Right line */}
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          {/* Bottom line */}
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <p className={`font-serif text-[16px] text-midnight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Axxe builds the infrastructure powering the next generation of retail experiences.<br />Displays.<br />Software.<br />Intelligence.</p>
        </div>
      </div>
    </section>
  )
}
