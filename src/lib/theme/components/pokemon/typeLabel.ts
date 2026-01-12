import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { PokemonType } from '@/types/pokemon';

/**
 * Pokemon Type Label Variants
 * Handles layout, spacing, border, and radius only.
 * Typography is applied separately based on variant.
 */
export const pokemonTypeVariants = cva(
  cn(
    'inline-flex items-center justify-center',
    'border'
  ),
  {
    variants: {
      size: {
        sm: cn(
          'px-2 py-0.5',
          'rounded-sm'
        ),
        md: cn(
          'px-1 py-1', 
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

/**
 * Pokemon Type Typography Map
 * Maps size to typography token classes for regular types
 */
export const pokemonTypeTypographyMap = {
  sm: 'caption-medium',
  md: 'body-medium',
} as const;

/**
 * Remaining Indicator Typography
 * Always uses indicator-medium regardless of size (matches Figma: 10px/19px)
 */
export const remainingIndicatorTypography = 'indicator-medium';

/**
 * Pokemon Type Class Map
 * Maps PokemonType to Tailwind design token classes
 * Only contains real Pokémon types - no UI-only indicators
 */
export const pokemonTypeClassMap: Record<PokemonType, string> = {
  Normal: 'bg-gray-50 text-gray-500 border-neutral-200',
  Water: 'bg-blue-50 text-blue-500 border-neutral-200',
  Fire: 'bg-red-50 text-red-500 border-neutral-200',
  Grass: 'bg-green-50 text-green-500 border-neutral-200',
  Electric: 'bg-yellow-50 text-yellow-500 border-neutral-200',
  Ice: 'bg-teal-50 text-teal-500 border-neutral-200',
  Fighting: 'bg-red-100 text-red-600 border-neutral-200',
  Poison: 'bg-purple-50 text-purple-500 border-neutral-200',
  Ground: 'bg-yellow-100 text-yellow-600 border-neutral-200',
  Flying: 'bg-purple-100 text-purple-600 border-neutral-200',
  Psychic: 'bg-pink-50 text-pink-500 border-neutral-200',
  Bug: 'bg-green-100 text-green-600 border-neutral-200',
  Rock: 'bg-yellow-200 text-yellow-700 border-neutral-200',
  Ghost: 'bg-purple-200 text-purple-700 border-neutral-200',
  Dragon: 'bg-red-200 text-red-700 border-neutral-200',
  Steel: 'bg-gray-100 text-purple-800 border-neutral-200',
  Dark: 'bg-gray-200 text-gray-600 border-neutral-200',
  Fairy: 'bg-pink-100 text-pink-600 border-neutral-200',
};

/**
 * Remaining Indicator Style
 * UI-only style for the "+N" indicator
 * Shares the same visual layout (padding, border, radius) as PokemonTypeLabel
 * but uses neutral colors to distinguish it from real Pokémon types
 */
export const remainingIndicatorStyle = 'bg-neutral-50 text-neutral-500 border-neutral-200';

