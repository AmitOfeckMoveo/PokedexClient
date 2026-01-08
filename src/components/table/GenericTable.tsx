import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '../ui/table';

export interface Column<T> {
  key: string;
  header: React.ReactNode;
  render: (row: T) => React.ReactNode;
  className?: string;
}

export interface GenericTableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
}

/**
 * GenericTable - A reusable table component that doesn't know about specific data types
 * 
 * @example
 * const columns: Column<MyType>[] = [
 *   { key: 'name', header: 'Name', render: (row) => row.name },
 *   { key: 'value', header: 'Value', render: (row) => row.value },
 * ];
 * 
 * <GenericTable data={myData} columns={columns} />
 */
export function GenericTable<T>({ data, columns, className }: GenericTableProps<T>) {
  return (
    <div
      className={cn(
        'rounded-lg border border-neutral-100 overflow-hidden',
        className
      )}
    >
      <Table>
        <TableHeader>
          <TableRow className="h-12 bg-primary-50 hover:bg-primary-50 border-b border-neutral-100">
            {columns.map((column) => (
              <TableHead
                key={column.key}
                className={cn(
                  'align-middle px-4 py-4',
                  'font-mulish text-[14px] font-bold text-neutral-700 leading-[22px]',
                  column.className
                )}
              >
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className="h-[72px] border-b border-neutral-100 hover:bg-neutral-50/50"
            >
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  className={cn('align-middle px-4 py-4', column.className)}
                >
                  {column.render(row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

