import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function TwoColumns3() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="relative p-6 md:p-[50px]">
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-serif text-[22px] text-midnight mb-3">Our Ecosystem Partners</h3>
            <p className="font-serif text-[16px] text-midnight/60">Axxe is proud to be a shareholder and technology partner in leading platforms shaping the retail media landscape. Through these partnerships we help power next-generation retail media networks and digital display infrastructure.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
