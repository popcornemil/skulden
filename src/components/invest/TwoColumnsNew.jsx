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
            <h3 className="font-serif text-[22px] text-midnight mb-3">More Than Capital</h3>
            <p className="font-serif text-[16px] text-midnight/60">Axxe Invest supports founders with more than funding. Through the Axxe ecosystem we provide access to: Technology infrastructure. Industry networks. Retail environments and media networks. Our goal is simple: Help exceptional founders build category-defining companies.</p>
          </div>
        </div>
        <div className="relative p-6 md:p-[50px]">
          <div className="hidden md:block absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute left-0 md:hidden top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-serif text-[22px] text-midnight mb-3">We Partner Early</h3>
            <p className="font-serif text-[16px] text-midnight/60">We work with founders from early stages through growth. If you're building technology that transforms retail, we want to hear from you. Bold ideas. Strong teams. Global potential.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
