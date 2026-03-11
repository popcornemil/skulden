import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function TwoColumnsNew() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2">
        <div className="relative p-6 md:p-[50px]">
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-serif text-[22px] text-midnight mb-3">Minimal Design.<br />Maximum Impact.</h3>
            <p className="font-serif text-[16px] text-midnight/60">Displays should feel like part of the architecture — not an add-on. <span className="font-bold">Axxe Frame™</span> creates a clean, modern display surface that enhances the space around it. Invisible structure. Visible impact.</p>
          </div>
        </div>
        <div className="relative p-6 md:p-[50px]">
          <div className="hidden md:block absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute left-0 md:hidden top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-serif text-[22px] text-midnight mb-3">The Future of<br />Display Framing</h3>
            <p className="font-serif text-[16px] text-midnight/60"><span className="font-bold">Axxe Frame™</span> is redefining how digital displays are installed, integrated, and experienced. Engineered for performance. Designed for aesthetics. Built for the future.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
