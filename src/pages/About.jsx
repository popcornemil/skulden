import OneColumn from '../components/about/OneColumn'
import ThreeColumns from '../components/about/ThreeColumns'
import ThreeColumns2 from '../components/about/ThreeColumns2'
import TwoColumns2 from '../components/about/TwoColumns2'
import Footer from '../components/about/Footer'

export default function About() {
  return (
    <>
      <OneColumn />
      <ThreeColumns />
      <section className="bg-[#fcfbf9]">
        <div className="max-w-[1200px] mx-auto w-full relative p-6 md:p-[50px]"
          style={{ backgroundImage: 'linear-gradient(to right, rgba(10,10,10,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.07) 1px, transparent 1px)', backgroundSize: '50px 50px', backgroundPositionY: '24px', backgroundPositionX: '74px' }}
        >
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className="bg-midnight rounded-lg p-[50px] grid grid-cols-1 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-[22px] text-white mb-3">Giving Back</h3>
              <p className="font-serif text-[16px] text-white/60">We believe innovation should create a positive impact beyond business. Axxe supports research focused on ADHD in children, helping advance understanding and create better opportunities for the next generation.</p>
            </div>
            <div className="flex flex-col justify-end pl-0 md:pl-[50px] mt-6 md:mt-0">
              <p className="font-serif text-[16px] text-white/60 mb-4">Our commitment includes:</p>
              <ul className="font-serif text-[16px] text-white/60 space-y-3">
                <li className="flex items-start gap-3"><span className="text-gold mt-1.5 text-[8px]">●</span>Funding ADHD research initiatives</li>
                <li className="flex items-start gap-3"><span className="text-gold mt-1.5 text-[8px]">●</span>Supporting children and families</li>
                <li className="flex items-start gap-3"><span className="text-gold mt-1.5 text-[8px]">●</span>Advancing early diagnosis and treatment</li>
                <li className="flex items-start gap-3"><span className="text-gold mt-1.5 text-[8px]">●</span>Creating awareness through technology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ThreeColumns2 />
      <TwoColumns2 />
      <Footer />
    </>
  )
}
