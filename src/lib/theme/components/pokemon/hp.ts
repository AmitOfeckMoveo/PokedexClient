import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const pokemonHpVariants = cva(
  cn(
    'inline-flex items-center',
    'bg-transparent'
  ),
  {
    variants: {
      size: {
        sm: cn(
          'h-hp-badge-height-sm',
          'px-hp-badge-px-sm',
          'gap-hp-badge-gap-sm'
        ),
        md: cn(
          'h-hp-badge-height-md',
          'px-hp-badge-px-md',
          'gap-hp-badge-gap-md'
        ),
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type PokemonHpVariants = VariantProps<typeof pokemonHpVariants>;

export const pokemonHpTypographyMap = {
  sm: 'text-[14px] leading-[22px]',
  md: 'text-[20px] leading-[27px]',
} as const;

export const pokemonHpIconVariants = {
  sm: cn(
    'rounded-hp-icon-sm',
    'border-hp-icon-sm',
    'border-solid',
    'border-hp-icon'
  ),
  md: cn(
    'rounded-hp-icon-md',
    'border-hp-icon-md',
    'border-solid',
    'border-hp-icon'
  ),
} as const;

