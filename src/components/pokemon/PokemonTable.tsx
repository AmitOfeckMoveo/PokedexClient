import { Table } from '../table/Table';
import type { Pokemon } from '@/types/pokemon';
import { pokemonColumns } from './pokemonColumns';

export interface PokemonTableProps {
  data: Pokemon[];
}

/**
 * PokemonTable - Renders a table of Pokemon using Table
 * 
 * @example
 * <PokemonTable data={pokemonList} />
 */
export function PokemonTable({ data }: PokemonTableProps) {
  return <Table data={data} columns={pokemonColumns} />;
}

