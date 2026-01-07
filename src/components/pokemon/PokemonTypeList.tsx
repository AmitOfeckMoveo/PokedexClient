import * as React from 'react';
import { cn } from '@/lib/utils';
import { PokemonTypeLabel, pokemonTypeClassMap } from '@/components/pokemon/PokemonTypeLabel';
import { pokemonTypeVariants } from '@/lib/theme/components/pokemon/typeLabel';
import { pokemonTypeListVariants } from '@/lib/theme/components/pokemon/typeList';
import type { PokemonType } from '@/types/pokemon';

export interface PokemonTypeListProps {
  types: PokemonType[];
  size?: 'sm' | 'md';
  maxVisible?: number; // Optional - if undefined, show all types
  className?: string;
}

/**
 * PokemonTypeList Component
 * 
 * Pure UI component for rendering multiple PokemonTypeLabel components.
 * Displays up to maxVisible types, with a "+X" indicator for remaining types.
 * If maxVisible is not provided, shows all types without indicator.
 * 
 * Layout: Horizontal row with consistent gap, no wrapping.
 * No domain logic, fully reusable.
 */
export const PokemonTypeList = React.forwardRef<HTMLDivElement, PokemonTypeListProps>(
  ({ types, size = 'md', maxVisible, className, ...props }, ref) => {
    // If maxVisible is not provided, show all types
    const shouldShowAll = maxVisible === undefined;
    const visibleTypes = shouldShowAll ? types : types.slice(0, maxVisible);
    const remainingCount = shouldShowAll ? 0 : types.length - maxVisible;

    return (
      <div
        ref={ref}
        className={cn(
          pokemonTypeListVariants(),
          className
        )}
        {...props}
      >
        {visibleTypes.map((type) => (
          <PokemonTypeLabel
            key={type}
            type={type}
            size={size}
          />
        ))}
        {remainingCount > 0 && (
          <span
            className={cn(
              pokemonTypeVariants({ size }),
              pokemonTypeClassMap.remaining
            )}
          >
            +{remainingCount}
          </span>
        )}
      </div>
    );
  }
);

PokemonTypeList.displayName = 'PokemonTypeList';

