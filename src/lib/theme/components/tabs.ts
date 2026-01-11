import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Tab Item Variants
 * Styling for individual tab items
 * - All values from theme tokens
 * - Supports two variants: 'pills' (rounded background) and 'underline' (bottom border)
 */
export const tabItemVariants = cva(
  cn(
    'inline-flex items-center justify-center',
    'body-regular text-neutral-700',
    'cursor-pointer transition-colors',
    'focus:outline-none',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  ),
  {
    variants: {
      variant: {
        pills: cn(
          'rounded-tab-pills',
          'px-tab-pills-px py-tab-pills-py',
          'h-tab-pills-height',
          'gap-tab-pills-gap'
        ),
        underline: cn(
          'border-b-2 border-transparent',
          'px-tab-underline-px py-tab-underline-py',
          'h-tab-underline-height',
          'gap-tab-underline-gap'
        ),
      },
      active: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // Pills variant - active state
      {
        variant: 'pills',
        active: true,
        class: cn(
          'bg-primary-50'
        ),
      },
      // Pills variant - inactive state
      {
        variant: 'pills',
        active: false,
        class: cn(
          'hover:bg-neutral-100'
        ),
      },
      // Underline variant - active state
      {
        variant: 'underline',
        active: true,
        class: cn(
          'border-b-black'
        ),
      },
    ],
    defaultVariants: {
      variant: 'pills',
      active: false,
    },
  }
);

export type TabItemVariants = VariantProps<typeof tabItemVariants>;
