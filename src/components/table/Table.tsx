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
}

/**
 * Table - A reusable table component that doesn't know about specific data types
 *
 * Uses shadcn/ui table primitives internally for consistent styling and behavior.
 */
export function Table<T>({ data, columns, className, isLoading }: TableProps<T>) {
  return (
    <div
      className={cn(
        tableVariants(),
        'overflow-x-auto', // Responsive: horizontal scroll on small screens
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
            data.map((row, rowIndex) => (
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
  );
}

