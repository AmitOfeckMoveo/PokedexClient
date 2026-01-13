import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  Table as TablePrimitive,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '../ui/table';
import {
  tableVariants,
  tableHeaderRowVariants,
  tableHeaderCellVariants,
  tableBodyRowVariants,
  tableBodyCellVariants,
} from '@/lib/theme/components/table';
import { Spinner } from '../ui/Spinner';
import { TablePagination } from './TablePagination';
import { useTable } from '@/hooks/useTable';

export interface Column<T> {
  key: string;
  header: React.ReactNode;
  render: (row: T) => React.ReactNode;
  className?: string;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
  isLoading?: boolean;
  pagination?: {
    enabled: boolean;
    pageSize?: number;
    page?: number; // Controlled mode
    onPageChange?: (page: number) => void; // Controlled mode
  };
}


export function Table<T>({ data, columns, className, isLoading, pagination }: TableProps<T>) {
  const { paginatedData, total, page, pageSize, setPage } = useTable({
    data,
    pagination,
  });

  return (
    <div className="space-y-0">
      <div
        className={cn(
          tableVariants(),
          'overflow-x-auto', 
          className
        )}
      >
        <TablePrimitive className="min-w-full">
          <TableHeader>
            <TableRow className={tableHeaderRowVariants()}>
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className={cn(
                    tableHeaderCellVariants(),
                    column.className
                  )}
                >
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className={cn(
                    tableBodyCellVariants(),
                    'text-center py-12'
                  )}
                >
                  <div className="flex items-center justify-center">
                    <Spinner size="md" aria-label="Loading data" />
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  className={tableBodyRowVariants()}
                >
                  {columns.map((column) => (
                    <TableCell
                      key={column.key}
                      className={cn(
                        tableBodyCellVariants(),
                        column.className
                      )}
                    >
                      {column.render(row)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </TablePrimitive>
      </div>
      
      {/* Render pagination only when enabled */}
      {pagination?.enabled && !isLoading && (
        <TablePagination
          page={page}
          pageSize={pageSize}
          total={total}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}

