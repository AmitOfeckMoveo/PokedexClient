import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Pokedex Client</h1>
        <div className="card p-6 bg-card text-card-foreground rounded-lg border">
          <p className="mb-4">Welcome to your Pokedex Client!</p>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90"
          >
            count is {count}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

