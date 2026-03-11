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

        <h2 className={`font-serif text-[32px] md:text-[48px] lg:text-[64px] font-light text-midnight mb-4 text-center leading-[1.05] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Investing in the<br />Future of Retail Tech</h2>
        <p className={`font-serif text-[16px] text-midnight/60 text-center px-[200px] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Axxe Invest partners with ambitious founders building the next generation of retail technology. We invest in ideas that redefine how brands connect with customers — across physical stores, digital environments, and everything in between. Retail is evolving. We invest in the companies shaping what comes next.</p>
        <div className={`mt-4 flex justify-center transition-all duration-1000 delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#contact"
            className="group inline-block bg-midnight text-white rounded-full hover:bg-midnight/90 transition-all duration-500"
            style={{ padding: '16px' }}
          >
            <span className="relative flex items-center">
              <span className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shrink-0 absolute left-0 group-hover:left-[calc(100%-40px)] transition-all duration-500 z-10">
                <span className="text-lg text-midnight">&rarr;</span>
              </span>
              <span className="font-serif text-[16px] md:text-[20px] font-medium pl-[52px] pr-2 group-hover:pl-2 group-hover:pr-[52px] transition-all duration-500">Get in touch</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
