import { useState } from 'react';
import { PokemonTable } from './PokemonTable';
import { usePokemonTableData } from '@/hooks/usePokemonTableData';

export interface PokemonTablePageProps {}

export function PokemonTablePage({}: PokemonTablePageProps) {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // Data layer: Get all filtered/sorted Pokemon data
  const { data, isLoading } = usePokemonTableData({
    search: '',
    sort: 'alphabetically',
    ownership: 'all',
  });

  return (
    <PokemonTable 
      data={data} 
      isLoading={isLoading}
      pagination={{
        enabled: true,
        pageSize,
        page, // Controlled mode
        onPageChange: setPage,
      }}
    />
  );
}
