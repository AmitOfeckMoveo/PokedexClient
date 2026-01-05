import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Image Component Variants
 * Based on Figma specifications:
 * - Small avatars: 24x24px (xs)
 * - Medium avatars: 54x54px (md)
 * - Large popup images: 156x156px (xl)
 * - Support for different shapes including rectangular
 * - Optional padding and borders
 */
export const imageVariants = cva(
  'object-contain',
  {
    variants: {
      shape: {
        circle: 'rounded-full',
        rounded: 'rounded-lg',
        square: 'rounded-none',
        rectangular: 'rounded-none', 
      },
      size: {
        xs: 'w-image-xs h-image-xs', 
        sm: 'w-image-sm h-image-sm', 
        md: 'w-image-md h-image-md', 
        lg: 'w-image-lg h-image-lg', 
        xl: 'w-image-xl h-image-xl',
      },
      padding: {
        none: '',
        sm: 'p-1', 
      },
      border: {
        none: '',
        image: 'border border-image', 
      },
    },
    defaultVariants: {
      shape: 'square',
      size: 'md',
      padding: 'sm',
      border: 'none',
    },
  }
);

export type ImageVariants = VariantProps<typeof imageVariants>;

