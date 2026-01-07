import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const dropdownTriggerVariants = cva(
  cn(
    'inline-flex items-center',
    'rounded-dropdown font-normal transition-colors',
    'bg-neutrals-white border border-neutral-200',
    'text-neutrals-400',
    'h-dropdown-trigger-height',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:bg-neutrals-white disabled:border-neutral-300 disabled:text-neutral-300',
    'gap-dropdown-trigger-gap',
    'px-dropdown-trigger-px py-dropdown-trigger-py'
  )
);

export type DropdownTriggerVariants = VariantProps<typeof dropdownTriggerVariants>;

