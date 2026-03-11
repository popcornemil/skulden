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
            <h3 className="font-serif text-[22px] text-midnight mb-3">Smarter Displays</h3>
            <p className="font-serif text-[16px] text-midnight/60">Traditional digital signage shows content. <span className="font-bold">Axxe AI™</span> makes displays intelligent. Using advanced data analysis and machine learning, the platform can adapt content based on environment, audience, and performance. Every screen becomes part of a responsive retail ecosystem.</p>
          </div>
        </div>
        <div className="relative p-6 md:p-[50px]">
          <div className="hidden md:block absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute left-0 md:hidden top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-serif text-[22px] text-midnight mb-3">Real-Time Insights</h3>
            <p className="font-serif text-[16px] text-midnight/60"><span className="font-bold">Axxe AI™</span> helps retailers understand how digital experiences perform in physical environments. Audience behavior insights. Content performance analytics. Automated optimization. Data-driven retail experiences. Transform displays from passive screens into intelligent communication platforms.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
