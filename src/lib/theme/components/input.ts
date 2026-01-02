import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Input Component Variants
 * Based on Figma specifications:
 * - Width: 293px (default)
 * - Height: 38px
 * - Border radius: 8px
 * - Padding: Top 8px, Right 16px (or 12px with right icon), Bottom 8px, Left 12px
 * - Gap: 8px
 * States: Default, Hover, Pressed (Focus), With value, After search, Disable
 */
export const inputVariants = cva(
  'h-[38px] rounded-lg border body-regular transition-colors focus:outline-none disabled:pointer-events-none flex items-center gap-2 py-2 pl-3',
  {
    variants: {
      state: {
        default: 'border-neutral-200 bg-white hover:border-neutral-600 focus:border-neutral-500',
        disabled: 'bg-neutral-100 border-neutral-200 text-neutral-300 cursor-not-allowed',
      },
      inputWidth: {
        default: 'w-[293px]',
        full: 'w-full',
        auto: 'w-auto',
      },
      hasRightIcon: {
        true: 'pr-3',  
        false: 'pr-4', 
      },
    },
    defaultVariants: {
      state: 'default',
      inputWidth: 'default',
      hasRightIcon: false,
    },
  }
);

export type InputVariants = VariantProps<typeof inputVariants>;

