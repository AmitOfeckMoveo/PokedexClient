import { cva, type VariantProps } from 'class-variance-authority';

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
  'inline-flex items-center justify-center rounded-[4px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none gap-1',
  {
    variants: {
      variant: {
        // uses your color tokens from tailwind.config.js
        primary: 'bg-primary-300 text-white hover:bg-primary-400 active:bg-primary-500 disabled:bg-neutral-200 disabled:text-neutral-300',
        secondary: 'bg-white border border-primary-300 text-primary-300 hover:bg-primary-50 hover:border-primary-300 active:bg-primary-100 active:border-primary-300 disabled:bg-white disabled:border-neutral-300 disabled:text-neutral-300',
      },
      size: {
        small: `min-h-8 px-4 py-[9px] ${buttonTypography.small}`,
        medium: `min-h-9 px-4 py-[10px] ${buttonTypography.medium}`,
        large: `min-h-10 px-4 py-[12px] ${buttonTypography.large}`,
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

