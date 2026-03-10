import { useScrollReveal } from '../hooks/useScrollReveal'

const properties = [
  {
    title: 'Villa Serenity',
    city: 'Marbella',
    price: '€4,950,000',
    size: '620 m²',
    beds: 6,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    tag: 'Exclusive',
  },
  {
    title: 'Penthouse Étoile',
    city: 'Paris',
    price: '€8,200,000',
    size: '340 m²',
    beds: 4,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    tag: 'New Listing',
  },
  {
    title: 'Palazzo Aventino',
    city: 'Rome',
    price: '€6,750,000',
    size: '480 m²',
    beds: 5,
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
    tag: null,
  },
  {
    title: 'The Belgravia',
    city: 'London',
    price: '£12,500,000',
    size: '4,200 sq ft',
    beds: 5,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    tag: 'Price Reduced',
  },
  {
    title: 'Central Park Tower',
    city: 'New York',
    price: '$15,800,000',
    size: '3,800 sq ft',
    beds: 4,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    tag: 'Exclusive',
  },
  {
    title: 'Malibu Oceanfront',
    city: 'Los Angeles',
    price: '$22,000,000',
    size: '5,600 sq ft',
    beds: 7,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    tag: 'Off-Market',
  },
]

export default function Properties() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section id="properties" className="py-32 px-6 lg:px-12 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
            Premium <span className="italic text-gold">Properties</span>
          </h2>
          <p className="mt-6 text-white/50 font-light max-w-2xl mx-auto">
            A curated selection of the world's most exceptional residences,
            handpicked by our team of international specialists.
          </p>
          <div className={`mx-auto mt-6 h-px bg-gold/30 ${isVisible ? 'animate-gold-line' : 'w-0'}`} />
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${isVisible ? 'visible' : ''}`}>
          {properties.map((prop) => (
            <div
              key={prop.title}
              className="group bg-midnight border border-white/5 hover:border-gold/20 overflow-hidden transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
                {prop.tag && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-bordeaux text-white text-[10px] tracking-[0.2em] uppercase font-medium">
                    {prop.tag}
                  </span>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-3 border border-white text-white text-xs tracking-[0.2em] uppercase">
                    View Details
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-serif text-xl font-light text-white group-hover:text-gold transition-colors duration-300">
                      {prop.title}
                    </h3>
                    <p className="text-white/40 text-xs tracking-[0.15em] uppercase mt-1">
                      {prop.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-gold font-serif text-lg">{prop.price}</span>
                  <div className="flex items-center gap-4 text-white/30 text-xs">
                    <span>{prop.size}</span>
                    <span className="w-px h-3 bg-white/10" />
                    <span>{prop.beds} bed</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-800 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="#contact"
            className="inline-block px-12 py-4 border border-gold/30 text-gold text-xs font-medium tracking-[0.2em] uppercase hover:bg-gold hover:text-midnight transition-all duration-300"
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  )
}
