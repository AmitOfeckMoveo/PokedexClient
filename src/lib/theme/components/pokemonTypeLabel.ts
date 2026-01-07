import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Pokemon Type Label Variants
 * 
 * UI-only variants: size, padding, typography, border-radius
 * No colors, no Pokémon-specific logic
 */
export const pokemonTypeVariants = cva(
  cn(
    'inline-flex items-center justify-center',
    'font-medium',
    'border'
  ),
  {
    variants: {
      size: {
        sm: cn(
          'px-2 py-0.5',
          'caption-medium',
          'rounded-sm'
        ),
        md: cn(
          'px-1 py-1', // px-1 = 4px to match Figma padding
          'body-medium',
          'rounded-md'
        ),
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type PokemonTypeVariants = VariantProps<typeof pokemonTypeVariants>;

