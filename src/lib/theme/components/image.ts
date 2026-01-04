import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Image Component Variants
 * Based on Figma specifications:
 * - Circular avatars: 54x54px
 * - Flexible sizing via className
 * - Support for different shapes
 */
export const imageVariants = cva(
  'object-contain p-1',
  {
    variants: {
      shape: {
        circle: 'rounded-full',
        rounded: 'rounded-lg',
        square: 'rounded-none',
      },
      size: {
        sm: 'w-12 h-12',
        md: 'w-[54px] h-[54px]',
        lg: 'w-20 h-20',
      },
    },
    defaultVariants: {
      shape: 'square',
      size: 'md',
    },
  }
);

export type ImageVariants = VariantProps<typeof imageVariants>;

