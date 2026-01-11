import { useState, useEffect } from 'react';
import type { PokemonFilters } from '@/types/pokemonFilters';
import { PokemonTable } from './PokemonTable';
import { TablePagination } from '../table/TablePagination';
import { SearchParams } from './SearchParams';
import { usePokemonTableData } from '@/hooks/usePokemonTableData';

export interface PokemonTablePageProps {
  // No props needed - data is fetched internally via hook
}

/**
 * PokemonTablePage - Container component for Pokemon table
 * 
 * Manages UI state (search, sort, pagination) and delegates all data processing
 * to usePokemonTableData hook. This component is presentation-only.
 */
export function PokemonTablePage({}: PokemonTablePageProps) {
    
  const [filters, setFilters] = useState<PokemonFilters>({
    search: '',
    sort: 'alphabetically',
    page: 1,
    pageSize: 10,
  });

  const setSearch = (value: string) => {
    setFilters((prev) => ({ ...prev, search: value }));
  };

  const setSort = (value: PokemonFilters['sort']) => {
    setFilters((prev) => ({ ...prev, sort: value }));
  };

  const setPage = (value: number) => {
    setFilters((prev) => ({ ...prev, page: value }));
  };

  const { data, total, isLoading } = usePokemonTableData(filters);

  const totalPages = Math.ceil(total / filters.pageSize);

  useEffect(() => {
    setPage(1);
  }, [filters.search, filters.sort]);

  useEffect(() => {
    if (filters.page > totalPages && totalPages > 0) {
      setPage(1);
    }
  }, [filters.page, totalPages]);

  return (
    <div className="space-y-4">
      <SearchParams
        search={filters.search}
        onSearchChange={setSearch}
        sort={filters.sort}
        onSortChange={setSort}
      />

      <div className="space-y-0">
        <PokemonTable data={data} isLoading={isLoading} />

        <TablePagination
          page={filters.page}
          pageSize={filters.pageSize}
          total={total}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
