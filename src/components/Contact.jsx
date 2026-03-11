import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const [ref, isVisible] = useScrollReveal(0.15)

  return (
    <section id="contact" className="py-[100px] px-6 lg:px-12 bg-[#141414] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(197,165,90,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div
          ref={ref}
          className={`text-center transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h2 className="font-serif text-[48px] font-light mb-6">
            Join the Next Generation
            <br />of <span className="italic text-gold">Retail Technology</span>
          </h2>
          <p className="text-white/50 font-light max-w-xl mx-auto mb-16 leading-relaxed">
            The future of retail is connected, intelligent, and digital.
            <br />Axxe is building the infrastructure that powers it.
          </p>
        </div>

        {/* Form */}
        <form
          className={`space-y-6 transition-all duration-800 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/30 text-[10px] tracking-[0.3em] uppercase mb-3">
                First Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/10 focus:border-gold pb-3 text-white text-sm font-light outline-none transition-colors duration-300 placeholder:text-white/20"
                placeholder="Your first name"
              />
            </div>
            <div>
              <label className="block text-white/30 text-[10px] tracking-[0.3em] uppercase mb-3">
                Last Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/10 focus:border-gold pb-3 text-white text-sm font-light outline-none transition-colors duration-300 placeholder:text-white/20"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/30 text-[10px] tracking-[0.3em] uppercase mb-3">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white/10 focus:border-gold pb-3 text-white text-sm font-light outline-none transition-colors duration-300 placeholder:text-white/20"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-white/30 text-[10px] tracking-[0.3em] uppercase mb-3">
                Phone
              </label>
              <input
                type="tel"
                className="w-full bg-transparent border-b border-white/10 focus:border-gold pb-3 text-white text-sm font-light outline-none transition-colors duration-300 placeholder:text-white/20"
                placeholder="+46 70 000 0000"
              />
            </div>
          </div>

          <div>
            <label className="block text-white/30 text-[10px] tracking-[0.3em] uppercase mb-3">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-white/10 focus:border-gold pb-3 text-white text-sm font-light outline-none transition-colors duration-300 resize-none placeholder:text-white/20"
              placeholder="Tell us about your project..."
            />
          </div>

          <div className="pt-6 text-center">
            <button
              type="submit"
              className="px-16 py-4 bg-gold text-midnight text-xs font-semibold tracking-[0.25em] uppercase rounded-[10px] hover:bg-gold-light transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </form>

        {/* Contact details */}
        <div className={`mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center transition-all duration-800 delay-400 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div>
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">Email</p>
            <p className="text-white/50 font-light text-sm">hello@axxe.com</p>
          </div>
          <div>
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">Phone</p>
            <p className="text-white/50 font-light text-sm">+46 70 000 0000</p>
          </div>
          <div>
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">Tagline</p>
            <p className="text-white/50 font-light text-sm">Technology for the physical world.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
