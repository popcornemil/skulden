const logos = [
  '/axxe-frame.png',
  '/axxe-screen.png',
  '/axxe-play.png',
  '/axxe-cloude.png',
  '/axxe-revenue.png',
  '/axxe-ai.png',
  '/axxe-invest.png',
]

export default function LogoCarousel() {
  return (
    <section className="py-[100px] bg-midnight overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-midnight to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-midnight to-transparent z-10" />
        <div className="flex animate-scroll-left">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt=""
              className="h-8 mx-12 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
