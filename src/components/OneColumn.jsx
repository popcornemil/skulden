import { useScrollReveal } from '../hooks/useScrollReveal'

export default function OneColumn() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full relative p-6 pb-[50px] md:px-[50px] md:pt-[50px] md:pb-[50px]">
        {/* Left line */}
        {/* Right line */}
        {/* Bottom line */}

        <h2 className={`font-heading text-[32px] md:text-[48px] lg:text-[64px] font-light text-white mb-4 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Sluta slösa. Stoppa skulden.</h2>
        <p className={`font-serif text-[16px] text-white/60 text-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>När politiken präglas av slöseri och brist på ansvar växer skulden. Notan skickas till skattebetalarna.<br />Vill du göra skillnad? Bli medlem och hjälp oss sätta press på politikerna.</p>
        <div className={`flex justify-center mt-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#contact"
            className="group inline-block bg-[#e65245] text-white rounded-full hover:bg-[#d4453a] transition-all duration-500"
            style={{ padding: '16px' }}
          >
            <span className="relative flex items-center">
              <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 absolute left-0 group-hover:left-[calc(100%-40px)] transition-all duration-500 z-10">
                <span className="text-lg text-[#e65245]">&rarr;</span>
              </span>
              <span className="font-serif text-[16px] md:text-[20px] font-medium pl-[52px] pr-2 group-hover:pl-2 group-hover:pr-[52px] transition-all duration-500">Bli medlem</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
