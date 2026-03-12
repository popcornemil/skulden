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
      <ThreeColumns3 />
      <ThreeColumns2 />
      <DarkCard />
      <AISection />
      <HubSection />
      <Footer />
    </>
  )
}
