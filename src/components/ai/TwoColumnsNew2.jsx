import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function TwoColumnsNew2() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2">
        <div className="relative p-6 md:p-[50px]">
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-serif text-[22px] text-midnight mb-3">AI-Powered Retail Experiences</h3>
            <p className="font-serif text-[16px] text-midnight/60">Retail is evolving beyond static stores. <span className="font-bold">Axxe AI™</span> enables dynamic environments where digital content responds to the moment. Different content at different times. Adaptive messaging. Smarter brand engagement.</p>
          </div>
        </div>
        <div className="relative p-6 md:p-[50px]">
          <div className="hidden md:block absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute left-0 md:hidden top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-serif text-[22px] text-midnight mb-3">The Future of Retail Intelligence</h3>
            <p className="font-serif text-[16px] text-midnight/60">Physical retail is becoming digital, connected, and intelligent. <span className="font-bold">Axxe AI™</span> is building the infrastructure that powers this transformation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
