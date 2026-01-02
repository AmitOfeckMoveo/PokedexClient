import { useState } from 'react'
import { Button } from './components/ui/Button'
import { Text } from './components/ui/Text'
import { Input } from './components/ui/Input'

function App() {
  const [count, setCount] = useState(0)
  const [searchWithClear, setSearchWithClear] = useState('')

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
          <div className="space-y-3 mt-6 mb-6">
            <Text typography="subheading-regular" color="text-neutral-700"> Bulbasaur </Text>
            <Text typography="body-regular" color="text-neutral-700">
              For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.
            </Text>
            <Text typography="body-bold" color="text-neutral-500"> 1 </Text>
            <Text typography="caption-medium" color="text-extended-purple"> Poison </Text>
          </div>

          {/* Input States Demo - All 6 Figma States */}
          <div className="mt-8">
            <h2 className="heading-medium-bold mb-4">Text Input States</h2>
            <div className="grid grid-cols-3 gap-6">
              {/* 1. Default */}
              <div>
                <p className="body-regular text-neutral-700 mb-2">Default</p>
                <Input placeholder="Search" leftIcon="🔍"/>
              </div>

              {/* 6. Disable */}
              <div>
                <p className="body-regular text-neutral-700 mb-2">Disable</p>
                <Input placeholder="Search" leftIcon="🔍" disabled/>
              </div>
            </div>
          </div>

          {/* Clear Button Example */}
          <div className="mt-8">
            <h2 className="heading-medium-bold mb-4">Clear Button Example</h2>
            <Input 
              value={searchWithClear}
              onChange={(e) => setSearchWithClear(e.target.value)}
              onClear={() => setSearchWithClear('')}
              placeholder="Search with clear button"
              leftIcon="🔍"
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App

