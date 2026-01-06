import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonTypography = {
  small: 'button-small',
  medium: 'button-big',
  large: 'button-big',
} as const;

/**
 * Type: Primary, Secondary
 * State: Default, Hover, Pressed, Disabled
 * Size: Small (32px), Medium (36px), Large (40px)
 */
export const buttonVariants = cva(
  // Base styles
  cn(
    'inline-flex items-center justify-center',
    'rounded-button font-normal transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none',
    'gap-button',
    'px-button-px'
  ),
  {
    variants: {
      variant: {
        primary: cn(
          'bg-primary-300 text-white',
          'hover:bg-primary-400 active:bg-primary-500',
          'disabled:bg-neutral-200 disabled:text-neutral-300'
        ),
        secondary: cn(
          'bg-white text-primary-300 border border-primary-300',
          'hover:bg-primary-50 active:bg-primary-100',
          'disabled:bg-white disabled:border-neutral-300 disabled:text-neutral-300'
        ),
      },
      size: {
        small: cn('min-h-button-height-sm', 'py-button-py-sm', buttonTypography.small),
        medium: cn('min-h-button-height-md', 'py-button-py-md', buttonTypography.medium),
        large: cn('min-h-button-height-lg', 'py-button-py-lg', buttonTypography.large),
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

// Reusable container classes for button content
export const buttonContentContainer = 'flex items-center gap-button';

