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
        xs: 'w-image-size-xs h-image-size-xs',
        sm: 'w-image-size-sm h-image-size-sm',
        md: 'w-image-size-md h-image-size-md',
        lg: 'w-image-size-lg h-image-size-lg',
      },
    },
    defaultVariants: {
      shape: 'square',
      size: 'md',
    },
  }
);

export type ImageVariants = VariantProps<typeof imageVariants>;

