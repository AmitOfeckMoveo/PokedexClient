import { cva, type VariantProps } from 'class-variance-authority';

export const pokemonNameVariants = cva(
  'flex items-center',
  {
    variants: {},
    defaultVariants: {},
  }
);

export type PokemonNameVariants = VariantProps<typeof pokemonNameVariants>;

/**
 * Avatar container styles
 * - Size: 54x54px
 * - Shape: circle (rounded-full)
 * - Background: #EBEFF699 (60% opacity)
 */
export const pokemonNameAvatarVariants = cva(
  'w-[54px] h-[54px] rounded-full bg-[#EBEFF699] flex items-center justify-center flex-shrink-0 overflow-hidden',
  {
    variants: {},
    defaultVariants: {},
  }
);

/**
 * Typography configuration for Pokemon name text
 * - Typography: Subheading / Regular
 * - Font size: 16px
 * - Line height: 24px
 * - Color: Neutrals/700 (#313336)
 */
export const pokemonNameTypography = 'subheading-regular';
export const pokemonNameColor = 'neutral-700';

/**
 * Spacing configuration
 * - Gap between avatar and text: 16px (ml-4)
 * - Gap between text and icon: 8px (ml-2)
 */
export const pokemonNameTextGap = 'ml-4';
export const pokemonNameIconGap = 'ml-2';

