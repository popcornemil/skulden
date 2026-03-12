import { useState } from 'react'

const PASSWORD = 'axxeinvest'

export default function PasswordGate({ children }) {
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem('axxe-auth') === 'true'
  )
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === PASSWORD) {
      sessionStorage.setItem('axxe-auth', 'true')
      setAuthenticated(true)
    } else {
      setError(true)
      setTimeout(() => setError(false), 1500)
    }
  }

  if (authenticated) return children

  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-[360px] text-center">
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter password"
          autoFocus
          className={`w-full bg-white/5 border ${error ? 'border-red-400' : 'border-white/10'} rounded-full px-6 py-4 text-white font-serif text-[16px] placeholder-white/30 outline-none focus:border-gold transition-colors duration-300`}
        />
        <button
          type="submit"
          className="mt-4 w-full bg-gold text-midnight font-serif text-[16px] font-medium rounded-full px-6 py-4 hover:bg-gold-light transition-colors duration-300"
        >
          Enter
        </button>
      </form>
    </div>
  )
}
