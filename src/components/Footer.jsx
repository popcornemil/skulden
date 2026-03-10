export default function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 bg-midnight border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <img
            src="/logo-nopayoff-gold.png"
            alt="Axxe"
            className="h-6 w-auto opacity-60"
          />

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(link => (
              <a
                key={link}
                href="#"
                className="text-white/30 text-xs tracking-[0.1em] hover:text-gold transition-colors duration-300"
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
                className="text-white/30 text-xs tracking-[0.1em] uppercase hover:text-gold transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs font-light tracking-wide">
            &copy; {new Date().getFullYear()} Axxe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
