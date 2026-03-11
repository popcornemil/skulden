import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function OneColumn() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9] pt-16 md:pt-20" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full relative p-6 md:p-[50px]">
        {/* Left line */}
        <div className="absolute left-0 top-0 bottom-[10px] w-px bg-black/7" />
        {/* Right line */}
        <div className="absolute right-0 top-0 bottom-[10px] w-px bg-black/7" />
        {/* Bottom line */}
        <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />

        <h2 className={`font-serif text-[32px] md:text-[48px] lg:text-[64px] font-light text-midnight mb-4 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>The Frame Behind Next-Gen Displays</h2>
        <p className={`font-serif text-[16px] text-midnight/60 text-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}><span className="font-bold">Axxe Frame™</span> is a patented framing system designed for the future of digital displays. Engineered for seamless integration, premium aesthetics, and effortless installation. Transform any environment into a modern visual experience.</p>
      </div>
    </section>
  )
}
