import { type Column } from '../table/GenericTable';
import type { Pokemon } from '@/types/pokemon';
import { PokemonName } from './PokemonName';
import { PokemonTypeList } from './PokemonTypeList';
import { PokemonHP } from './PokemonHP';
import { Text } from '../ui/Text';

/**
 * Pokemon table column definitions
 * Defines what each column renders for Pokemon data
 */
export const pokemonColumns: Column<Pokemon>[] = [
  {
    key: 'name',
    header: 'Pokemon name',
    className: 'w-table-name-column-width',
    render: (pokemon) => (
      <PokemonName
        name={pokemon.name.english}
        image={pokemon.image.thumbnail}
        isOwned={pokemon.id === 2 || pokemon.id === 4} // Example: show pokeball for Charmander and Ivysaur
      />
    ),
  },
  {
    key: 'type',
    header: 'Type',
    render: (pokemon) => (
      <PokemonTypeList size="sm" types={pokemon.type} maxVisible={2} />
    ),
  },
  {
    key: 'description',
    header: 'Description',
    className: 'max-w-table-description-max-width',
    render: (pokemon) => (
      <Text typography="body-regular" color="neutral-700" truncate>
        {pokemon.description}
      </Text>
    ),
  },
  {
    key: 'powerLevel',
    header: 'Power level',
    render: (pokemon) => (
      <Text typography="body-bold" color="neutral-700">
        {pokemon.base.Attack}
      </Text>
    ),
  },
  {
    key: 'hp',
    header: 'HP',
    render: (pokemon) => <PokemonHP value={pokemon.base.HP} size="sm" />,
  },
];

