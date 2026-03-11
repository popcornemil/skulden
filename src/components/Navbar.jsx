import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#fcfbf9]/95 backdrop-blur-md border-b border-black/5' : 'bg-[#fcfbf9]'
    }`}>
      <div className="max-w-[1200px] mx-auto w-full px-6 relative flex items-center h-16 md:h-20">
        <div className="absolute left-0 top-[10px] bottom-0 w-px bg-black/7" />
        <div className="absolute right-0 top-[10px] bottom-0 w-px bg-black/7" />

        {/* Center logo — true center of navbar */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center z-10">
          <img
            src="/logo-nopayoff-gold.png"
            alt="Axxe"
            className="h-6 md:h-8 w-auto" style={{ filter: 'brightness(0)' }}
          />
        </Link>

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
      </div>
    </nav>
  )
}
