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
import Footer from '../components/Footer'

export default function Home() {
  const [refStores, visibleStores] = useScrollReveal()
  const [refFunding, visibleFunding] = useScrollReveal()

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
          <div className="transition-transform duration-700 ease-out hover:scale-[1.03]">
            <DashboardMockup />
          </div>
        </div>
      </section>
      <ThreeColumns2 />
      <HubSection />
      <section className="bg-[#fcfbf9]" ref={refStores}>
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2">
          <div className={`relative p-6 md:p-[50px] transition-all duration-1000 ${visibleStores ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
            <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
            <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
            <p className="font-serif text-[22px] text-midnight">Turn Stores into Media Networks</p>
          </div>
          <div className={`relative p-6 md:p-[50px] transition-all duration-1000 delay-200 ${visibleStores ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
            <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
            <p className="font-serif text-[16px] text-midnight">Axxe transforms retail spaces into connected digital media networks. Unlock new revenue streams through in-store advertising, brand campaigns, and intelligent display infrastructure.</p>
          </div>
        </div>
      </section>
      <AISection />
      <TwoColumns2 />
      <section className="bg-[#fcfbf9]" ref={refFunding}>
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2">
          <div className={`relative p-6 md:p-[50px] transition-all duration-1000 ${visibleFunding ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
            <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
            <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
            <p className="font-serif text-[22px] text-midnight">Funding the Future of Retail Tech</p>
            <a href="/invest" className="font-serif text-[16px] text-midnight mt-4 inline-block hover:text-gold transition-colors duration-300">Learn more &rarr;</a>
          </div>
          <div className={`relative p-6 md:p-[50px] transition-all duration-1000 delay-200 ${visibleFunding ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
            <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
            <p className="font-serif text-[16px] text-midnight">Axxe Invest partners with founders building the next generation of retail technology. We invest in companies creating new revenue streams for retailers through retail media, intelligent in-store experiences, and connected commerce infrastructure.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
