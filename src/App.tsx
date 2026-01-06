import { useState } from 'react'
import { Button } from './components/ui/Button'
import { Text } from './components/ui/Text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Pokedex Client</h1>
        <div className="card p-6 bg-card text-card-foreground rounded-lg border">
          <p className="mb-4">Welcome to your Pokedex Client!</p>
          <div className="flex gap-4 mb-6">
            <Button variant="primary" size="medium" onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </Button>
            <Button variant="secondary" size="medium" onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </Button>
          </div>
          
          {/* Figma Text Examples */}
          <div className="space-y-3 mt-6">
            <Text typography="subheading-regular" color="text-neutral-700"> Bulbasaur </Text>
            <Text typography="body-regular" color="text-neutral-700">
              For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.
            </Text>
            <Text typography="body-bold" color="text-neutral-500"> 1 </Text>
            <Text typography="caption-medium" color="text-extended-purple"> Poison </Text>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App

