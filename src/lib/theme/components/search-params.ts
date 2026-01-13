import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * SearchParams Component Variants
 * Container for search input and sort dropdown
 * 
 * Design specs from Figma:
 * - Height: 38px
 * - Gap: 16px between search and sort
 * - Responsive: Search input max-width 448px on larger screens
 */
export const searchParamsVariants = cva(
  cn(
    'h-search-params-height',
    'flex items-center justify-between',
    'w-full',
    'gap-search-params-gap'
  )
);

export type SearchParamsVariants = VariantProps<typeof searchParamsVariants>;

/**
 * SearchParams Search Container Variants
 * Container for search input with icon
 */
export const searchParamsSearchContainerVariants = cva(
  cn(
    'flex-1',
    'max-w-search-params-max-width',
    'relative',
    'group'
  )
);

export type SearchParamsSearchContainerVariants = VariantProps<typeof searchParamsSearchContainerVariants>;

/**
 * SearchParams Icon Container Variants
 * Absolute positioned icon container
 */
export const searchParamsIconContainerVariants = cva(
  cn(
    'absolute',
    'left-search-params-icon-left',
    'top-1/2 -translate-y-1/2',
    'pointer-events-none',
    'z-10',
    'flex items-center'
  )
);

export type SearchParamsIconContainerVariants = VariantProps<typeof searchParamsIconContainerVariants>;

