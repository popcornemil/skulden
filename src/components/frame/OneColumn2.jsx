import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function OneColumn2() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full relative p-6 md:p-[50px]">
        {/* Left line */}
        <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
        {/* Right line */}
        <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
        {/* Bottom line */}
        <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />

        <h2 className={`font-serif text-[32px] md:text-[48px] lg:text-[64px] font-light text-midnight mb-4 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Display Content Without Limits</h2>
        <p className={`font-serif text-[16px] text-midnight/60 text-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Retail promotions. Corporate messaging. Public information. Brand storytelling. <span className="font-bold">Axxe Play™</span> delivers the right content to the right screen at the right time.</p>
      </div>
    </section>
  )
}
