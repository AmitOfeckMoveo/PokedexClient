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
import {
  tableVariants,
  tableHeaderRowVariants,
  tableHeaderCellVariants,
  tableBodyRowVariants,
  tableBodyCellVariants,
} from '@/lib/theme/components/table';

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
        tableVariants(),
        'overflow-x-auto', // Responsive: horizontal scroll on small screens
        className
      )}
    >
      <Table className="min-w-full">
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
          {data.map((row, rowIndex) => (
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
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

