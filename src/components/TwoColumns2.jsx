export default function TwoColumns2() {
  return (
    <section className="bg-[#fcfbf9]">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-2">
        <div className="relative p-[50px]">
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <p className="font-serif text-sm font-medium text-midnight mb-4">Get In Touch</p>
          <h2 className="font-serif text-[48px] font-light text-midnight leading-tight mb-4">Join the Next Generation<br />of Retail Technology</h2>
          <p className="font-serif text-[16px] text-midnight/60">The future of retail is connected, intelligent, and digital.<br />Axxe is building the infrastructure that powers it.</p>
        </div>
        <div className="relative p-[50px]">
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block font-serif text-[13px] text-midnight/40 mb-2">Name</label>
              <input type="text" placeholder="Your name" className="w-full bg-transparent border-b border-black/10 focus:border-midnight pb-3 text-midnight text-[16px] font-serif outline-none transition-colors duration-300 placeholder:text-midnight/25" />
            </div>
            <div>
              <label className="block font-serif text-[13px] text-midnight/40 mb-2">Company</label>
              <input type="text" placeholder="Your company" className="w-full bg-transparent border-b border-black/10 focus:border-midnight pb-3 text-midnight text-[16px] font-serif outline-none transition-colors duration-300 placeholder:text-midnight/25" />
            </div>
            <div>
              <label className="block font-serif text-[13px] text-midnight/40 mb-2">Email</label>
              <input type="email" placeholder="your@email.com" className="w-full bg-transparent border-b border-black/10 focus:border-midnight pb-3 text-midnight text-[16px] font-serif outline-none transition-colors duration-300 placeholder:text-midnight/25" />
            </div>
            <div>
              <label className="block font-serif text-[13px] text-midnight/40 mb-2">Phone</label>
              <input type="tel" placeholder="+46 70 000 0000" className="w-full bg-transparent border-b border-black/10 focus:border-midnight pb-3 text-midnight text-[16px] font-serif outline-none transition-colors duration-300 placeholder:text-midnight/25" />
            </div>
            <div className="pt-4">
              <button type="submit" className="font-serif text-[16px] font-medium text-midnight hover:text-gold transition-colors duration-300">Submit &rarr;</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
