import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="p-8 rounded-lg border bg-card text-card-foreground shadow-sm space-y-4">
        <h1 className="text-2xl font-bold">Pokedex Client</h1>
        <p className="text-neutral-600">Welcome to your Pokedex Client!</p>
        <button
          className="px-4 py-2 rounded-md bg-primary-300 text-white hover:bg-primary-400 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
