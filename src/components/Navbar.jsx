import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const products = [
  { name: 'Axxe Frame™', desc: 'Patented display framing system', href: '/frame' },
  { name: 'Axxe Screen™', desc: 'Professional digital displays', href: '/screen' },
  { name: 'Axxe Play™', desc: 'Software for digital signage', href: '/play' },
  { name: 'Axxe Cloud™', desc: 'Connected device platform', href: '/cloud' },
  { name: 'Axxe Revenue™', desc: 'Retail media platform', href: '/revenue' },
  { name: 'Axxe Studio™', desc: 'Creative content platform', href: '/studio' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showProducts, setShowProducts] = useState(false)

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
            <Link to="/ai" className="text-xs font-medium tracking-[0.2em] uppercase text-midnight/60 hover:text-midnight transition-colors duration-300">AI</Link>
            <div
              className="relative"
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-midnight/60 hover:text-midnight transition-colors duration-300 cursor-pointer">Products</span>
              <div className={`absolute top-full left-0 pt-4 transition-all duration-300 ${showProducts ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="bg-[#fcfbf9] border border-black/7 rounded-lg shadow-lg p-4 grid grid-cols-2 gap-3 w-[420px]">
                  {products.map(p => (
                    <Link
                      key={p.name}
                      to={p.href}
                      className="group p-3 rounded-lg hover:bg-black/3 transition-colors duration-200"
                      onClick={() => setShowProducts(false)}
                    >
                      <p className="font-serif text-[14px] text-midnight font-medium group-hover:text-gold transition-colors duration-200">{p.name}</p>
                      <p className="font-serif text-[12px] text-midnight/40 mt-0.5">{p.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right links */}
          <div className="flex items-center gap-6 ml-auto">
            <div className={`flex items-center gap-6 transition-all duration-500 ${scrolled ? '-translate-x-[200px]' : ''}`}>
              <Link to="/invest" className="text-xs font-medium tracking-[0.2em] uppercase text-midnight/60 hover:text-midnight transition-colors duration-300">Invest</Link>
              <Link to="/about" className="text-xs font-medium tracking-[0.2em] uppercase text-midnight/60 hover:text-midnight transition-colors duration-300">About</Link>
            </div>
            <a
              href="#contact"
              className="px-5 py-3 bg-midnight text-white text-[10px] font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-midnight/80 transition-all duration-300"
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
