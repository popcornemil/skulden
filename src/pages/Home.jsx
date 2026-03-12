import { useScrollReveal } from '../hooks/useScrollReveal'
import Hero2 from '../components/Hero2'
import TwoColumns from '../components/TwoColumns'
import OneColumn from '../components/OneColumn'
import DashboardMockup from '../components/DashboardMockup'
import ThreeColumns from '../components/ThreeColumns'
import AISection from '../components/AISection'
import HubSection from '../components/HubSection'
import ThreeColumns2 from '../components/ThreeColumns2'
import TwoColumns2 from '../components/TwoColumns2'
import ThreeColumns3 from '../components/ThreeColumns3'
import DarkCard from '../components/DarkCard'
import Footer from '../components/Footer'

export default function Home() {
  const [refStores, visibleStores] = useScrollReveal()
  const [refFunding, visibleFunding] = useScrollReveal()

  return (
    <>
      <Hero2 />
      <TwoColumns />
      <ThreeColumns />
      <OneColumn />

      <section className="bg-[#fcfbf9]">
        <div className="max-w-[1200px] mx-auto w-full relative p-6 md:p-[50px]">
          <div className="rounded-[16px] overflow-hidden shadow-md">
            <video autoPlay muted loop playsInline className="w-full h-auto">
              <source src="/skulden_sno_2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <ThreeColumns3 />
      <ThreeColumns2 />
      <DarkCard />
      <AISection />
      <HubSection />
      <Footer />
    </>
  )
}
