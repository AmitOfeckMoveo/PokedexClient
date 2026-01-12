import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const pokemonNameVariants = cva('flex items-center');

export type PokemonNameVariants = VariantProps<typeof pokemonNameVariants>;

export const pokemonNameAvatarVariants = cva(
  cn(
    'w-image-size-md h-image-size-md',
    'rounded-full',
    'bg-pokemon-avatar-bg/60',
    'flex items-center justify-center',
    'flex-shrink-0 overflow-hidden'
  )
);


export const pokemonNameTypography = 'subheading-regular' as const;
export const pokemonNameColor = 'neutral-700' as const;
export const pokemonNameTextGap = 'ml-pokemon-name-gap-text';
export const pokemonNameIconGap = 'ml-pokemon-name-gap-icon';
