import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Spinner Component Variants
 * - auto: Scales with parent element using 1em (relative to font size)
 * - sm, md, lg: Fixed pixel sizes for predictable sizing
 */
export const spinnerVariants = cva(
  cn(
    'inline-block animate-spin rounded-full',
    'border-2 border-current border-t-transparent'
  ),
  {
    variants: {
      size: {
        auto: 'h-[1em] w-[1em]',
        sm: 'h-spinner-size-sm w-spinner-size-sm',
        md: 'h-spinner-size-md w-spinner-size-md',
        lg: 'h-spinner-size-lg w-spinner-size-lg',
      },
    },
    defaultVariants: {
      size: 'auto',
    },
  }
);

export type SpinnerVariants = VariantProps<typeof spinnerVariants>;

