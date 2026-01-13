import { Table } from '../table/Table';
import type { Pokemon } from '@/types/pokemon';
import { pokemonColumns } from './pokemonColumns';

export interface PokemonTableProps {
  data: Pokemon[];
  isLoading?: boolean;
}

/**
 * PokemonTable - Renders a table of Pokemon using Table
 * 
 * @example
 * <PokemonTable data={pokemonList} isLoading={false} />
 */
export function PokemonTable({ data, isLoading }: PokemonTableProps) {
  return <Table data={data} columns={pokemonColumns} isLoading={isLoading} />;
}

