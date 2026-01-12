import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Pokemon Type List Variants
 * 
 * Variants for the PokemonTypeList container component.
 */
export const pokemonTypeListVariants = cva(
  cn(
    'inline-flex items-center gap-1'
  )
);

export type PokemonTypeListVariants = VariantProps<typeof pokemonTypeListVariants>;

