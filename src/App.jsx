import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import TwoColumns from './components/TwoColumns'
import OneColumn from './components/OneColumn'
import DashboardMockup from './components/DashboardMockup'
import ThreeColumns from './components/ThreeColumns'
import ThreeColumns2 from './components/ThreeColumns2'
import TwoColumns2 from './components/TwoColumns2'
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
      <Hero2 />
      <TwoColumns />
      <OneColumn />
      <ThreeColumns />
      <section className="bg-[#fcfbf9] hidden md:block">
        <div className="max-w-[1200px] mx-auto w-full relative p-6 md:p-[50px]">
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className="transition-transform duration-700 ease-out hover:scale-[1.03] hover:rotate-[1deg]">
            <DashboardMockup />
          </div>
        </div>
      </section>
      <ThreeColumns2 />
      <TwoColumns2 />
      <Footer />
    </div>
  )
}
