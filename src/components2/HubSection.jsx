import { useScrollReveal } from '../hooks/useScrollReveal'

export default function HubSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full relative p-6 pt-0 md:px-[50px] md:pb-[50px] md:pt-0">

        <div className="text-center">
          <h2 className={`font-heading text-[32px] md:text-[48px] lg:text-[56px] font-light text-white leading-tight transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            DET HÄR SKA ALLA SVENSKAR SE
          </h2>
          <p className={`font-serif text-[16px] text-white/60 mt-4 max-w-[600px] mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Följ Skulden.se. Följ Skattebetalarna. Bli medlem och hjälp till att sätta stopp för slöseriet. Ju fler vi är, desto svårare blir det att ignorera verkligheten.
          </p>
          <div className={`mt-8 flex flex-col items-center gap-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="#contact"
              className="group inline-block bg-[#e65245] text-white rounded-full hover:bg-[#d4453a] transition-all duration-500"
              style={{ padding: '16px' }}
            >
              <span className="relative flex items-center">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 absolute left-0 group-hover:left-[calc(100%-40px)] transition-all duration-500 z-10">
                  <span className="text-lg text-[#e65245]">&rarr;</span>
                </span>
                <span className="font-serif text-[16px] md:text-[20px] font-medium pl-[52px] pr-2 group-hover:pl-2 group-hover:pr-[52px] transition-all duration-500">Bli medlem idag</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
