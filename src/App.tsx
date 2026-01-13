import { useState } from 'react'
import type { Pokemon } from './types/pokemon'
import pokemonData from './mocks/pokemon.json'
import { PokemonTable } from './components/pokemon/PokemonTable'

function App() {
  const [count, setCount] = useState(0)
  const pokemon = pokemonData as Pokemon[]
  const samplePokemon = pokemon.slice(0, 10) // First 10 Pokemon

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Pokedex Client</h1>
          <p className="text-neutral-600">Welcome to your Pokedex Client!</p>
          <button
            className="px-4 py-2 rounded-md bg-primary-300 text-white hover:bg-primary-400 transition"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Pokemon Table</h2>
          <PokemonTable data={samplePokemon} />
        </div>
      </div>
    </div>
  )
}

export default App
