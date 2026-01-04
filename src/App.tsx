import { useState } from 'react'
import { Button } from './components/ui/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Pokedex Client</h1>
        <div className="card p-6 bg-card text-card-foreground rounded-lg border">
          <p className="mb-4">Welcome to your Pokedex Client!</p>
          <Button variant="primary" size="medium" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
