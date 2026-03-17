export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 md:px-[50px] md:py-5">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center">
        <a href="/2">
          <img src="/skulden-ny.png" alt="Skulden" className="h-12 md:h-16 w-auto brightness-0 invert" />
        </a>
      </div>
    </header>
  )
}
