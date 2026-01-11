import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';


export const pokedexHeaderVariants = cva(
  cn(
    'h-header-height',
    'bg-white',
    'flex items-center',
    'px-header-px',
    'border-b border-neutral-100'
  )
);

export type PokedexHeaderVariants = VariantProps<typeof pokedexHeaderVariants>;


export const pokedexHeaderContentVariants = cva(
  cn(
    'flex items-center',
    'gap-header-content-gap'
  )
);

export type PokedexHeaderContentVariants = VariantProps<typeof pokedexHeaderContentVariants>;

export const pokedexHeaderLogoVariants = cva(
  cn(
    'h-header-logo-height',
    'w-auto'
  )
);

export type PokedexHeaderLogoVariants = VariantProps<typeof pokedexHeaderLogoVariants>;

