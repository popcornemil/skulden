import { useState, useEffect } from 'react'

const leftLinks = [
  { label: 'AI', href: '#cities' },
  { label: 'Frame', href: '#cities' },
  { label: 'Screen', href: '#cities' },
  { label: 'Play', href: '#cities' },
]

const rightLinks = [
  { label: 'Cloud', href: '#cities' },
  { label: 'Studio', href: '#cities' },
  { label: 'Invest', href: '#about' },
  { label: 'About Us', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#fcfbf9]/95 backdrop-blur-md border-b border-black/5' : 'bg-[#fcfbf9]'
    }`}>
      <div className="max-w-[1200px] mx-auto w-full px-6 relative flex items-center h-20">

        {/* Center logo — true center of navbar */}
        <a href="#" className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <img
            src="/logo-nopayoff-gold.png"
            alt="Axxe"
            className="h-8 w-auto" style={{ filter: 'brightness(0)' }}
          />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center w-full">
          {/* Far left links */}
          <div className={`flex items-center gap-6 transition-all duration-500 ${scrolled ? 'translate-x-[324px]' : ''}`}>
            <a href="#" className="text-xs font-medium tracking-[0.2em] uppercase text-midnight/60 hover:text-midnight transition-colors duration-300">AI</a>
            <a href="#" className="text-xs font-medium tracking-[0.2em] uppercase text-midnight/60 hover:text-midnight transition-colors duration-300">Marketplace</a>
          </div>

          {/* Right links */}
          <div className="flex items-center gap-6 ml-auto">
            <div className={`flex items-center gap-6 transition-all duration-500 ${scrolled ? '-translate-x-[200px]' : ''}`}>
              <a href="#about" className="text-xs font-medium tracking-[0.2em] uppercase text-midnight/60 hover:text-midnight transition-colors duration-300">Invest</a>
              <a href="#contact" className="text-xs font-medium tracking-[0.2em] uppercase text-midnight/60 hover:text-midnight transition-colors duration-300">About</a>
            </div>
            <a
              href="#contact"
              className="px-5 py-2 bg-midnight text-white text-[10px] font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-midnight/80 transition-all duration-300"
            >
              Book Demo
            </a>
          </div>
        </div>

        {/* Mobile logo */}
        <a href="#" className="flex items-center lg:hidden">
          <img
            src="/logo-nopayoff-gold.png"
            alt="Axxe"
            className="h-7 w-auto"
          />
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
        menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
      } bg-midnight/98 backdrop-blur-md`}>
        <div className="px-6 py-6 flex flex-col gap-4">
          {[...leftLinks, ...rightLinks].map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-[0.15em] uppercase text-midnight/60 hover:text-midnight transition-colors"
            >
              {l.label}
            </a>
          ))}

        </div>
      </div>
    </nav>
  )
}
