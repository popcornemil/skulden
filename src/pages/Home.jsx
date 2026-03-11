import Hero2 from '../components/Hero2'
import TwoColumns from '../components/TwoColumns'
import OneColumn from '../components/OneColumn'
import DashboardMockup from '../components/DashboardMockup'
import ThreeColumns from '../components/ThreeColumns'
import AISection from '../components/AISection'
import HubSection from '../components/HubSection'
import ThreeColumns2 from '../components/ThreeColumns2'
import TwoColumns2 from '../components/TwoColumns2'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
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
      <HubSection />
      <AISection />
      <TwoColumns2 />
      <Footer />
    </>
  )
}
