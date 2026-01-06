import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Icon Component Variants
 * - auto: Scales with parent element using 1em (relative to font size)
 * - sm, md, lg: Fixed sizes using theme tokens
 */
export const iconVariants = cva(
  cn(
    'flex-shrink-0 inline-block'
  ),
  {
    variants: {
      size: {
        auto: 'w-[1em] h-[1em]',
        sm: 'w-icon-size-sm h-icon-size-sm',
        md: 'w-icon-size-md h-icon-size-md',
        lg: 'w-icon-size-lg h-icon-size-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type IconVariants = VariantProps<typeof iconVariants>;

