import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const tablePaginationVariants = cva(
  cn(
    'h-table-pagination-height',
    'flex items-center justify-between',
    'px-table-pagination-padding',
    'bg-white',
    'border-t border-neutral-100'
  )
);

export type TablePaginationVariants = VariantProps<typeof tablePaginationVariants>;

export const tablePaginationButtonVariants = cva(
  cn(
    'inline-flex items-center justify-center',
    'h-auto w-auto p-0',
    'transition-colors',
    'hover:opacity-70',
    'focus-visible:outline-none',
    'disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed'
  )
);

export type TablePaginationButtonVariants = VariantProps<typeof tablePaginationButtonVariants>;

