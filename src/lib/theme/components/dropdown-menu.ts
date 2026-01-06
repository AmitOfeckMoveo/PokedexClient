import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Dropdown Menu Variants
 * Styling for the dropdown menu container
 * - All values from theme tokens
 */
export const dropdownMenuVariants = cva(
  cn(
    'absolute top-full left-0 min-w-full mt-dropdown-menu-gap',
    'bg-white border border-neutral-200 rounded-dropdown',
    'shadow z-50',
    'overflow-hidden'
  ),
  {
    variants: {},
    defaultVariants: {},
  }
);

export type DropdownMenuVariants = VariantProps<typeof dropdownMenuVariants>;

