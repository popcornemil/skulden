import { useScrollReveal } from '../hooks/useScrollReveal'

const products = [
  {
    name: 'Axxe Frame™',
    category: 'Hardware',
    image: '/frame.jpeg',
    tagline: 'Patented display framing system designed for seamless installations.'
  },
  {
    name: 'Axxe Screen™',
    category: 'Hardware',
    image: '/screen.jpeg',
    tagline: 'Professional displays engineered for modern environments.'
  },
  {
    name: 'Axxe Play™',
    category: 'Software',
    image: '/play.jpeg',
    tagline: 'Software to control and manage digital screens at scale.'
  },
  {
    name: 'Axxe Cloud™',
    category: 'Platform',
    image: '/cloud.jpeg',
    tagline: 'The platform connecting every device and location.'
  },
  {
    name: 'Axxe Studio™',
    category: 'Software',
    image: '/studio.jpeg',
    tagline: 'Create and manage visual content across your network.'
  },
  {
    name: 'Axxe AI™',
    category: 'Intelligence',
    image: '/ai.jpeg',
    tagline: 'Intelligence powering adaptive retail experiences.'
  },
]

export default function Cities() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section id="cities" className="py-32 px-6 lg:px-12 bg-midnight">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">The Ecosystem</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
            One Platform. <span className="italic text-gold">Multiple Layers.</span>
          </h2>
          <p className="mt-6 text-white/50 font-light max-w-2xl mx-auto">
            Axxe combines hardware, software, and intelligence into one unified ecosystem.
          </p>
          <div className={`mx-auto mt-6 h-px bg-gold/30 ${isVisible ? 'animate-gold-line' : 'w-0'}`} />
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children ${isVisible ? 'visible' : ''}`}>
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover brightness-75 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-gold/80 text-[10px] tracking-[0.3em] uppercase mb-2 transition-all duration-300 group-hover:text-gold">
                  {product.category}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-1">
                  {product.name}
                </h3>
                <p className="text-white/50 text-sm font-light tracking-wide">
                  {product.tagline}
                </p>
                <div className="mt-4 w-0 group-hover:w-12 h-px bg-gold transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
