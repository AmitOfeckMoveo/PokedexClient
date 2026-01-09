import { useState, useMemo, useEffect } from 'react';
import type { Pokemon } from '@/types/pokemon';
import type { PokemonFilters } from '@/types/pokemonFilters';
import { PokemonTable } from './PokemonTable';
import { TablePagination } from '../table/TablePagination';
import { SearchParams } from './SearchParams';

export interface PokemonTablePageProps {
  data: Pokemon[];
}

export function PokemonTablePage({
  data,
}: PokemonTablePageProps) {

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


  const filteredData = useMemo(() => {
    if (!filters.search.trim()) {
      return data;
    }

    const searchLower = filters.search.toLowerCase();
    return data.filter((pokemon) => {
      return pokemon.name.english.toLowerCase().startsWith(searchLower);
    });
  }, [data, filters.search]);


  const sortedData = useMemo(() => {
    const sorted = [...filteredData].sort((a, b) => {
      switch (filters.sort) {
        case 'alphabetically':
          return a.name.english.localeCompare(b.name.english);
        case 'hp-level':
          return (b.base?.HP ?? 0) - (a.base?.HP ?? 0); 
        case 'power-level':
          return (b.base?.Attack ?? 0) - (a.base?.Attack ?? 0); 
        default:
          return 0;
      }
    });
    return sorted;
  }, [filteredData, filters.sort]);

  useEffect(() => {
    setPage(1);
  }, [filters.search, filters.sort]);

  const total = sortedData.length;
  const totalPages = Math.ceil(total / filters.pageSize);


  const paginatedData = useMemo(() => {
    const startIndex = (filters.page - 1) * filters.pageSize;
    return sortedData.slice(startIndex, startIndex + filters.pageSize);
  }, [sortedData, filters.page, filters.pageSize]);

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
        <PokemonTable data={paginatedData} />

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
