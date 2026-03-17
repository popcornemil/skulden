import { useScrollReveal } from '../hooks/useScrollReveal'

export default function VideoSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full p-6 pt-0 md:p-[50px] md:pt-0">
        <div className={`rounded-[16px] overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <video autoPlay muted loop playsInline className="w-full h-auto">
            <source src="/skulden_sno_4.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
