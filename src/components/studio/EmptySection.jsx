import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function EmptySection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full relative p-6 md:p-[50px]"
        style={{ backgroundImage: 'linear-gradient(to right, rgba(10,10,10,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.07) 1px, transparent 1px)', backgroundSize: '50px 50px', backgroundPositionY: '24px', backgroundPositionX: '74px' }}
      >
        <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
        <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
        <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
        <div className={`bg-midnight rounded-lg p-[50px] grid grid-cols-1 md:grid-cols-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <h3 className="font-serif text-[22px] text-white mb-3 whitespace-pre-line">{'Designed for\nModern Content'}</h3>
            <p className="font-serif text-[16px] text-white/60"><span className="font-bold">Axxe Studio™</span> ensures that every piece of content is optimized for digital displays. Beautiful visuals. Perfect formatting. Seamless publishing to your entire screen network.</p>
            <a href="#contact" className="inline-block mt-6 px-6 py-3 bg-[#1b4137] text-white text-[14px] font-serif font-medium rounded-full hover:bg-gold-light transition-colors duration-300">Book demo</a>
          </div>
          <div className="flex flex-col justify-end pl-[50px]">
            <p className="font-serif text-[16px] text-white/60 mb-4">Create stunning digital signage content with tools built for speed and creativity.</p>
            <ul className="font-serif text-[16px] text-white/60 space-y-3">
              <li className="flex items-start gap-3"><span className="text-gold mt-1.5 text-[8px]">●</span>Visual content editor</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1.5 text-[8px]">●</span>Campaign creation</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1.5 text-[8px]">●</span>Template-based design</li>
              <li className="flex items-start gap-3"><span className="text-gold mt-1.5 text-[8px]">●</span>Multi-screen publishing</li>
            </ul>
            <p className="font-serif text-[14px] text-white/40 mt-4">From simple messages to full brand campaigns.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
