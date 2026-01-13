import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Table Component Variants
 * Reusable table styling using design tokens
 */
export const tableVariants = cva(
  cn(
    'rounded-lg border border-neutral-100 overflow-hidden',
    'w-full'
  )
);

export type TableVariants = VariantProps<typeof tableVariants>;

/**
 * Table Header Row Variants
 * Header row with primary-50 background
 */
export const tableHeaderRowVariants = cva(
  cn(
    'h-table-header-height',
    'bg-primary-50',
    'hover:bg-primary-50',
    'border-b border-neutral-100'
  )
);

export type TableHeaderRowVariants = VariantProps<typeof tableHeaderRowVariants>;

/**
 * Table Header Cell Variants
 * Header cell with typography and padding
 */
export const tableHeaderCellVariants = cva(
  cn(
    'align-middle',
    'px-table-cell-padding py-table-cell-padding',
    'text-left',
    'body-bold',
    'text-neutral-700'
  )
);

export type TableHeaderCellVariants = VariantProps<typeof tableHeaderCellVariants>;

/**
 * Table Body Row Variants
 * Body row with hover state
 */
export const tableBodyRowVariants = cva(
  cn(
    'h-table-row-height',
    'border-b border-neutral-100',
    'hover:bg-neutral-100',
    'transition-colors'
  )
);

export type TableBodyRowVariants = VariantProps<typeof tableBodyRowVariants>;

/**
 * Table Body Cell Variants
 * Body cell with padding and alignment
 */
export const tableBodyCellVariants = cva(
  cn(
    'align-middle',
    'px-table-cell-padding py-table-cell-padding'
  )
);

export type TableBodyCellVariants = VariantProps<typeof tableBodyCellVariants>;

