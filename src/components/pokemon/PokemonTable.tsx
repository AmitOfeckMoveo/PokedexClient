import { Table } from '../table/Table';
import type { Pokemon } from '@/types/pokemon';
import { pokemonColumns } from './pokemonColumns';

export interface PokemonTableProps {
  data: Pokemon[];
  isLoading?: boolean;
  pagination?: {
    enabled: boolean;
    pageSize?: number;
    page?: number;
    onPageChange?: (page: number) => void;
  };
}

/**
 * PokemonTable - Renders a table of Pokemon using Table
 * 
 * @example
 * <PokemonTable data={pokemonList} isLoading={false} />
 */
export function PokemonTable({ data, isLoading, pagination }: PokemonTableProps) {
  return (
    <Table 
      data={data} 
      columns={pokemonColumns} 
      isLoading={isLoading}
      pagination={pagination}
    />
  );
}

