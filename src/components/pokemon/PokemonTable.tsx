import { GenericTable } from '../table/GenericTable';
import type { Pokemon } from '@/types/pokemon';
import { pokemonColumns } from './pokemonColumns';

export interface PokemonTableProps {
  data: Pokemon[];
  isLoading?: boolean;
}


export function PokemonTable({ data, isLoading }: PokemonTableProps) {
  return <GenericTable data={data} columns={pokemonColumns} isLoading={isLoading} />;
}

