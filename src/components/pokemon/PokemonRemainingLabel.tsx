import * as React from 'react';
import { cn } from '@/lib/utils';
import { 
  pokemonTypeVariants,
  remainingIndicatorTypography,
  remainingIndicatorStyle,
  type PokemonTypeVariants 
} from '@/lib/theme/components/pokemon/typeLabel';

export interface PokemonRemainingLabelProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'size'>,
    Pick<PokemonTypeVariants, 'size'> {
  count: number;
}

export const PokemonRemainingLabel = React.forwardRef<HTMLSpanElement, PokemonRemainingLabelProps>(
  ({ count, size = 'md', className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          pokemonTypeVariants({ size }),
          remainingIndicatorStyle,
          remainingIndicatorTypography,
          className
        )}
        {...props}
      >
        +{count}
      </span>
    );
  }
);

PokemonRemainingLabel.displayName = 'PokemonRemainingLabel';

