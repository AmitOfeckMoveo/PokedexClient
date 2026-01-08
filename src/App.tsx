import type { Pokemon } from './types/pokemon'
import pokemonData from './mocks/pokemon.json'
import { PokemonTablePage } from './components/pokemon/PokemonTablePage'

function App() {
  const allPokemon = pokemonData as Pokemon[]

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Pokedex Client</h1>
          <p className="text-neutral-600">Welcome to your Pokedex Client!</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Pokemon Table</h2>
          <PokemonTablePage data={allPokemon} />
        </div>
      </div>
    </div>
  )
}

export default App
