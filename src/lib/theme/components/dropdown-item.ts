import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Dropdown Item Variants
 * Styling for individual dropdown options
 * - All values from theme tokens
 */
export const dropdownItemVariants = cva(
  cn(
    'w-full px-3 py-1.5',
    'body-regular text-neutral-700',
    'cursor-pointer transition-colors',
    'hover:bg-neutral-100',
    'focus:outline-none focus:bg-neutral-100',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'
  ),
  {
    variants: {
      selected: {
        true: 'bg-neutral-100',
        false: '',
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
);

export type DropdownItemVariants = VariantProps<typeof dropdownItemVariants>;

