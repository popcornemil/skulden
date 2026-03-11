import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function LogoSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-3">
        <div className="relative p-[10px] flex items-center justify-center">
          <div className="hidden md:block absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="md:hidden absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="https://www.giant-pumpkin.com/" target="_blank" rel="noopener noreferrer">
              <div
                className="transition-all duration-500 hover:scale-110"
                style={{
                  WebkitMaskImage: 'url(/giantpumpkin.png)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: 'url(/giantpumpkin.png)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  backgroundColor: '#0a0a0a',
                  width: '180px',
                  height: '80px',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1b4137'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0a0a0a'}
              />
            </a>
          </div>
        </div>
        <div className="relative p-6 md:p-[50px] flex items-center justify-center">
          <div className="md:hidden absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-serif text-[14px] text-midnight/40 text-center">Together these platforms enable retailers and brands to scale campaigns across connected in-store media networks.</p>
          </div>
        </div>
        <div className="relative p-[10px] flex items-center justify-center">
          <div className="hidden md:block absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="md:hidden absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div
                className="transition-all duration-500 hover:scale-110"
                style={{
                  WebkitMaskImage: 'url(/doohclick.png)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: 'url(/doohclick.png)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  backgroundColor: '#0a0a0a',
                  width: '180px',
                  height: '80px',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1b4137'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0a0a0a'}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
