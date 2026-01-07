import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const pokemonHpVariants = cva(
    'inline-flex items-center bg-transparent',
    {
      variants: {
        size: {
          sm: 'h-hp-badge-height-sm px-hp-badge-px-sm gap-hp-badge-gap-sm',
          md: 'h-hp-badge-height-md px-hp-badge-px-md gap-hp-badge-gap-md',
        },
      },
      defaultVariants: {
        size: 'md',
      },
    }
  );
  

export type PokemonHpVariants = VariantProps<typeof pokemonHpVariants>;

export const pokemonHpTypographyMap = {
  sm: 'text-hp-value-sm',
  md: 'text-hp-value-md',
} as const;

export const pokemonHpIconVariants = {
  sm: cn(
    '!w-hp-icon-sm',
    '!h-hp-icon-sm',
    'rounded-hp-icon-sm',
    'border-hp-icon-sm',
    'border-solid',
    'border-hp-icon',
    'flex-shrink-0'
  ),
  md: cn(
    '!w-hp-icon-md',
    '!h-hp-icon-md',
    'rounded-hp-icon-md',
    'border-hp-icon-md',
    'border-solid',
    'border-hp-icon',
    'flex-shrink-0'
  ),
} as const;

