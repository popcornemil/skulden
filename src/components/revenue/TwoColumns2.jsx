import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function TwoColumns2() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="contact" className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2">
        <div className="relative p-6 md:p-[50px]">
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <p className={`font-serif text-sm font-medium text-midnight mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Get Started</p>
          <h2 className={`font-serif text-[32px] md:text-[48px] font-light text-midnight leading-tight mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Ready to Monetize<br />Your Retail Space?</h2>
          <p className={`font-serif text-[16px] text-midnight/60 transition-all duration-1000 delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Whether it's a single store or a nationwide retail network — <span className="font-bold">Axxe Revenue™</span> helps you turn displays into a new revenue channel. Get in touch and let's build your retail media strategy.</p>
        </div>
        <div className={`relative p-6 md:p-[50px] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="hidden md:block absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute left-0 md:hidden top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block font-serif text-[13px] text-midnight/40 mb-2">Name</label>
              <input type="text" placeholder="Your name" className="w-full bg-transparent border-b border-black/10 focus:border-midnight pb-3 text-midnight text-[16px] font-serif outline-none transition-colors duration-300 placeholder:text-midnight/25" />
            </div>
            <div>
              <label className="block font-serif text-[13px] text-midnight/40 mb-2">Company</label>
              <input type="text" placeholder="Your company" className="w-full bg-transparent border-b border-black/10 focus:border-midnight pb-3 text-midnight text-[16px] font-serif outline-none transition-colors duration-300 placeholder:text-midnight/25" />
            </div>
            <div>
              <label className="block font-serif text-[13px] text-midnight/40 mb-2">Email</label>
              <input type="email" placeholder="your@email.com" className="w-full bg-transparent border-b border-black/10 focus:border-midnight pb-3 text-midnight text-[16px] font-serif outline-none transition-colors duration-300 placeholder:text-midnight/25" />
            </div>
            <div>
              <label className="block font-serif text-[13px] text-midnight/40 mb-2">Phone</label>
              <input type="tel" placeholder="+46 70 000 0000" className="w-full bg-transparent border-b border-black/10 focus:border-midnight pb-3 text-midnight text-[16px] font-serif outline-none transition-colors duration-300 placeholder:text-midnight/25" />
            </div>
            <div className="pt-4">
              <button type="submit" className="font-serif text-[16px] font-medium text-midnight hover:text-gold transition-colors duration-300">Submit &rarr;</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
