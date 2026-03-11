import Hero2 from '../components/frame/Hero2'
import TwoColumns from '../components/frame/TwoColumns'
import OneColumn from '../components/frame/OneColumn'
import DashboardMockup from '../components/frame/DashboardMockup'
import ThreeColumns from '../components/frame/ThreeColumns'
import FrameIllustration from '../components/frame/FrameIllustration'
import OneColumn2 from '../components/frame/OneColumn2'
import AISection from '../components/frame/AISection'
import HubSection from '../components/frame/HubSection'
import ThreeColumns2 from '../components/frame/ThreeColumns2'
import TwoColumns2 from '../components/frame/TwoColumns2'
import Footer from '../components/frame/Footer'

export default function Frame() {
  return (
    <>
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
      <OneColumn2 />
      <TwoColumns2 />
      <Footer />
    </>
  )
}
