import { useState, useMemo, useEffect } from 'react';
import type { Pokemon } from '@/types/pokemon';
import { PokemonTable } from './PokemonTable';
import { TablePagination } from '../table/TablePagination';

export interface PokemonTablePageProps {
  data: Pokemon[];
}

export function PokemonTablePage({
  data,
}: PokemonTablePageProps) {

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const total = data.length;
  const totalPages = Math.ceil(total / pageSize);

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }, [data, page, pageSize]); // save the results, page=1 saves array slice(0,10), page=2 saves array slice(10,20), etc.

  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [page, totalPages]);

  return (
    <div className="space-y-0">
      <PokemonTable data={paginatedData} />

      <TablePagination
        page={page}
        pageSize={pageSize}
        total={total}
        onPageChange={setPage}
      />
    </div>
  );
}
