import { useScrollReveal } from '../hooks/useScrollReveal'

export default function HubSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section className="bg-[#fcfbf9]" ref={ref}>
      <div className="max-w-[1200px] mx-auto w-full relative p-6 md:p-[50px]">

        <div className="text-center">
          <img src="/skulden-staende.png" alt="Skulden" className={`h-24 md:h-32 mx-auto mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} />
          <h2 className={`font-serif text-[32px] md:text-[48px] lg:text-[56px] font-light text-midnight leading-tight transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Dags att sätta press
          </h2>
          <p className={`font-serif text-[16px] text-midnight/60 mt-4 max-w-[600px] mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Följ Skulden.se. Följ Skattebetalarna. Bli medlem och hjälp till att sätta stopp för slöseriet. Ju fler vi är, desto svårare blir det att ignorera verkligheten.
          </p>
          <div className={`mt-8 flex flex-col md:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="#" className="px-8 py-4 bg-[#e65245] text-white font-serif text-[16px] font-medium rounded-full hover:bg-[#d4453a] transition-colors duration-300">
              Bli medlem idag
            </a>
          </div>
          <p className={`mt-6 font-serif text-[14px] text-midnight/40 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Dela</p>
          <div className={`mt-3 flex items-center justify-center gap-3 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Facebook */}
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://skulden.se" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-midnight/20 flex items-center justify-center text-midnight hover:bg-midnight hover:text-white transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="https://twitter.com/intent/tweet?url=https://skulden.se&text=Kolla%20Sveriges%20skuld%20i%20realtid" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-midnight/20 flex items-center justify-center text-midnight hover:bg-midnight hover:text-white transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-midnight/20 flex items-center justify-center text-midnight hover:bg-midnight hover:text-white transition-all duration-300">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-midnight/20 flex items-center justify-center text-midnight hover:bg-midnight hover:text-white transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://skulden.se" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-midnight/20 flex items-center justify-center text-midnight hover:bg-midnight hover:text-white transition-all duration-300">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              {/* Kopiera länk */}
              <button onClick={() => { navigator.clipboard.writeText('https://skulden.se'); }} className="w-10 h-10 rounded-full border border-midnight/20 flex items-center justify-center text-midnight hover:bg-midnight hover:text-white transition-all duration-300">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </button>
          </div>
        </div>
      </div>
    </section>
  )
}
