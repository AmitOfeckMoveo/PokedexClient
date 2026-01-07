import * as React from 'react';
import { cn } from '@/lib/utils';
import { 
  pokemonTypeVariants, 
  pokemonTypeClassMap,
  type PokemonTypeVariants 
} from '@/lib/theme/components/pokemon/typeLabel';
import type { PokemonType } from '@/types/pokemon';

export interface PokemonTypeLabelProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'size'>,
    Pick<PokemonTypeVariants, 'size'> {
  type: PokemonType;
}

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

