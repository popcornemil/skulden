import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function FrameIllustration() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2">
        <div className="relative p-6 md:p-[50px]">
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <img src="/invest-city.jpg" alt="City skyline" className="w-full aspect-square object-cover object-top rounded-lg grayscale" />
          </div>
        </div>
        <div className="relative p-6 md:p-[50px] flex items-center">
          <div className="hidden md:block absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-serif text-[32px] md:text-[48px] font-light text-midnight leading-tight mb-4">Send Us<br />Your Pitch</h2>
            <p className="font-serif text-[16px] text-midnight/60">Are you building the future of retail technology? We're always looking for visionary founders. If you have a company that can unlock new revenue streams for retailers, we are particularly interested. Send us your pitch and tell us what you're building.</p>
            <p className="font-serif text-[16px] text-midnight mt-4"><a href="mailto:invest@axxe.ai" className="hover:text-gold transition-colors duration-300">invest@axxe.ai</a></p>
            <p className="font-serif text-[14px] text-midnight/40 mt-2">or submit your company through our founder application.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
