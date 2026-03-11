import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { number: '€10M+', label: 'Capital Deployed' },
  { number: '12', label: 'Portfolios' },
  { number: '4', label: 'Markets' },
  { number: '3x', label: 'Avg. Return' },
]

export default function About() {
  const [ref, isVisible] = useScrollReveal(0.15)

  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-midnight relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bordeaux/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-[25px]">
              <img
                src="/invest.jpeg"
                alt="Axxe Invest"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/15 -z-10" />
            {/* Accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-bordeaux/40" />
          </div>

          {/* Content */}
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Invest</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
              Axxe{' '}
              <span className="italic text-gold">Invest</span>
            </h2>

            <div className="space-y-5 text-white/50 font-light leading-relaxed">
              <p>
                We partner with founders building the future of retail technology.
                If you're creating the next generation of commerce infrastructure,
                we want to hear from you.
              </p>
              <p>
                Axxe Invest backs early-stage companies at the intersection of
                physical retail and digital innovation — from in-store media and
                spatial computing to AI-driven customer experiences and supply chain intelligence.
              </p>
              <p>
                We bring more than capital. Our portfolio companies get access to
                Axxe's ecosystem of hardware, software, and a global network of
                retail partners to accelerate go-to-market and scale faster.
              </p>
            </div>

            {/* Signature line */}
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-px bg-gold" />
              <a href="#contact" className="text-gold text-xs tracking-[0.2em] uppercase hover:text-gold-light transition-colors duration-300">Submit Your Pitch</a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map(s => (
                <div key={s.label}>
                  <p className="font-serif text-3xl text-gold font-light">{s.number}</p>
                  <p className="text-white/30 text-xs tracking-wide uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
