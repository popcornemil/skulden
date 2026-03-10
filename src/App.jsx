import Navbar from './components/Navbar'
import Hero from './components/Hero'
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
      <Cities />
      <BuyingGuide />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
