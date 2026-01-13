import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';


export const sortDropdownTriggerVariants = cva(
  cn(
    'h-sort-dropdown-height',
    'px-sort-dropdown-padding-x',
    'py-sort-dropdown-padding-y',
    'rounded-lg',
    'border border-neutral-200',
    'bg-transparent',
    'flex items-center',
    'gap-sort-dropdown-gap',
    'transition-colors',
    'hover:border-neutral-600',
    'focus:outline-none focus:border-neutral-200',
    'active:border-neutral-200',
    'focus-visible:outline-none'
  )
);

export type SortDropdownTriggerVariants = VariantProps<typeof sortDropdownTriggerVariants>;

