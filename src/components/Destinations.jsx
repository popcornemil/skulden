import { useScrollReveal } from '../hooks/useScrollReveal'

const destinations = [
  {
    city: 'Marbella',
    title: 'The New Riviera',
    text: 'Once a sleepy fishing village, Marbella has evolved into Europe\'s most sought-after luxury enclave. From the Golden Mile to La Zagaleta, discover why ultra-high-net-worth buyers are choosing Marbella over Monaco.',
    stat: '€3.2M',
    statLabel: 'Avg. Prime Price',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80',
    align: 'right',
  },
  {
    city: 'Paris',
    title: 'Timeless Investment',
    text: 'The world\'s most visited city offers unmatched cultural capital and stable property appreciation. The 6th, 7th, and 8th arrondissements remain the gold standard for international buyers seeking Parisian elegance.',
    stat: '€15K',
    statLabel: 'Per m² (Prime)',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80',
    align: 'left',
  },
  {
    city: 'Rome',
    title: 'Eternal Returns',
    text: 'History meets modern luxury in a city undergoing a renaissance for international property buyers. Centro Storico penthouses and Trastevere townhouses offer a living art experience unlike any other.',
    stat: '€8.5K',
    statLabel: 'Per m² (Centro)',
    image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1200&q=80',
    align: 'right',
  },
  {
    city: 'London',
    title: 'The Global Standard',
    text: 'London remains the benchmark for international prime real estate. Mayfair, Knightsbridge, and Belgravia continue to attract the world\'s most discerning buyers seeking stable, long-term value.',
    stat: '£2,800',
    statLabel: 'Per sq ft (Prime)',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    align: 'left',
  },
  {
    city: 'New York',
    title: 'Capital of Ambition',
    text: 'Manhattan\'s skyline defines global luxury. From Central Park penthouses to Tribeca lofts, New York offers unparalleled access to culture, finance, and prestige — the ultimate power address.',
    stat: '$3,500',
    statLabel: 'Per sq ft (Manhattan)',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80',
    align: 'right',
  },
  {
    city: 'Los Angeles',
    title: 'Pacific Grandeur',
    text: 'From the Bird Streets to Malibu\'s coastline, LA represents the pinnacle of lifestyle real estate. Year-round sun, architectural innovation, and an entertainment industry backdrop create a market unlike any other.',
    stat: '$7.5M',
    statLabel: 'Avg. Luxury Home',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    align: 'left',
  },
]

export default function Destinations() {
  const [ref, isVisible] = useScrollReveal(0.05)

  return (
    <section id="destinations" className="py-32 px-6 lg:px-12 bg-midnight">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-24 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Destinations</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
            Why Invest <span className="italic text-gold">Here</span>
          </h2>
          <div className={`mx-auto mt-6 h-px bg-gold/30 ${isVisible ? 'animate-gold-line' : 'w-0'}`} />
        </div>

        <div className="space-y-32">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.city} dest={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DestinationCard({ dest, index }) {
  const [ref, isVisible] = useScrollReveal(0.15)
  const isRight = dest.align === 'right'

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden aspect-[4/3] ${isRight ? 'lg:order-2' : ''}`}>
        <img
          src={dest.image}
          alt={dest.city}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 border border-gold/10" />
        {/* Bordeaux accent corner */}
        <div className={`absolute ${isRight ? 'top-0 right-0' : 'bottom-0 left-0'} w-16 h-16`}>
          <div className={`absolute ${isRight ? 'top-0 right-0' : 'bottom-0 left-0'} w-full h-full border-2 border-bordeaux/30 ${isRight ? 'border-b-0 border-l-0' : 'border-t-0 border-r-0'}`} />
        </div>
      </div>

      {/* Content */}
      <div className={`${isRight ? 'lg:order-1 lg:text-right' : ''}`}>
        <p className="text-bordeaux text-xs tracking-[0.3em] uppercase font-medium mb-3">
          {dest.city}
        </p>
        <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-6">
          {dest.title}
        </h3>
        <p className="text-white/50 font-light leading-relaxed mb-8">
          {dest.text}
        </p>

        {/* Stat */}
        <div className={`flex items-end gap-3 ${isRight ? 'lg:justify-end' : ''}`}>
          <span className="font-serif text-4xl text-gold font-light">{dest.stat}</span>
          <span className="text-white/30 text-xs tracking-wide uppercase pb-1">{dest.statLabel}</span>
        </div>

        <div className={`mt-8 h-px bg-gold/20 w-16 ${isRight ? 'lg:ml-auto' : ''}`} />
      </div>
    </div>
  )
}
