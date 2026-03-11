export default function Footer() {
  return (
    <footer className="bg-[#fcfbf9]">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Logo row */}
        <div className="relative p-[50px] flex justify-center">
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className="flex flex-col items-center gap-4">
            <img
              src="/logo-nopayoff-gold.png"
              alt="Axxe"
              className="h-14 w-auto"
              style={{ filter: 'brightness(0)' }}
            />
            <p className="font-serif text-[16px] text-midnight/40">Technology for the physical world.</p>
          </div>
        </div>

        {/* Links row */}
        <div className="relative p-[50px]">
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(link => (
                <a
                  key={link}
                  href="#"
                  className="text-midnight/30 text-xs tracking-[0.1em] uppercase hover:text-midnight transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-6">
              {['Instagram', 'LinkedIn', 'YouTube'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-midnight/30 text-xs tracking-[0.1em] uppercase hover:text-midnight transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright row */}
        <div className="relative px-[50px] py-6">
          <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
          <p className="text-midnight/20 text-xs font-light tracking-wide text-center">
            &copy; {new Date().getFullYear()} Axxe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
