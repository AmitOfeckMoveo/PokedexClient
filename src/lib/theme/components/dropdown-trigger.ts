import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Dropdown Trigger Variants
 * Styling for the dropdown trigger button
 * - Pixel-perfect match to Figma "Filter" component
 */
export const dropdownTriggerVariants = cva(
  cn(
    'inline-flex items-center',
    'rounded-dropdown font-normal transition-colors',
    'bg-white border border-neutral-200',
    'text-neutrals-400',
    'h-[38px]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:bg-white disabled:border-neutral-300 disabled:text-neutral-300',
    'gap-dropdown-trigger-gap',
    'px-dropdown-trigger-px py-dropdown-trigger-py'
  ),
  {
    variants: {},
    defaultVariants: {},
  }
);

export type DropdownTriggerVariants = VariantProps<typeof dropdownTriggerVariants>;

