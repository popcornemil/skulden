import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const solutions = [
  {
    tab: 'Axxe Frame',
    heading: 'Investing in the Future of Retail Technology',
    description: 'Axxe Invest partners with ambitious founders building the next generation of retail technology. We invest in ideas that redefine how brands connect with customers — in physical spaces, digital environments, and everything in between. Retail is evolving. We invest in the companies shaping what comes next.',
    image: '/invest2.jpeg',
    stats: [
      { value: '€10M+', label: 'Capital deployed' },
      { value: '12+', label: 'Portfolio companies' },
    ],
  },
  {
    tab: 'Axxe Screen',
    heading: 'Professional displays engineered for modern environments.',
    description: 'Axxe Screen™ delivers high-performance displays built specifically for modern digital environments. Designed for clarity, reliability, and seamless integration with the Axxe ecosystem. From retail spaces to large-scale installations, Axxe Screen™ brings content to life with precision and impact.',
    image: '/screen.jpeg',
    stats: [
      { value: '3000+', label: 'Nits brightness' },
      { value: '24/7', label: 'Always-on uptime' },
    ],
  },
  {
    tab: 'Axxe Play',
    heading: 'Software to control and manage digital screens at scale.',
    description: 'Axxe Play™ is a powerful software platform designed to manage, control, and deliver content across digital screens. Built for reliability, simplicity, and scale. From a single display to a global network — Axxe Play keeps everything in sync.',
    image: '/play.jpeg',
    stats: [
      { value: '10x', label: 'Faster deployment' },
      { value: '99.9%', label: 'Uptime guaranteed' },
    ],
  },
  {
    tab: 'Axxe Cloud',
    heading: 'The platform connecting every device and location.',
    description: 'Axxe Cloud™ is the central platform that connects and powers the entire Axxe ecosystem. Secure, scalable, and built for global digital display networks. Manage devices, content, and performance — all from one intelligent cloud platform.',
    image: '/cloud.jpeg',
    stats: [
      { value: '50ms', label: 'Sync latency' },
      { value: '∞', label: 'Scalable locations' },
    ],
  },
  {
    tab: 'Axxe Revenue',
    heading: 'Retail media platform enabling in-store advertising and new revenue streams.',
    description: 'Retail media platform enabling in-store advertising, brand campaigns, and new revenue streams for retailers.',
    image: '/studio.jpeg',
    stats: [
      { value: '3x', label: 'Faster content creation' },
      { value: '80%', label: 'Cost reduction' },
    ],
  },
  {
    tab: 'Axxe AI',
    heading: 'Intelligence powering adaptive retail experiences.',
    description: 'Axxe AI brings intelligence to physical spaces. By combining displays, data, and real-world environments, Axxe AI enables brands and retailers to create smarter, more adaptive customer experiences. From automated content optimization to real-time insights, Axxe AI turns every screen into a dynamic and intelligent media surface.',
    image: '/ai.jpeg',
    stats: [
      { value: '3x', label: 'Higher conversions' },
      { value: '40%', label: 'Revenue uplift' },
    ],
  },
]

export default function Solutions2() {
  const [active, setActive] = useState(0)
  const [ref, isVisible] = useScrollReveal(0.1)
  const current = solutions[active]

  return (
    <section className="pb-[100px] px-6 lg:px-12 bg-midnight text-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="font-serif text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
              The Full Ecosystem
            </p>
            <h2 className="font-serif text-[48px] font-light">
              Axxe Invest
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-white/60 font-light leading-relaxed">
              We partner with founders building the future of retail technology. If you're creating the next generation of commerce infrastructure, we want to hear from you.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Text */}
          <div>
            <h3 className="font-serif text-[32px] font-light leading-tight mb-6">
              {current.heading}
            </h3>
            <p className="text-white/60 font-light leading-relaxed mb-10">
              {current.description}
            </p>

            {/* Stats */}
            <div className="flex gap-12 mb-10">
              {current.stats.map((stat) => (
                <div key={stat.label} className="flex gap-4">
                  <div className="w-px bg-gold" />
                  <div>
                    <p className="font-serif text-6xl md:text-7xl font-light">{stat.value}</p>
                    <p className="text-white/50 text-base font-light mt-2">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="text-white font-medium text-[16px] tracking-wide hover:text-gold transition-colors duration-300">
              Submit your pitch &rarr;
            </a>
          </div>

          {/* Image */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-[10px] bg-midnight/5">
              <img
                key={current.image}
                src={current.image}
                alt={current.tab}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
