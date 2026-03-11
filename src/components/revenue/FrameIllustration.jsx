import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function FrameIllustration() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2">
        <div className="relative p-6 md:p-[50px] flex items-center">
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-serif text-[32px] md:text-[48px] font-light text-midnight leading-tight mb-4">Designed for Digital<br />Architecture</h2>
            <p className="font-serif text-[16px] text-midnight/60"><span className="font-bold">Axxe Frame™</span> is more than a mount. It's a structural system built to integrate displays into spaces with precision and elegance. Clean lines. Perfect alignment. Minimal installation time. Every detail is designed to elevate the display.</p>
          </div>
        </div>
        <div className="relative p-6 md:p-[50px]">
          <div className="hidden md:block absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <img src="/frame.jpg" alt="Axxe Frame system" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
