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
            <h3 className="font-serif text-[22px] text-white mb-3 whitespace-pre-line">{'Built for\nRetail Innovation'}</h3>
            <p className="font-serif text-[16px] text-white/60">The retail landscape is changing faster than ever. New technologies are transforming stores into connected, intelligent environments — blending physical spaces, digital content, data, and AI. Axxe Invest focuses on companies building this future.</p>
            <a href="#contact" className="inline-block mt-6 px-6 py-3 bg-[#1b4137] text-white text-[14px] font-serif font-medium rounded-full hover:bg-gold-light transition-colors duration-300">Get in touch</a>
          </div>
          <div className="flex items-end pl-[50px]">
            <div>
              <p className="font-serif text-[16px] text-white/60 mb-4">We invest in:</p>
              <ul className="font-serif text-[16px] text-white/60 space-y-3">
                <li className="flex items-start gap-3"><span className="text-gold mt-1.5 text-[8px]">●</span>Retail technology</li>
                <li className="flex items-start gap-3"><span className="text-gold mt-1.5 text-[8px]">●</span>Digital in-store experiences</li>
                <li className="flex items-start gap-3"><span className="text-gold mt-1.5 text-[8px]">●</span>Connected displays and media networks</li>
                <li className="flex items-start gap-3"><span className="text-gold mt-1.5 text-[8px]">●</span>Commerce infrastructure</li>
                <li className="flex items-start gap-3"><span className="text-gold mt-1.5 text-[8px]">●</span>Customer engagement platforms</li>
              </ul>
              <p className="font-serif text-[16px] text-white/60 mt-4">If your technology can increase revenue for retailers, we want to hear from you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
