import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const dropdownMenuVariants = cva(
  cn(
    'absolute top-full left-0 min-w-full mt-dropdown-menu-gap',
    'bg-neutrals-white border border-neutral-200 rounded-dropdown',
    'shadow-sm z-50',
    'overflow-hidden'
  )
);

export type DropdownMenuVariants = VariantProps<typeof dropdownMenuVariants>;

