import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Input Component Variants
 * Based on Figma specifications:
 * - Height: 2.375rem (38px) - responsive, scales with root font size
 * - Border radius: 8px
 * - Padding: Top 8px, Right 16px, Bottom 8px, Left 12px
 * - Gap: 8px
 * States: Default, Hover, Pressed (Focus), With value, After search, Disable
 */
export const inputVariants = cva(
  cn(
    'h-input rounded-lg border',
    'body-regular',
    'transition-colors',
    'focus:outline-none',
    'disabled:pointer-events-none',
    'items-center gap-2',
    'py-2 pl-3 pr-4',
    'w-auto inline-flex' // Default width behavior - can be overridden via className
  ),
  {
    variants: {
      state: {
        default: cn(
          'border-neutral-200 bg-transparent',
          'hover:border-neutral-600',
          'focus:border-neutral-500 focus:bg-transparent',
          'focus-within:bg-transparent'
        ),
        disabled: cn(
          'bg-neutral-100 border-neutral-200',
          'text-neutral-300 cursor-not-allowed'
        ),
      },
    },
    defaultVariants: {
      state: 'default',
    },
  }
);

export type InputVariants = VariantProps<typeof inputVariants>;

