import { useScrollReveal } from '../hooks/useScrollReveal'
import Header from '../components2/Header'
import Hero2 from '../components2/Hero2'
import TwoColumns from '../components2/TwoColumns'
import OneColumn from '../components2/OneColumn'
import ThreeColumns from '../components2/ThreeColumns'
import AISection from '../components2/AISection'
import HubSection from '../components2/HubSection'
import ThreeColumns2 from '../components2/ThreeColumns2'
import ThreeColumns3 from '../components2/ThreeColumns3'
import Section4 from '../components2/Section4'
import Section5 from '../components2/Section5'
import Section6 from '../components2/Section6'
import DarkCard from '../components2/DarkCard'
import VideoSection from '../components2/VideoSection'
import Footer from '../components2/Footer'

export default function Home2() {
  const [refStores, visibleStores] = useScrollReveal()
  const [refFunding, visibleFunding] = useScrollReveal()

  return (
    <>
      <Header />
      <Hero2 />
      <TwoColumns />
      <OneColumn />
      <Section4 />
      <Section5 />
      <Section6 />
      <HubSection />
      <VideoSection />
      <Footer />
    </>
  )
}
