import { useState, useMemo, useEffect } from 'react';
import type { Pokemon } from '@/types/pokemon';
import type { SortOption } from '@/types/sort';
import { PokemonTable } from './PokemonTable';
import { TablePagination } from '../table/TablePagination';
import { SearchParams } from './SearchParams';

export interface PokemonTablePageProps {
  data: Pokemon[];
}

export function PokemonTablePage({
  data,
}: PokemonTablePageProps) {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortOption>('alphabetically');
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);

  // Filter data by search query (name only - must start with)
  const filteredData = useMemo(() => {
    if (!search.trim()) {
      return data;
    }

    const searchLower = search.toLowerCase();
    return data.filter((pokemon) => {
      // Search in name only - must start with search query
      return pokemon.name.english.toLowerCase().startsWith(searchLower);
    });
  }, [data, search]);

  // Sort filtered data
  const sortedData = useMemo(() => {
    const sorted = [...filteredData].sort((a, b) => {
      switch (sort) {
        case 'alphabetically':
          return a.name.english.localeCompare(b.name.english);
        case 'hp-level':
          return (b.base?.HP ?? 0) - (a.base?.HP ?? 0); // Descending (highest first)
        case 'power-level':
          return (b.base?.Attack ?? 0) - (a.base?.Attack ?? 0); // Descending (highest first)
        default:
          return 0;
      }
    });
    return sorted;
  }, [filteredData, sort]);

  // Reset to page 1 when search or sort changes
  useEffect(() => {
    setPage(1);
  }, [search, sort]);

  const total = sortedData.length;
  const totalPages = Math.ceil(total / pageSize);

  // Paginate sorted data
  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, page, pageSize]);

  useEffect(() => {
    if (page > totalPages && totalPages > 0) {
      setPage(1);
    }
  }, [page, totalPages]);

  return (
    <div className="space-y-4">
      <SearchParams
        search={search}
        onSearchChange={setSearch}
        sort={sort}
        onSortChange={setSort}
      />

      <div className="space-y-0">
        <PokemonTable data={paginatedData} />

        <TablePagination
          page={page}
          pageSize={pageSize}
          total={total}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
