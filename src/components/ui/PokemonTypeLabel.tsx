import * as React from 'react';
import { cn } from '@/lib/utils';
import { pokemonTypeVariants, type PokemonTypeVariants } from '@/lib/theme/components/pokemonTypeLabel';
import type { PokemonType } from '@/types/pokemon';

export interface PokemonTypeLabelProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'size'>,
    Pick<PokemonTypeVariants, 'size'> {
  type: PokemonType;
}

/**
 * Pokemon Type to Tailwind Token Mapping
 * Maps PokemonType to Tailwind class names using tokens from tailwind.config.js
 */
const pokemonTypeClassMap: Record<PokemonType, string> = {
  Normal: 'bg-pokemonTypes-normal-bg text-pokemonTypes-normal-text border-neutral-200',
  Water: 'bg-pokemonTypes-water-bg text-pokemonTypes-water-text border-neutral-200',
  Fire: 'bg-pokemonTypes-fire-bg text-pokemonTypes-fire-text border-neutral-200',
  Grass: 'bg-pokemonTypes-grass-bg text-pokemonTypes-grass-text border-neutral-200',
  Electric: 'bg-pokemonTypes-electric-bg text-pokemonTypes-electric-text border-neutral-200',
  Ice: 'bg-pokemonTypes-ice-bg text-pokemonTypes-ice-text border-neutral-200',
  Fighting: 'bg-pokemonTypes-fighting-bg text-pokemonTypes-fighting-text border-neutral-200',
  Poison: 'bg-pokemonTypes-poison-bg text-pokemonTypes-poison-text border-neutral-200',
  Ground: 'bg-pokemonTypes-ground-bg text-pokemonTypes-ground-text border-neutral-200',
  Flying: 'bg-pokemonTypes-flying-bg text-pokemonTypes-flying-text border-neutral-200',
  Psychic: 'bg-pokemonTypes-psychic-bg text-pokemonTypes-psychic-text border-neutral-200',
  Bug: 'bg-pokemonTypes-bug-bg text-pokemonTypes-bug-text border-neutral-200',
  Rock: 'bg-pokemonTypes-rock-bg text-pokemonTypes-rock-text border-neutral-200',
  Ghost: 'bg-pokemonTypes-ghost-bg text-pokemonTypes-ghost-text border-neutral-200',
  Dragon: 'bg-pokemonTypes-dragon-bg text-pokemonTypes-dragon-text border-neutral-200',
  Steel: 'bg-pokemonTypes-steel-bg text-pokemonTypes-steel-text border-neutral-200',
  Dark: 'bg-pokemonTypes-dark-bg text-pokemonTypes-dark-text border-neutral-200',
  Fairy: 'bg-pokemonTypes-fairy-bg text-pokemonTypes-fairy-text border-neutral-200',
};

/**
 * PokemonTypeLabel Component
 * 
 * Uses Tailwind tokens directly from tailwind.config.js
 * Pure and stateless - renders a single label
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

