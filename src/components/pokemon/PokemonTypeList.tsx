import * as React from 'react';
import { cn } from '@/lib/utils';
import { PokemonTypeLabel } from '@/components/pokemon/PokemonTypeLabel';
import { pokemonTypeListVariants } from '@/lib/theme/components/pokemon/typeList';
import type { PokemonType } from '@/types/pokemon';

export interface PokemonTypeListProps {
  types: PokemonType[];
  size?: 'sm' | 'md';
  maxVisible?: number; 
  className?: string;
}

/**
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
          <PokemonTypeLabel
            key="remaining"
            type="remaining"
            count={remainingCount}
            size={size}
          />
        )}
      </div>
    );
  }
);

PokemonTypeList.displayName = 'PokemonTypeList';

