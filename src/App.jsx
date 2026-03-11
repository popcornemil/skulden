import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoCarousel from './components/LogoCarousel'
import Solutions from './components/Solutions'
import Platform from './components/Platform'
import Solutions2 from './components/Solutions2'
import Cities from './components/Cities'
import BuyingGuide from './components/BuyingGuide'

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-midnight text-white">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <Solutions />
      <Platform />
      <Solutions2 />
      <Contact />
      <Footer />
    </div>
  )
}
