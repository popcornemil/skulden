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
        <div className="max-w-[1200px] mx-auto w-full relative p-6 md:p-[50px]">
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <h2 className="font-serif text-[32px] md:text-[48px] lg:text-[64px] font-light text-midnight mb-4 text-center leading-[1.05]">Progress Should Benefit Everyone</h2>
          <p className="font-serif text-[16px] text-midnight/60 text-center">We believe innovation should create a positive impact beyond business. Axxe supports research focused on ADHD in children, helping advance understanding and create better opportunities for the next generation.</p>
        </div>
      </section>
      <ThreeColumns2 />
      <TwoColumns2 />
      <Footer />
    </>
  )
}
