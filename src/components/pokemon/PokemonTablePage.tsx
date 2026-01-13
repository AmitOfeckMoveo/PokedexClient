import { useState, useEffect } from 'react';
import { PokemonTable } from './PokemonTable';
import { SearchParams } from './SearchParams';
import { usePokemonTableData } from '@/hooks/usePokemonTableData';
import { useTableSearchParams } from '@/hooks/useTableSearchParams';
import type { SortOption } from '@/types/sort';

export interface PokemonTablePageProps {}

export function PokemonTablePage({}: PokemonTablePageProps) {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // Generic UI state hook (manages search/sort input state)
  const { 
    search, 
    sort, 
    setSearch, 
    setSort 
  } = useTableSearchParams<SortOption>({
    defaultSearch: '',
    defaultSort: 'alphabetically',
  });

  // Reset page when search/sort changes
  useEffect(() => {
    setPage(1);
  }, [search, sort]);

  // Domain-specific data hook (does filtering/sorting)
  const { data, isLoading } = usePokemonTableData({
    search,
    sort: sort || 'alphabetically',
    ownership: 'all',
  });

  return (
    <div className="space-y-4">
      {/* Pokemon-specific SearchParams */}
      <SearchParams
        search={search}
        onSearchChange={setSearch}
        sort={sort || 'alphabetically'}
        onSortChange={setSort}
      />

      {/* Pokemon Table */}
      <PokemonTable 
        data={data} 
        isLoading={isLoading}
        pagination={{
          enabled: true,
          pageSize,
          page,
          onPageChange: setPage,
        }}
      />
    </div>
  );
}
