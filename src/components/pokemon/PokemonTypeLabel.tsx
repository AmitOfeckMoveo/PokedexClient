import * as React from 'react';
import { cn } from '@/lib/utils';
import { pokemonTypeVariants, type PokemonTypeVariants } from '@/lib/theme/components/pokemon/typeLabel';
import type { PokemonType } from '@/types/pokemon';

export interface PokemonTypeLabelProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'size'>,
    Pick<PokemonTypeVariants, 'size'> {
  type: PokemonType;
}

/**
 */
export const pokemonTypeClassMap: Record<PokemonType | 'remaining', string> = {
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
  remaining: 'bg-white text-neutral-500 border-neutral-200',
};

/**
 */
export const PokemonTypeLabel = React.forwardRef<HTMLSpanElement, PokemonTypeLabelProps>(
  ({ type, size = 'md', className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          pokemonTypeVariants({ size }),
          pokemonTypeClassMap[type],
          className
        )}
        {...props}
      >
        {type}
      </span>
    );
  }
);

PokemonTypeLabel.displayName = 'PokemonTypeLabel';

