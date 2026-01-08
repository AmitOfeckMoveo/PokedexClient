import { GenericTable } from '../table/GenericTable';
import type { Pokemon } from '@/types/pokemon';
import { pokemonColumns } from './pokemonColumns';

export interface PokemonTableProps {
  data: Pokemon[];
}

/**
 * PokemonTable - Renders a table of Pokemon using GenericTable
 * 
 * @example
 * <PokemonTable data={pokemonList} />
 */
export function PokemonTable({ data }: PokemonTableProps) {
  return <GenericTable data={data} columns={pokemonColumns} />;
}

