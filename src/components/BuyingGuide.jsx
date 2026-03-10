import { useScrollReveal } from '../hooks/useScrollReveal'

const cards = [
  {
    title: 'Media Environments',
    description: 'Stores are no longer just physical locations — they are dynamic media channels.',
  },
  {
    title: 'Real-Time Experiences',
    description: 'Transform spaces into digital experiences that evolve and adapt in real time.',
  },
  {
    title: 'Global Scale',
    description: 'From single locations to international retail networks with thousands of screens.',
  },
  {
    title: 'Reliable Infrastructure',
    description: 'Enterprise-grade systems built for 24/7 uptime across every location.',
  },
  {
    title: 'Flexible Platform',
    description: 'Adapt content, layouts, and campaigns across regions and formats instantly.',
  },
  {
    title: 'Future-Ready',
    description: 'An architecture designed to grow with your business and the technology landscape.',
  },
]

export default function BuyingGuide() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section id="buying-guide" className="py-32 px-6 lg:px-12 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Why Axxe</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
            Designed for the <span className="italic text-gold">Future of Retail</span>
          </h2>
          <p className="mt-6 text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
            Axxe enables brands to transform physical spaces into dynamic digital experiences.
            Built for global scale — from single locations to international retail networks.
          </p>
          <div className={`mx-auto mt-6 h-px bg-gold/30 ${isVisible ? 'animate-gold-line' : 'w-0'}`} />
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${isVisible ? 'visible' : ''}`}>
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="group relative p-8 border border-white/5 hover:border-gold/20 bg-midnight/50 transition-all duration-500"
            >
              <span className="absolute top-6 right-6 font-serif text-5xl font-light text-white/5 group-hover:text-gold/10 transition-colors duration-500">
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3 className="font-serif text-2xl font-light text-white mb-3">
                {card.title}
              </h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                {card.description}
              </p>

              <div className="mt-6 w-0 group-hover:w-8 h-px bg-gold transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
