import { useState, useEffect } from 'react';
import { PokemonTable } from './PokemonTable';
import { TablePagination } from '../table/TablePagination';
import { usePokemonTableData } from '@/hooks/usePokemonTableData';

export interface PokemonTablePageProps {

}

export function PokemonTablePage({}: PokemonTablePageProps) {
  const [page, setPage] = useState(1);
  const pageSize = 10;


  const { data, total, isLoading } = usePokemonTableData({
    page,
    pageSize,
  });

  const totalPages = Math.ceil(total / pageSize);

  useEffect(() => {
    if (page > totalPages && totalPages > 0) {
      setPage(1);
    }
  }, [page, totalPages]);

  return (
    <div className="space-y-0">
      <PokemonTable data={data} isLoading={isLoading} />

      <TablePagination
        page={page}
        pageSize={pageSize}
        total={total}
        onPageChange={setPage}
      />
    </div>
  );
}
