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
      <div className="max-w-[1200px] mx-auto w-full px-6 relative flex items-center justify-center h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img
            src="/skulden-logo.png"
            alt="Skulden"
            className="h-8 md:h-12 w-auto"
          />
        </Link>
      </div>
    </nav>
  )
}
