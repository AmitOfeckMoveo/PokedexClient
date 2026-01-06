import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Tooltip Component Variants
 * Pure presentation component - no behavior, no positioning
 * - tone: Visual style (dark/light)
 * - size: Padding and typography (sm/md)
 * - All values from theme tokens
 */
export const tooltipVariants = cva(
  cn(
    'rounded-tooltip inline-block whitespace-normal text-center relative',
    'overflow-visible',
    'max-w-[min(345px,calc(100vw-2rem))]'
  ),
  {
    variants: {
      tone: {
        dark: 'bg-neutrals-1000 text-white',
        light: 'bg-white text-neutral-700 border border-neutral-200',
      },
      size: {
        sm: cn(
          'py-tooltip-sm-y px-tooltip-sm-x',
          'sub-body-regular'
        ),
        md: cn(
          'py-tooltip-md-y px-tooltip-md-x',
          'sub-body-regular'
        ),
      },
    },
    defaultVariants: {
      tone: 'dark',
      size: 'md',
    },
  }
);

/**
 * Tooltip Arrow Variants
 * Separate variant system for arrow styling
 * - tone: Matches tooltip tone for color consistency
 * - size: Arrow size based on tooltip size
 * - All values from theme tokens
 */
export const tooltipArrowVariants = cva(
  cn(
    'absolute top-full left-1/2 -translate-x-1/2',
    'w-0 h-0 z-10',
    'border-l-transparent border-r-transparent'
  ),
  {
    variants: {
      tone: {
        dark: 'border-t-[#43464F]', // neutrals-1000 from Figma
        light: cn(
          'border-t-white',
          'border-l-neutral-200 border-r-neutral-200'
        ),
      },
      size: {
        sm: 'border-l-[6px] border-r-[6px] border-t-[7px]', // 12px wide × 7px tall from Figma
        md: 'border-l-[6px] border-r-[6px] border-t-[7px]', // 12px wide × 7px tall from Figma
      },
    },
    defaultVariants: {
      tone: 'dark',
      size: 'md',
    },
  }
);

export type TooltipVariants = VariantProps<typeof tooltipVariants>;
export type TooltipArrowVariants = VariantProps<typeof tooltipArrowVariants>;
