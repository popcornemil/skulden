export default function OneColumn() {
  return (
    <section className="bg-[#fcfbf9]">
      <div className="max-w-[1200px] mx-auto w-full relative p-[50px]">
        {/* Left line */}
        <div className="absolute left-0 top-[10px] bottom-[10px] w-px bg-black/7" />
        {/* Right line */}
        <div className="absolute right-0 top-[10px] bottom-[10px] w-px bg-black/7" />
        {/* Bottom line */}
        <div className="absolute bottom-0 left-[10px] right-[10px] h-px bg-black/7" />

        <h2 className="font-serif text-[64px] font-light text-midnight mb-4 text-center">One Platform. Multiple Layers.</h2>
        <p className="font-serif text-[16px] text-midnight/60 text-center">Axxe combines hardware, software, and intelligence into one unified ecosystem.</p>
      </div>
    </section>
  )
}
